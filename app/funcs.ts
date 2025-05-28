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
    const [dict, setDict]: any[] = useState([])

    useEffect(() => {
        const access = async () => {
        try {
            const data = await FetchData("https://kaeru2193.github.io/Phun-Resources/dict/phun-dict.json");
            const json = JSON.parse(data)

            setDict(json.data)
        } catch (error) {
            setDict([])
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
        const pron = isMark
            ? marks[w]
            : PhunWordToLatin(dict, w).join("")
        return (isMark && !isStartMark) || Object.hasOwn(startMarks, wordList[idx - 1])
            ? pron 
            : " " + pron
    }).join("").replace(/^\s/, "")

    return processed
}

export const PhunWordToLatin = (dict: any[], word: string) => {
    const splitted = word.split("")

    const processed = splitted.map((c, idx) => {
        const dictEntry = dict.find(e => e.word == c)
        if (!dictEntry) {
            return c
        }
        
        const dictPron: string = dictEntry.pron

        const nextEntry = dict.find(e => e.word == splitted[idx + 1])
        if (!nextEntry) {
            return dictEntry.latinPron
        }

        const nextPron: string = nextEntry.pron

        const splitFlag =
            ( dictPron.match(/[slmn]\d$/g) && nextPron.match(/^[aiueo]/g) ) || //末子音と母音の曖昧さ回避
            ( dictPron.match(/[aiueo]\d$/g) && nextPron.match(/^[slmn]/g) ) ||
            ( dictPron.match(/ng\d$/g) && nextPron.match(/^[aiueo]/g) ) || //ngとg始まりの語の曖昧さ回避
            ( dictPron.match(/n\d$/g) && nextPron.match(/^g/g) )

        return splitFlag ? dictEntry.latinPron + "'" : dictEntry.latinPron
    })

    return processed
}