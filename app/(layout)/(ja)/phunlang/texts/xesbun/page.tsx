"use client"

import { useState } from "react"
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";
import { ScrollableImg } from "@/components";

const content = [
    "一.筆.抱.思",
    "劈.詞.建.言",
    "万天.遼.画",
    "業:2.上.葉.鏡",
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)

    return (
        <>
            <h1>建言</h1>
            <DictCheckBox use={useDict} setUse={setUseDict}/>

            <p>『建言（<b><span className="phun">建言</span></b>）』</p>

            <p><a href="https://drive.google.com/file/d/12CJK5TfEnFge_pzPZHYXVCRCDtstPY_k/view">年刊誌『ンソピ場』2026年号</a>に掲載された四字四句の雰詩です。詩の内容についての解説もこちらからご覧になれます。</p>

            <ScrollableImg src="/texts/xesbun.png" height={400} alt="the handwritten version of the poem"/>

            <h2>雰語原文</h2>
            <DictPop text={content} use={useDict}/>

            <h2>漢字転写</h2>
            <KanjiText text={content}/>

            <h2>ラテン文字転写</h2>
            <LatinPron text={content}/>
        </>
    )
}

export default Page