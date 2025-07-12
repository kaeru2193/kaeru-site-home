"use client"

import { useState, useEffect } from "react";
import { FetchData, PhunWordToLatin } from "@/funcs";
import { Input, Output, Select, OptionRow, BreakLine } from "../components";

const Page = () => {
    const [main, setMain]: any[] = useState(<p>データ読み込み中...</p>)

    useEffect(() => {
        const access = async () => {
          try {
            const data = await FetchData("https://kaeru2193.github.io/Phun-Resources/dict/phun-dict.json");
            const json = JSON.parse(data)

            setMain(
                <div>
                    <App data={json.data}/>
                </div>
            )

          } catch (error) {
            setMain(
                <div>
                    <p>データ取得に失敗しました。時間を空けて再度お試しください。</p>
                </div>
            )
          }
        }
    
        access()
    }, []);

    return main
}

const App = (props: {data: any[]}) => {
    const [text, setText] = useState("")
    const [type, setType] = useState("accent")
    
    const sentences = text.split(/([。、「」！？〈〉―\n])/)
    const processed = sentences.map(s => {
        const words = s.split(" ")

        const extractEntry = (text: string, func: Function) => text.split("").map(c => {
            const search = props.data.find(entry => entry.word == c)
            if (!search) {
                return c
            }
            return func(search)
        })

        const converted = words.map(w => {
            switch(type) {
                case "accent":
                    return PhunWordToLatin(props.data, w).join("")
                case "accent-space":
                    return extractEntry(w, (e: any) => e.latinPron).join(" ")
                case "numeric":
                    return extractEntry(w, (e: any) => e.pron).join(" ")
                case "ipa":
                    return extractEntry(w, (e: any) => e.ipa.slice(1, -1)).join(".")
                case "weqo":
                    return extractEntry(w, (e: any) => e.weqo).join(" ")
                default:
                    return w
            }
        })
        return converted.join(" ")
        }
    ).join("")
    
    return (
        <>
            <h1>雰語を漢字翻字から表音表記化</h1>
            <Input label="漢字翻字" var={text} set={setText} height={10} textarea/>

            <OptionRow label="変換方法">
                <Select var={type} set={setType} data={{
                    accent: "符号声調表記",
                    "accent-space": "符号声調表記 (スペース挿入)",
                    numeric: "数字声調表記",
                    ipa: "IPA表記",
                    weqo: "声字フォント用転写",
                }}/>
            </OptionRow>

            <BreakLine text="出力"/>

            <Output var={processed} height={10} textarea/>
        </>
    )
}

export default Page