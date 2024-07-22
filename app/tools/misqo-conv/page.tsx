"use client"

import { useState } from "react";
import { Input, Output, BreakLine } from "../components";

const PhunNum: any = {
    "0": "〇",
    "1": "〡",
    "2": "〢",
    "3": "〣",
    "4": "〤",
    "5": "〥",
    "6": "〦",
    "7": "〧",
    "8": "〨",
    "9": "〩",
    "a": "〹",
    "b": "〺",
    ".": "・",
    "-": "／"
}

const Page = () => {
    const [num, setNum] = useState("0")

    const result = num.split("").map(e => {
        return PhunNum[e]
    }).join("")

    return (
        <>
            <h1>算用数字を雰算字に変換</h1>
            <Input var={num} set={setNum} default={num} label="変換する数値 (12進数)"/>

            <BreakLine text="出力"/>
            <Output var={result}/>
        </>
    )
}

export default Page