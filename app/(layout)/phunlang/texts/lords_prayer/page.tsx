"use client"

import { useState, useEffect } from "react"

import { FetchData } from "@/funcs";
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

const content = [
    "居.天.団.父.、.団.祈.之.事.。",
    "仁.名.為.仙.、.仁.国.来下.。",
    "仁.做.向.地.、.態.做.向.天.。",
    "之日.求.餐.、.与.其.於.団.。",
    "赦.団.違.事.、.態.団.赦.人.。",
    "遠.欲.元.団.、.解.団.元.魔.。",
    "持.国.力.栄.、.使.仁.跨.永.。",
    "竹礬.。"
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)
    const [dict, setDict] = useState<any>()

    useEffect(() => {
        const access = async () => {
          try {
            const data = await FetchData("https://kaeru2193.github.io/Phun-Resources/dict/phun-dict.json");
            const json = JSON.parse(data)
            setDict(json.data)
          } catch (error) {
            setDict(null)
          }
        }
        access()
    }, []);

    return (
        <>
            <h1>主の祈り</h1>
            {dict? <DictCheckBox use={useDict} setUse={setUseDict}/>: <></>}

            <p><b>『主の祈り』</b>（雰題：<span className="phun"><b>天祈言</b></span>）</p>

            <h2>訳文</h2>
            <DictPop text={content} dict={dict} use={useDict}/>

            <h2>漢字転写</h2>
            <KanjiText text={content}/>

            <h2>ラテン文字転写</h2>
            <LatinPron text={content}/>

        </>
    )
}

export default Page