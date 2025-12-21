"use client"

import { useState } from "react"
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

const contentMain = [
    "彼.為.在.何.年.去.如",
    "以.交刃.或人.掌.刃.光廻.水行.態拡貝",
    "之.故.先日.来.去日.成.一.川",
    "我.耳.或.曰.在.先日",
    "細魚.開.撮撮.生.基.田.土",
    "大.洞.創.在.車泊.累床",
    "滴水盤.跳暗.消虚",
    "我.逃.憶事.在.去日",
    "回.不.能.据魂.在.其.事.去.消",
    "高家.建.基.青宇.上.雲",
    "煙影.現.覆.我.先鏡",
    "花.不.枯.而.代.劈",
    "鳥.不.飛.而.僻.眠.上.木.枝",
    "風.不.行.而.緩.氷.在.夜.冷.土",
    "月.不.顔.不.背.而.唯.永.廻.周.大丸.態.常",
    "備.行.時.来.未.目.時.成.一.川",
    "而.越.一.日.而.忘.而.行先",
    "之.成.単.湖.不.能.注.於.幹.川",
]

const contentHidden = [
    "黒.豚魚.飛.到.之処",
    "敏.飛.而.来.在.先日.下昼",
    "弓.行.我衆.而.落.元.宇",
    "我衆.先.万定.被.狩",
    "黄.豚魚.飛.到.之処",
    "重.飛.而.通行.家覆.畳瓦",
    "豚魚.含.尖.有.恐.悪毒",
    "其.刺.冠.万人.水死",
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)

    return (
        <>
            <h1>イワシがつちからはえてくるんだ</h1>
            <DictCheckBox use={useDict} setUse={setUseDict}/>

            <p><b>『イワシがつちからはえてくるんだ』</b>（雰題：<b><span className="phun">細魚開撮撮生基田土</span></b>）</p>
            <p><a href="https://www.youtube.com/watch?v=d_T1StgldnM">原曲（Youtube）</a></p>

            <h2>訳文</h2>
            <DictPop text={contentMain} use={useDict}/>

            <p><b>※裏歌詞※</b></p>
            <DictPop text={contentHidden} use={useDict}/>

            <h2>漢字転写</h2>
            <KanjiText text={contentMain}/>

            <p><b>※裏歌詞※</b></p>
            <KanjiText text={contentHidden}/>

            <h2>ラテン文字転写</h2>
            <LatinPron text={contentMain}/>

            <p><b>※裏歌詞※</b></p>
            <LatinPron text={contentHidden}/>

            <h2>歌唱</h2>
            <p>以下の動画で、雰語歌詞によるCoverを試聴することができます。</p>
            <div className="youtubeEmbed">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tfWUyhnPNX8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </>
    )
}

export default Page