"use client"

import { useState } from "react"
import { DictPop, DictCheckBox, KanjiText, LatinPron } from "../../components";

const content = [
    "在.古.時.、.万.人.言.以.一.貝.事言.。",
    "人衆.行.東.処.、.経.入目.平地.在.浄央.而.庵.在.其.。",
    "人衆.言.、.「.哉.、.伴.造.建石.而.悉.熱.。.」.使.建石.態異.石.、.結.其.以.油土.。",
    "追.人衆.言.、.「.哉.、.伴.造.高家.到.天.来.都.使.団.。.以.其.団.成.仙.、.而.不.可.僻.。.」",
    "在.其.、.天.神.来下.、.経.目.人衆.造.然.高家.来.都.。",
    "天.神.言.、.「.人.言.以.和等.事言.故.開.做.之.。.可.成.能.做.人.求.然.万.事.。",
    "伴.行.地.、.経.砕.人衆.事言.。.以.其.、.人.成.不.能.言.於.外人.。.」",
    "故.天.神.僻.人衆.行.万.処.、.而.人衆.止.造.高家.来.都.。",
    "之.故.其.都.名.為.〈.領家基.〉.。.以.天.神.去.砕.万.人.事言.然.由.。.元.之.天.神.僻.人衆.行.悉.世.。"
]

const Page = () => {
    const [useDict, setUseDict] = useState(false)

    return (
        <>
            <h1>バベルの塔</h1>
            <DictCheckBox use={useDict} setUse={setUseDict}/>

            <p><b>『バベルの塔』</b>（雰題：<span className="phun"><b>領家基高家</b></span>）</p>

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