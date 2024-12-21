"use client"

import { useState, useEffect } from "react"

import { FetchData } from "@/funcs";
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

const content = [
    "竹六.座.隣.姉.在.川.周.、.做.事.虚.故.開.大.遊思.。.目.姉.記.帳.以.一.来.二.追.、.回.其.不.有.画.来.衆談.。.竹六.魂.、.「.不.有.画.来.衆談.然.帳.、.向.何.能.使.之昆.帳.如.？.」",
    ".天.為.熱.在.其.日.、.而.為.大.眠.来.霞.故.不.能.深思.、.追.竹六.思.、.造.廻.以.珠花.可.為.楽.、.回.立.而.取.花.模.重気.、.做.何.如.？.在.其.、.有.桜彩.目.然.白.兎.跳暗.走.而.来.。",
    "其昆.事.非.奇.。.白.兎.声.「.啊.、.啊.、.可.成.緩.！.」.、.経.竹六.耳.之.而.等.不.魂.為.大.怪.。.在.先時.竹六.思.之.去.為.怪.、.回.在.其.時.魂.為.真.遍.事.。.回.白.兎.出.時盤.元.衣囊.在.外衣.、.而.目.其.而.開.回.走.経.竹六.浮知.、.不.有.目.有.衣囊.在.外衣.然.兎.、.来.出.時盤.元.衣.然.兎.、.故.立跳.。.竹六.知拘.内.其.、.故.従.於.白.兎.而.越.原田.、.追.成.豊時.在.現.目.白.兎.跳入.行.大.洞.在.刈壁.然.下.処.。",
    "消天透.、.追.竹六.従.於.而.等.跳入.行.其.。.去.糸虚.思.出.以.何法.元.其.処.。",
    "在.一序.処.兎.大.洞.為.縦行.道.態.掘道.、.経.跳暗.成.大.傾.追.代.行.下.態.落立.。.道.溢.跳暗.歪.故.時.向.竹六.思.止.体.動.虚.、.在.媛.目.周.然.時.、.竹六.現.落.行.下.内.態.大.深.汲洞.。",
    "汲洞.概.為.大.深.、.岐.竹六.概.大.緩.落.。.故.並.落.内.汲洞.、.目.周.処.、.追.思.何.事.開.在.先時.然.時.多.居.。.在一.媛.目.下.而.且.解明.先.到.何.処.、.回.其.為.溢.暗.故.不.能.目.或.物.。.経.媛.目.横.壁.在.汲洞.、.追.解明.餐具.函机.来.帳函.据.在.悉.壁.。"
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
            <KanjiText text={content}/>

            <h2>ラテン文字転写</h2>
            <LatinPron text={content}/>

        </>
    )
}

export default Page



