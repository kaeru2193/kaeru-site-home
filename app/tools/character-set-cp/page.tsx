"use client"

import { useState } from "react";
import { Output, BreakLine, OptionRow, Select } from "../components";
import { charas } from "./charas";

const Page = () => {
    const [type, setType] = useState("ascii")

    return (
        <>
            <h1>文字集合を手軽にコピペ</h1>
            <OptionRow label="文字集合">
                <Select var={type} set={setType} data={{
                    ascii: "ASCII (制御文字を除く)",
                    hiragana: "平仮名",
                    katakana: "片仮名",
                    joyo: "常用漢字",
                    jis1: "JIS第一水準漢字",
                    jis2: "JIS第二水準漢字",
                    jis3: "JIS第三水準漢字",
                    jis4: "JIS第四水準漢字"
                }}/>
            </OptionRow>

            <BreakLine text="出力"/>
            <Output textarea height={10} var={charas[type]}/>
        </>
    )
}

export default Page