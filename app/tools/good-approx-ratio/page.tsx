"use client"

import { useState } from "react";
import { Input, Output, BreakLine } from "../components";

const approx = (num: number, max: number) => {
    let min_error = Infinity
    const ratios = []
    for (let i = 1; i <= max; i++) {
        const j = Math.round(i * num) //分子
        const error = Math.abs(num - j / i)
        if (min_error > error) {
            ratios.push(`${j}:${i}　(${j/i})`)
            min_error = error
            if (error == 0) { break }
        }
    }
    return ratios
}

const Page = () => {
    const [num, setNum] = useState("3.1415926535")
    const [max, setMax] = useState("1000")

    const ratios = approx(Number(num), Number(max))

    return (
        <>
            <h1>良い整数比の近似を見つける</h1>
            <p>素朴な探索で良い近似を探します。</p>

            <Input var={num} set={setNum} default={num} label="比の値" number/>
            <Input var={max} set={setMax} default={max} label="分母の最大値" number/>

            <BreakLine text="出力"/>
            <Output var={ratios.join("\n")} textarea height={15}/>
        </>
    )
}

export default Page