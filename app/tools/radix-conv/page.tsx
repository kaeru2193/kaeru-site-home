"use client"

import { useState } from "react";
import { Input, Output, BreakLine } from "../components";
import BigNumber from "bignumber.js";

const Page = () => {
    const [num, setNum] = useState("0")
    const [sBase, setSBase] = useState(10)
    const [eBase, setEBase] = useState(12)
    const [decimal, setDecimal] = useState(100)

    let result: string
    try {
        BigNumber.config({ DECIMAL_PLACES: decimal });
        const bigNum = BigNumber(num, sBase)
        result = bigNum.toString(eBase)
    } catch (e) {
        result = "エラー"
    }

    return (
        <>
            <h1>進数変換器</h1>
            <p>小数点以下の処理にも対応した進数変換器です。</p>
            <Input var={num} set={setNum} default={num} label="変換する数値"/>
            <Input var={sBase} set={(n: string) => {setSBase(Number(n))}} default={sBase} label="変換元の進数 (2-36)" number/>
            <Input var={eBase} set={(n: string) => {setEBase(Number(n))}} default={eBase} label="変換先の進数 (2-36)" number/>
            <Input var={decimal} set={(n: string) => {setDecimal(Number(n))}} default={decimal} label="有効桁数 (小数点以下)" number/>

            <BreakLine text="出力"/>
            <Output var={result}/>
        </>
    )
}

export default Page