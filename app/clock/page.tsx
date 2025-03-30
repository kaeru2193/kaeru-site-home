"use client"

import { EikyuDate } from "eikyu-clock"

import Image from "next/image"
import { useEffect, useState } from "react"

import style from "./page.module.css"
import { transform } from "next/dist/build/swc"

const Page = () => {
    const [earth, setEarth] = useState(<></>)
    const [display, setDisplay] = useState([<></>])
    const [angles, setAngles]: any = useState({})
    const [earthInput, setEarthInput] = useState("")
    const [phunInput, setPhunInput] = useState("")

    useEffect(() => {
        window.setInterval(() => {
            const eikyu = new EikyuDate()
            const pf = eikyu.getPhunFormat()
            pf.sec = pf.sec.padStart(2, "〇") //桁数が変わるためゼロ埋め

            setDisplay([
                <>{pf.yea}年{pf.poi}旬{pf.day}日</>,
                <>{pf.per}刻{pf.min}分{pf.sec}秒</>
            ])
            const format = eikyu.getFormat()
            setAngles({
                sec: format.sec * 2.5,
                min: format.min * 30 + format.sec / 144 * 30,
                per: format.per * 6 + format.min / 12 * 6 + format.sec / 144 / 12 * 6
            })
            const earth = new Date()
            const earthNums = [earth.getFullYear(), earth.getMonth() + 1, earth.getDate(), earth.getHours(), earth.getMinutes(), earth.getSeconds()]
            const ep = earthNums.map(n => String(n).padStart(2, "0")) //ゼロ埋め
            setEarth(
                <>{ep[0]}/{ep[1]}/{ep[2]} {ep[3]}:{ep[4]}:{ep[5]}</>
            )
        },10);

        setNow(setEarthInput, setPhunInput)
    }, [])

    return (
        <div>
            <div className={style.bgContainer}>
                <Image
                    src="/clock/bg.png"
                    quality={100}
                    alt="background"
                    fill
                />
            </div>
            <div className={style.container}>
                <h1 className={style.title}>永球時計</h1>
                <div className={style.clockRow}>
                    <div className={style.clockContainer}>
                        <img src="/clock/base.png"/>
                        <ClockHand img="period" deg={angles.per}/>
                        <ClockHand img="minute" deg={angles.min}/>
                        <ClockHand img="second" deg={angles.sec}/>
                        <img src="/clock/pin.png"/>
                    </div>
                    <div className={style.phunClockContainer}>
                        <p className={style.phunDate}>{display[0]}</p>
                        <p className={style.phunTime}>{display[1]}</p>
                    </div>
                </div>
                <p className={style.earthTime}>{earth}</p>
                <h2 className={style.heading}>暦法変換</h2>
                <div className={style.convert}>
                    <span className={style.calendar}>
                        <span>西暦 (UTC)</span>
                        <input type="text" value={earthInput} onChange={(e) => {
                            setEarthInput(e.target.value)
                            E2P(e.target.value, setPhunInput)
                        }}/>
                    </span>

                    <span className={style.calendar}>
                        <span>旭暦 (遍世時)</span>
                        <input type="text" value={phunInput} onChange={(e) => {
                            setPhunInput(e.target.value)
                            P2E(e.target.value, setEarthInput)
                        }}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

const setNow = (setE: Function, setP: Function) => {
    const e = new Date()
    const earthArr = [e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]
    setE(earthArr.join("_"))

    const p = new EikyuDate(EikyuDate.toEikyu(e.getTime())).getFormat()
    const phunArr = [p.yea, p.poi, p.day, p.per, p.min, p.sec]
    setP(phunArr.join("_"))
}

const E2P = (earth: string, setP: Function) => {
    const defaultTime = [0, 1, 1, 0, 0, 0]
    const eSplit = earth.split("_").map(e => Number(e))
    const eArr = defaultTime.map((d, idx) => eSplit[idx]? eSplit[idx]: d)
    const e = new Date()
    e.setUTCFullYear(eArr[0], eArr[1] - 1, eArr[2])
    e.setUTCHours(eArr[3], eArr[4], eArr[5])

    const p = new EikyuDate(EikyuDate.toEikyu(e.getTime())).getFormat()
    const phunArr = [p.yea, p.poi, p.day, p.per, p.min, p.sec]
    setP(phunArr.join("_"))
}

const P2E = (phun: string, setE: Function) => {
    const defaultTime = [0, 1, 1, 0, 0, 0]
    const pSplit = phun.split("_").map(p => Number(p))
    const pArr = defaultTime.map((d, idx) => pSplit[idx]? pSplit[idx]: d)
    const p = new EikyuDate(pArr[0], pArr[1], pArr[2], pArr[3], pArr[4], pArr[5])

    const e = new Date(EikyuDate.toEarth(p.date))
    const earthArr = [e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]
    setE(earthArr.join("_"))
}

const ClockHand = (props: any) => {
    const style = {
        transform: `rotate(${props.deg}deg)`
    }
    return <img
        className="clockHand"
        src={`/clock/${props.img}.png`}
        style={style}
    />
}

export default Page