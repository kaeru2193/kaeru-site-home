"use client"

import { useState, useEffect } from "react";
import { FetchData } from "@/funcs";
import { marks } from "./marks";
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
    console.log(sentences)
    const processed = sentences.map(s => {
        const words = s.split(" ")
        const converted = words.map(w => w.split("")
        .map(c => {
            if (marks.hasOwnProperty(c)) {
                return marks[c]
            } else {
                const search = props.data.filter(w => w.word == c)
                if (search[0]) {
                    switch(type) {
                        case "numeric":
                            return search[0].pron
                        case "accent":
                        case "accent-space":
                            return search[0].latinPron
                        case "ipa":
                            return search[0].ipa.slice(1, -1)
                        default:
                            return c
                    }
                } else {
                    return c
                }
            }
        }))
        return type == "accent"
            ?converted.map(w => w.join("")).join(" ")
            :converted.map(w => w.join(" ")).join(" ")
        }
    ).join("")

    return (
        <>
            <h1>雰語を漢字転写から表音表記に変換</h1>
            <Input var={text} set={setText} height={10} textarea/>

            <OptionRow label="変換方法">
                <Select var={type} set={setType} data={{
                    accent: "符号声調表記",
                    "accent-space": "符号声調表記 (スペース挿入)",
                    numeric: "数字声調表記",
                    ipa: "IPA表記",
                }}/>
            </OptionRow>

            <BreakLine text="出力"/>

            <Output var={processed} height={10} textarea/>
        </>
    )
}

export default Page