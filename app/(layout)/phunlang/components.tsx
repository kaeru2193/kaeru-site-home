import style from "./components.module.css"
import { useRef } from "react"
import reactStringReplace from "react-string-replace"
import { getPhunPron } from "@/funcs"

export const KanjiText = (pron: {text: string[]}) => <div className={style.kanjiText}>
    {pron.text.map((p, idx) => 
        <p key={idx}>{p.replace(/\./g, "")}</p>
    )}
</div>

export const LatinPron = (pron: {text: string[]}) => <div className={style.latinText}>
    {pron.text.map((p, idx) => 
        <p key={idx}>{getPhunPron(p)}</p>
    )}
</div>

export const DictCheckBox = (props: any) => {
    return (
        <span className={style.useDict}>
            ポップアップ辞書
            <label className={style.dictCheckbox}>
                <input type="checkbox" value="useDict" onChange={(e) => props.setUse(e.target.checked)} defaultChecked={props.use}/>
                <span>{props.use? "ON": "OFF"}</span>
            </label>
        </span>
    )
}

export const DictPop = (props: any) => {
    const content: string[] = props.text
    return (
        <div>
            {content.map((c, idx) => {
                const words = c.split(".").map((w, idx) => {
                    const content = props.use? searchDict(props.dict, w): false //ポップアップ辞書がOFFの場合は表示させない
                    return (content? <DictPopPanel info={content} key={idx}>{w}</DictPopPanel>: <span className={`${style.word} phun`}>{w}</span>)
                })
                return (<p key={idx}>{words}</p>)
            })}
        </div>
    )
}

const searchDict = (dict: any[], word: string) => {
    if (!dict) {return undefined} //辞書が読み込まれていない場合にはポップアップさせない

    const result = dict.find(e => e.word == word)
    return result
}

const DictPopPanel = (props: any) => {
    const popUp = useRef<HTMLSpanElement>(null)
    const word = useRef<HTMLSpanElement>(null)

    const handleHover = () => {
        if (!popUp.current || !word.current) return
        popUp.current.style.visibility = "visible"
        word.current.style.backgroundColor = "#ffff80"
    }

    const handleLeave = () => {
        if (!popUp.current || !word.current) return
        popUp.current.style.visibility = "hidden"
        word.current.style.backgroundColor = "initial"
    }

    return (
        <span className={style.word}>
            <span
                className={style.dictPop}
                ref={popUp}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <DictContent info={props.info}/>
            </span>
            <span ref={word} onMouseEnter={handleHover} onMouseLeave={handleLeave} className="phun">
                {props.children}
            </span>
        </span>
    )
}

const DictContent = (props: any) => {
    const meanNum = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
    const wordTypes: any = {
        "名詞": "名",
        "接頭辞": "接頭",
        "接尾辞": "接尾",
        "代名詞": "代名",
        "動詞": "動",
        "形容詞": "形",
        "副詞": "副",
        "助詞": "助",
        "感動詞": "感",
        "接続詞": "接",
        "数詞": "数",
        "助数詞": "助数",
        "情詞": "情",
        "前置詞": "前置",
        "成句": "成句",
        "造語成分": "語成分",
    }

    const info = props.info
    return (
        <>
            <span className={style.popTop}>
                <span className={style.popEntry}>{info.word}</span>
                <span className={style.popKanji}>【{info.word}】</span>
                <span className={style.popPron}>{info.latinPron}</span>
            </span>
            <span className={style.popContent}>
                {info.mean.map((m: any, idx: number) => <span className={style.popMeanRow} key={idx}>
                    <span className={style.popMeanType}>
                        {wordTypes.hasOwnProperty(m.type)
                            ? wordTypes[m.type]
                            : m.type}
                    </span>
                    <span className={style.popMeanTrans}>
                        {m.explanation.map((t: any, idx: number) => (
                            <span className={style.popMeanTransRow} key={idx}>
                                {m.explanation.length > 1
                                    ? <span className={style.popMeanTransNum}>{meanNum[idx]}</span>
                                    : <></>}
                                {t.translate}
                                {t.meaning
                                    ? <span className={style.popMeanExp}>
                                        {reactStringReplace(t.meaning, /\[(.*?)\]/g, (match) => <span className={style.popMeanPhun}>{match}</span>)}
                                    </span>
                                    : <></>}
                            </span>
                        ))}
                    </span>
                </span>)}
            </span>
        </>
    )
}