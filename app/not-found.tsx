"use client"

import style from "./not-found.module.css"
import Image from "next/image"
import { langParse } from "./languages"

export const NotFound = (props: {message: any}) => {
    return (
        <div className={style.mainContainer}>
            <div className={style.box}>
                <Image className={style.icon} src="/kaeru_logo.svg" alt="logo" height={100} width={100}/>
                <h1 className={style.title}>{props.message.title}</h1>
                {props.message.content}
            </div>
        </div>
    )
}

const Page = () => {
    const paths = langParse()

    return <NotFound message={paths.data.notFound}/>
}

export default Page