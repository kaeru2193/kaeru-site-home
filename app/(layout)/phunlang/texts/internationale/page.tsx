"use client"

import { useState } from "react"
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

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
    "万国.民.衆.含.衆結.、.（.高火刃炭森兵.、.）",
    "其.先.為.世.遍.法.！"
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)

    return (
        <>
            <h1>L'Internationale</h1>
            <DictCheckBox use={useDict} setUse={setUseDict}/>

            <p><b>『L'Internationale』</b>（インターナショナル、雰題：<span className="phun"><b>万国歌</b></span>）</p>

            <h2>訳文</h2>
            <DictPop text={content} use={useDict}/>

            <h2>漢字転写</h2>
            <KanjiText text={content}/>

            <h2>ラテン文字転写</h2>
            <LatinPron text={content}/>

        </>
    )
}

export default Page