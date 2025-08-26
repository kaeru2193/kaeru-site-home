"use client"

import { useState } from "react"
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

const content = [
    "集帳家.在.時.端.哉.、",
    "不.壁区.由.万.重.而.、.録.書.団.生.然.糖.苦.。",
    "元.逃.来.燃.引昇.之.、.団.先.忘.錯.然.万.物.。",
    "越.混位.然.浪海.而.、.恒.永.弱軟.世.憶事.。",
    "向.先時.端.団.祈.之.、.廻追.互目.伴.万.物.。",
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)

    return (
        <>
            <h1>大図書館教の祈り</h1>
            <DictCheckBox use={useDict} setUse={setUseDict}/>

            <p><b>大図書館教の祈り</b>（雰題：<span className="phun"><b>集帳家在時端然祈言</b></span>）</p>

            <p><a href="https://bsky.app/profile/licjar.bsky.social/post/3lpli5uo2k22i">りちゃさんの2025/05/20の投稿</a>より。みかぶるさんの<a href="https://mikanixonable.github.io/184.html">この世の終わりの大図書館教</a>の祈り。</p>

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