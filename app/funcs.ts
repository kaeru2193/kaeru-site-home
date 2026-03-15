import { useState, useEffect } from "react";

export const FetchData = async (url: string) => { 
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("データの取得に失敗しました");
        }
        
        const data: any = await res.text();

        return data
    } catch (error) {
        console.error(error);
        throw error
    }
};

export const getPhunPron = (text: string) => {
    const [dict, setDict] = useState<any[]>([])
    const [charaDict, setCharaDict] = useState<any[]>([])

    useEffect(() => {
        const access = async () => {
        try {
            const data = await FetchData("https://kaeru2193.github.io/Phun-Resources/dict/phun-dict.json");
            const json = JSON.parse(data)
            const charaData = await FetchData("https://kaeru2193.github.io/Phun-Resources/dict/phun-chara.json");
            const charaJSON = JSON.parse(charaData)

            setDict(json.data)
            setCharaDict(charaJSON)
        } catch (error) {
            setDict([])
            setCharaDict([])
        }
        }
        access()
    }, []);

    const marks: any = {
        "。": ".",
        "、": ",",
        "「": "“",
        "」": "”",
        "！": "!",
        "？": "?",
        "〈": "‹",
        "〉": "›",
        "（": "(",
        "）": ")",
        "―": "—",
        " ": "　",
    }

    const startMarks: any = {
        "「": "“",
        "〈": "‹",
        "（": "(",
    }
    const wordList = text.split(".")

    const processed = wordList.map((w, idx) => {
        const isMark = Object.hasOwn(marks, w)
        const isStartMark = Object.hasOwn(startMarks, w)

        const regexp = w.match(/^(.+)\:(\d+)$/)

        let pron: string = w //最後はそのままの文字にフォールバック
        if (regexp) {
            pron = charaDict
                .find(c => c.chara == regexp[1])
                ?.langs["phun"][Number(regexp[2]) - 1]
                ?.pron

            pron = pron //変換できればラテン文字に更に変換、指定が間違っていればそのまま表示
                ? numberPronToLatin(pron)
                : regexp[1]
        } else {
            const dictEntry = dict.find(e => e.word == w)
            pron = isMark
                ? marks[w]
                : dictEntry
                    ? dictEntry.latinPron
                    : PhunWordToLatin(dict, w)
        }

        return (isMark && !isStartMark) || Object.hasOwn(startMarks, wordList[idx - 1])
            ? pron 
            : " " + pron
    }).join("").replace(/^\s/, "")

    return processed
}

export const PhunWordToLatin = (dict: any[], word: string) => {
    const splitted = word.split("")

    const processed = splitted.map(c => {
        const dictEntry = dict.find(e => e.word == c)
        return dictEntry
            ? dictEntry.pron
            : c
    }).join(" ")

    

    return numberPronToLatin(processed)
}

function numberPronToLatin(prons: string) {
    const marks: {[key: string]: string[]} = {
        a: ["á", "à", "â"],
        i: ["í", "ì", "î"],
        u: ["ú", "ù", "û"],
        e: ["é", "è", "ê"],
        o: ["ó", "ò", "ô"]
    }

    const words = prons.split(" ")
    return words.map((p, idx) => {
        const splittedPron = p.match(/^(.*?)([aiueo]+)(.*)([123])$/)
        if (!splittedPron) { return p }
        const [_, hC, V, coda, tone] = splittedPron

        const firstV = V[0] //母音字の一文字目
        const markedFirstV = marks[firstV][Number(tone) - 1] //母音字の一文字目をアクセント付きのものに変換

        const markedV = markedFirstV + V.slice(1) //母音全体を結合
        const latinPron = hC + markedV + coda //ラテン文字表記の全体

        if (!words[idx + 1]) { //語の末尾の文字であるとき
            return latinPron
        }

        const dictPron = p
        const nextPron = words[idx + 1]

        const splitFlag =
            ( dictPron.match(/[slmn]\d$/g) && nextPron.match(/^[aiueo]/g) ) || //末子音と母音の曖昧さ回避
            ( dictPron.match(/[aiueo]\d$/g) && nextPron.match(/^[slmn]/g) ) ||
            ( dictPron.match(/ng\d$/g) && nextPron.match(/^[aiueo]/g) ) || //ngとg始まりの語の曖昧さ回避
            ( dictPron.match(/n\d$/g) && nextPron.match(/^g/g) )

        return splitFlag ? latinPron + "'" : latinPron //区切りが必要なときはアポストロフィーを挿入
    }).join("")
}