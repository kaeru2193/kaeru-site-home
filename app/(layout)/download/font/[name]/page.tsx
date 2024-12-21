
import { notFound } from "next/navigation"
import Image from "next/image"

import { TestWrite } from "./input"
import { DownloadButton } from "@/components"

import { fontData } from "./fontData"

import style from "./page.module.css"


const Page = ({ params }: { params: { name: string } }) => {
    const font = fontSearch(params.name)
    if (!font) {
        notFound()
    }

    return (
        <>
            <h1>{font.name}</h1>
            {font.desc}
            
            <h2>試し書き</h2>
            <TestWrite font={font}/>

            <h2>ダウンロード</h2>
            <p>ご使用になる前に、READMEを必ずお読みください。</p>
            <div className={style.download}>
                <DownloadButton url={font.publish} name={font.name}/>
            </div>
        </>
    )
}

export default Page

const fontSearch = (name: string) => {
    return fontData.filter(e => e.id == name)[0]
}