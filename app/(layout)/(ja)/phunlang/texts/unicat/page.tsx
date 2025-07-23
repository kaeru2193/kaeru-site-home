"use client"

import { useState } from "react"
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

const content = [
    "之.為.遍.日.下.春.青宇",
    "新日.後.経.天慶.為.遠",
    "而.伴.成.慶.日.於.其",
    "之日.為.猫.天慶.！",
    "為.楽.伴.猫.到.豊心.然.日.！",
    "有.瑠.目.猫.含.毛毛.尾",
    "日.風.猫.尾.以.穏穏.気",
    "行.左.、.行.右",
    "行.左.、.行.右",
    "従.歌.尾.揺.行.左.右",
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)

    return (
        <>
            <h1>unicat</h1>
            <DictCheckBox use={useDict} setUse={setUseDict}/>

            <p><b>『unicat』</b>（雰題：<span className="phun"><b>猫天慶</b></span>）</p>
            <p><a href="https://conlinguistics.org/arka/works_lem_5_4_1.html">原詞（人工言語アルカ公式サイト）</a></p>

            <h2>訳文</h2>
            <DictPop text={content} use={useDict}/>

            <h2>漢字転写</h2>
            <KanjiText text={content}/>

            <h2>ラテン文字転写</h2>
            <LatinPron text={content}/>

            <h2>歌唱</h2>
            <p>以下の動画で、Synthesizer Vによる楽曲の歌唱を試聴することができます。</p>
            <div className="youtubeEmbed">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-6N8O15SbXQ?si=HU-INat7rEniJtc3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </>
    )
}

export default Page