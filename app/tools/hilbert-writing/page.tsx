"use client"

import { useState } from "react";
import { Input, Output, BreakLine } from "../components";
import style from "./page.module.css"

type charaInfo = {
    chara: string,
    color: string
}

const shapeHilbert = (text: charaInfo[]) => {
    if (!text) {return [[]]}
    if (text.length == 1) { return [text] } //末端はそのまま返す

    const parts: charaInfo[][][] = Array(4).fill([]).map((_, idx) =>
        text.slice(
            text.length / 4 * idx,
            text.length / 4 * (idx + 1)
        )
    ).map(p => shapeHilbert(p))

    return joinSquare(flipText(parts[0], false), parts[1], parts[2], flipText(parts[3], true))
}

const flipText = (text: charaInfo[][], rotateRight: boolean) => { //反転・回転
    const arr = text
    const rotated: charaInfo[][] = Array(arr.length).fill("").map(_ => Array(arr.length).fill(""))
    arr.forEach((l, row) => l.forEach((c, col) => {
        if (rotateRight) {
            rotated[arr.length - col - 1][arr.length - row - 1] = c
        } else {
            rotated[col][row] = c
        }
    }))
    return rotated
}

const joinSquare = (a: charaInfo[][], b: charaInfo[][], c: charaInfo[][], d: charaInfo[][]) => { //コの字型に結合
    const ab = [...a, ...b]
    const dc = [...d, ...c]
    const joined = ab.map((l, idx) => [...l, ...dc[idx]])
    return joined
}

const Page = () => {
    const [text, setText] = useState("")
    let result: charaInfo[][] = [[]]
    let resultText = ""

    if (text.length >= 4) {
        const scale = Math.floor(Math.log2(text.length) / 2)
        const formatted = text.replace(/\n/g, "").slice(0, Math.pow(4, scale)).split("")

        const withColor = formatted.map((c, idx) => {return {
            chara: c,
            color: `hsl(${360 / formatted.length * idx} 100% 60%)`
        }})

        result = shapeHilbert(withColor)
        resultText = result.map(l => l.map(c => c.chara).join("")).join("\n")
    } else {
        resultText = text
    }

    return (
        <>
            <h1>ヒルベルト曲線に沿った書記</h1>
            <p>文字列をヒルベルト曲線に沿って配置します。文字数は最も近い4の累乗数に切り捨てられます。</p>
            <Input var={text} set={setText} default={text} label="文字列" textarea height={10}/>

            <BreakLine text="出力"/>
            <Output var={resultText} textarea height={Math.max(10, resultText.split("\n").length)}/>

            <BreakLine text="色付き表示"/>
            <div className={style.pokiLinja}>
                {result.map(l => <div>
                    {l.map(c => <span style={{color: c.color}}>
                        {c.chara}
                    </span>)}
                </div>)}
            </div>
        </>
    )
}

export default Page