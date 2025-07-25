"use client"

import { useState } from "react"
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

const content = [
    "竹六.座.隣.姉.在.川累.、.唯一.做.事.虚.故.開.大.遊思.。.媛.一.二.追.間目.姉.記.然.帳.、.回.其.不.有.画.来.互談.。.竹六.魂.、.「.不.有.画.来.互談.然.帳.、.向.何.能.使.之昆.帳.如.？.」",
    "天.為.熱.在.其.日.、.而.為.大.眠.来.霞.故.不.能.深思.、.経.竹六.緩.思.、.造.廻.以.珠花.可.為.楽.、.回.立.而.行.向.取.花.為.重気.、.做.何.如.？.在.其.、.有.桜彩.目.然.白.兎.跳暗.走.而.来.。",
    "其昆.事.非.奇.。.白.兎.声.「.啊.、.啊.、.可.成.緩.！.」.、.経.竹六.耳.之.而.等.不.魂.為.大.怪.。.在.先時.竹六.思.之.去.為.怪.、.回.在.其.時.魂.為.真.遍.事.。.回.白.兎.出.時斉.元.衣囊.在.外衣.、.而.目.其.而.開.回.走.経.竹六.浮知.、.不.有.目.有.衣囊.在.外衣.然.兎.、.来.出.時斉.元.衣.然.兎.、.故.立跳.。.竹六.知拘.内.其.、.故.従.於.白.兎.而.越.原田.、.経.成.豊時.在.現.目.白.兎.跳入.行.大.洞.在.刈壁.然.下.処.。",
    "消天透.、.追.竹六.従.於.其.而.等.跳入.行.其.。.去.糸虚.思.出.以.何法.元.其.処.。",
    "在.一序.処.兎.大.洞.為.縦行.道.態.掘道.、.経.跳暗.成.大.傾.追.代.行.下.態.落立.。.道.溢.跳暗.歪.故.竹六.思.止.体.然.時.虚.、.在.媛.目.然.時.、.竹六.現.落.行.下.内.大.深.汲洞.。",
    "汲洞.概.為.大.深.、.岐.竹六.概.大.緩.落.。.故.並.落.内.汲洞.、.目.周.処.、.追.思.何.事.開.在.先時.然.時.多.居.。.在一.媛.目.下.而.且.解明.先.到.何.処.、.回.其.為.溢.暗.故.不.能.目.唯一.物.。.経.媛.目.横.壁.在.汲洞.、.追.解明.餐具.函机.来.帳函.据.在.悉.壁.、.追.領紙.来.画.居居.垂.以.紙釘.。.媛.取.一.貝.瓶.元.函机.並.通越.、.在.名記.書.〈.柑.果汁.〉.。.回.其.為.虚湛.故.成.大.枯魂.。.媛.恐.狩.或人.在.下.処.而.不.且.落.虚湛.瓶.、.故.並.落.隣.外.函机.、.百弓千思.而.据.其.在.其.函机.。",
    "竹六.思.、.「.我.有.之昆.落.、.故.在.先時.我.衝落.在.踏踏.而.先.不.魂.唯一.事.！.悉.庵昆.万定.思.我.有.大.魂勇.在.庵.！.唔.、.我.落.元.庵.然.頂.処.、.模真.糸虚.言.向.其.！.」.其.概.為.真事.。.落.元.庵.然.頂.処.模.媛.不.能.言.唯一.事.！",
    "行.下.、.行.下.、.行.下.。.竹六.端虚.不.終.落.如.？"
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)

    return (
        <>
            <h1>Alice's Adventures in Wonderland</h1>
            <DictCheckBox use={useDict} setUse={setUseDict}/>

            <p><b>『Alice's Adventures in Wonderland』</b>（雰題：<span className="phun"><b>竹六遊領奇録</b></span>）</p>

            <h2>訳文</h2>
            <DictPop text={content} use={useDict}/>

            <h2>漢字転写</h2>
            <KanjiText text={content}/>

            <h2>ラテン文字転写</h2>
            <LatinPron text={content}/>

            <h2>朗読</h2>
            <p>以下の動画で、第8段落冒頭までの雰語訳文の発話例を試聴することができます。</p>
            <div className="youtubeEmbed">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AaqZEdP2ir8?si=bPzVSEMoBfBSQwhM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </>
    )
}

export default Page



