"use client"

import { useState, useEffect } from "react"

import { FetchData } from "@/funcs";
import { DictPop, DictCheckBox } from "../../dictPop";

const content = [
    "在.古.時.、.万.人.言.以.一.貝.事言.。",
    "人衆.行.東.処.、.経.入目.平地.在.浄央.而.庵.在.其.。",
    "人衆.言.、「.哉.、.伴.造.建石.而.悉.熱.。」.使.建石.態異.石.、.結.其.以.油土.。",
    "追.人衆.言.、「.哉.、.伴.造.高家.到.天.来.都.使.団.。.以.其.団.成.仙.、.而.不.可.僻.。」",
    "在.其.、.天.神.来下.、.経.目.人衆.造.然.高家.来.都.。",
    "天.神.言.、「.人.言.以.和等.事言.故.開.做.之.。.可.成.能.做.人.求.然.万.事.。",
    "伴.行.地.、.経.砕.人衆.事言.。.以.其.、.人.成.不.能.言.於.外人.。」",
    "故.天.神.僻.人衆.行.万.処.、.而.人衆.止.造.高家.来.都.。",
    "之.故.其.都.名.為.〈.領家基.〉。.以.天.神.去.砕.万.人.事言.然.由.。.元.之.天.神.僻.人衆.行.悉.世.。"
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
            <h1>バベルの塔</h1>
            {dict? <DictCheckBox use={useDict} setUse={setUseDict}/>: <></>}

            <p><b>『バベルの塔』</b>（雰題：<span className="phun"><b>領家基然高家</b></span>）</p>

            <h2>訳文</h2>
            <DictPop text={content} dict={dict} use={useDict}/>

            <h2>漢字転写</h2>
            {content.map((p, idx) => <p key={idx}>{p.replace(/\./g, "")}</p>)}

            <h2>ラテン文字転写</h2>
            <p>sùo pùon tùa, áohá bùn nâo víjáo gêbùn.</p>
            <p>há'màil yáom kà yái, dûo júomké xémhô sùo xái'nà lê xíng sùo cén.</p>
            <p>há'màil bùn, "yè, nùo hìm xéshâis lê xúo sûo." hû xéshâis xòstáom hâis, júo cén nâo xùâo.</p>
            <p>yùon há'màil bùn, "yè, nùo hìm wîngbé tél vás hûas cèl hû pûo. nâo cén pûo bà tâing, lê kí fài wáing."</p>
            <p>sùo cén, vásxò hûasyâ, dûo ké há'màil hìm kém wîngbé hûas cèl.</p>
            <p>vásxò bùn, "há bùn nâo òmmûos gêbùn dòn vé hîl kúa. fài bà áil hîl há váo kém áogê.</p>
            <p>nùo yáom hô, dûo pâo há'màil gêbùn. nâocén, há bà kí áil bùn é hìnhá."</p>
            <p>dòn vásxò wáing há'màil yáom áoyái, lê há'màil zûa hìm wîngbé hûas cèl.</p>
            <p>kúa dòn cén cèl júal xêl ‹bábé'lén›. nâo vásxò fès pâo áohá gêbùn kém pîs. xô kúa vásxò wáing há'màil yáom xúo fúa.</p>

        </>
    )
}

export default Page