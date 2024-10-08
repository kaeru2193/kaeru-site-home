"use client"

import { useState, useEffect } from "react"

import { FetchData } from "@/funcs";
import { DictPop, DictCheckBox } from "../../dictPop";

const content = [
    "人衆.去.活.跨.八.万.年.内.古事.。.回.内.其.古事.、.去.千.七.百.年.唯.為.要.砕目.然.時.。",
    "団.做.何.跨.八.万.年.如.？.去.庵.内.地洞.追.集.周.建火.、.而.恐.不.能.知.事.。.拠.日.通日.昇.元.地.然.由.、.人.頭.有.然.大.鳥.、.来.持.魂.而.活.然.石.去.為.〈.怪恐.事.〉。.故.団.言.其.態.〈.神.〉.岐.〈.魔.〉、.而.祈.向.賜.善.追.被.赦.。",
    "時.古.、.而.其.成.少.、.追.団.成.多.。.恐.事.成.小.、.而.之世.開.成.明目.。.回.〈.怪恐.事.〉.不.成.不乏.虚.、.態.之世.要.有.非論.事.来.不.能.事.。",
    "人衆.制.行元.行.僻.追.隠.向.恐.事.然.時.。.万.外.団.不.守.団.、.故.団.要.立跳.焉.。",
    ".向.恒.人衆.能.活.然.穏.正.世.、.並.外.人衆.活.内.明.処.、.団.要.立.内.暗.処.、.追.戦.其.、.追.包入.其.、.追.成.外人.不.能.目.於.其.。",
    ".而.拘.、.而.函.、.而.守.。",
    "―〈.領軸人.〉"
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
            <h1>SCP財団とは</h1>
            {dict? <DictCheckBox use={useDict} setUse={setUseDict}/>: <></>}

            <p><b>『SCP財団とは』</b>（雰題：<b>SCP<span className="phun">貨立衆然小論</span></b>）</p>
            <p><a href="https://scp-wiki.wikidot.com/about-the-scp-foundation">原文（SCP財団サイト）</a></p>

            <h2>訳文</h2>
            <DictPop text={content} dict={dict} use={useDict}/>

            <h2>漢字転写</h2>
            {content.map((p, idx) => <p key={idx}>{p.replace(/\./g, "")}</p>)}
        </>
    )
}

export default Page