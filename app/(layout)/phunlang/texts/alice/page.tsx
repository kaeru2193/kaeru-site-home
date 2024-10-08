"use client"

import { useState, useEffect } from "react"

import { FetchData } from "@/funcs";
import { DictPop, DictCheckBox } from "../../dictPop";

const content = [
    "竹六.座.隣.姉.在.川.周.、.做.事.虚.故.開.大.遊思.。.目.姉.記.帳.以.一.来.二.追.、.回.其.不.有.画.来.衆談.。.竹六.魂.、「.不.有.画.来.衆談.然.帳.、.向.何.能.使.之昆.帳.如.？」",
    ".天.為.熱.在.其.日.、.而.為.大.眠.来.霞.故.不.能.深思.、.追.竹六.思.、.造.廻.以.珠花.可.為.楽.、.回.立.而.取.花.模.重気.、.做.何.如.？.在.其.、.有.桜彩.目.然.白.兎.跳暗.走.而.来.。",
    "其昆.事.非.奇.。.白.兎.声.「.啊.、.啊.、.可.成.緩.！」、.経.竹六.耳.之.而.等.不.魂.為.大.怪.。.在.先時.竹六.思.之.去.為.怪.、.回.在.其.時.魂.為.真.遍.事.。.回.白.兎.出.時盤.元.衣囊.在.外衣.、.而.目.其.而.開.回.走.経.竹六.浮知.、.不.有.目.有.衣囊.在.外衣.然.兎.、.来.出.時盤.元.衣.然.兎.、.故.立跳.。.竹六.知拘.内.其.、.故.従.於.白.兎.而.越.原田.、.追.成.豊時.在.現.目.白.兎.跳入.行.大.洞.在.刈壁.然.下.処.。"
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
            <h1>Alice's Adventures in Wonderland</h1>
            {dict? <DictCheckBox use={useDict} setUse={setUseDict}/>: <></>}

            <p><b>『Alice's Adventures in Wonderland』</b>（雰題：<span className="phun"><b>竹六遊領奇録</b></span>）</p>

            <h2>訳文</h2>
            <DictPop text={content} dict={dict} use={useDict}/>

            <h2>漢字転写</h2>
            {content.map((p, idx) => <p key={idx}>{p.replace(/\./g, "")}</p>)}

            <h2>ラテン文字転写</h2>
            <p>àlîs mâ mò gúong sùo hùofùon, hîl gê ûa dòn vé qîm dáosào. ké gúong cùang sûs nâo ví hûas bûan yùon, pél cén kí nò xâo hûas màilxì. àlîs nùm,  "kí nò xâo hûas màilxì kém sûs, vû nâol áil hû kúaqí sûs lól? "</p>
            <p>vás xêl sûo sùo cénkúang, lê xêl qîm lô hûas pés dòn kí áil xàisào, yùon àlîs sào, hìm fáng nâo jùanxáos fài xêl yào, pél qûo lê jê xáos múo ânsíng, hîl nâol lól? sùo cén, nò túogûo ké kém kàingxûo gôtù yèm lê hûas.</p>
            <p>cénqí gê vái ús. kàingxûo wè "â, â, fài bà yûa! " , dûo àlîs mè kúa lê mûos kí nùm xêl qîm nô. sùo tâoltùa àlîs sào kúa fès xêl nô, pél sùo céntùa nùm xêl nîm qùom gê. pél kàingxûo kông tùaxú xô nélnìl sùo hìnnél, lê ké cén lê vé pél yèm dûo àlîs mùongqài, kí nò ké nò nélnìl sùo hìnnél kém xûo, hûas kông tùaxú xô nél kém xûo, dòn qûogô. àlîs qàihûan yùo cén, dòn câi é kàingxûo lê vúa jêncìn, yùon bà nûatùa sùo váim ké kàingxûo gôjúom yáom qîm zàos sùo mòngdì kém yâ yái. </p>

        </>
    )
}

export default Page



