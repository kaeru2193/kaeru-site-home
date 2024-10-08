"use client"

import { useState, useEffect } from "react"

import { FetchData } from "@/funcs";
import { DictPop, DictCheckBox } from "../../dictPop";

const content = [
    "立跳.、.被.戦.然.下人.、",
    "立跳.、.陰.人.在.万国.！",
    "真言.落.大.雷.在.山.、",
    "火.崩.世.経.生.倫.世.。",
    "団.戦.向.崩.固.古.思.、",
    "被.奪.然.世.民.、.立跳.！",
    "返.之世.含.上.来.下.、",
    "不.持.然.民.持.万.。",
    "之.為.遣.後.万.然.戦.、",
    "集.衆.、.戦.向.透.先日.。",
    "万国.民.衆.含.衆結.、（.高火刃炭森兵.、）",
    "其.先.為.世.遍.法.！"
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
            <h1>L'Internationale</h1>
            {dict? <DictCheckBox use={useDict} setUse={setUseDict}/>: <></>}

            <p><b>『L'Internationale』</b>（インターナショナル、雰題：<span className="phun"><b>万国歌</b></span>）</p>

            <h2>訳文</h2>
            <DictPop text={content} dict={dict} use={useDict}/>

            <h2>漢字転写</h2>
            {content.map((p, idx) => <p key={idx}>{p.replace(/\./g, "")}</p>)}

            <h2>ラテン文字転写</h2>
            <p>qûogô, jé bàs kém yâhá, </p>
            <p>qûogô, cúamhá sùo áonùn! </p>
            <p>nîmbùn jûa qîm màin sùo dás, </p>
            <p>tàng xès fúa dûo zâi tùo fúa. </p>
            <p>pûo bàs vû xès nàil pùon sào, </p>
            <p>jé mài kém fúa zôm, qûogô! </p>
            <p>vúo kúafúa lòm lîng hûas yâ, </p>
            <p>kí pêng kém zôm pêng áo. </p>
            <p>kúa xêl cúo yûas áo kém bàs, </p>
            <p>nàimmàil, bàs vû lí tâolkúang. </p>
            <p>áonùn zômmàil lòm màiljúo, (wîng tàng ná sî yón nâl,)</p>
            <p>cén tâol xêl fúa qùom wèl! </p>

        </>
    )
}

export default Page