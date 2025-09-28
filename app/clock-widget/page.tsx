"use client"

import style from "./page.module.css"
import { PhunClockWidget } from "@/common"

const Page = () => {
    return (
        <>
            <span className={style.title}><h1>配信用雰時計</h1></span>
            <PhunClockWidget/>
        </>
    )
}

export default Page