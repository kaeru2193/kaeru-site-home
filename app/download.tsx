import Image from "next/image"

import style from "./download.module.css"

export const DownloadButton = (props: any) => {
    return (
        <span className={style.button}>
            <a href={props.url} className={style.link}>
                <Image src="/download.svg" alt="download" height={30} width={30} className={style.icon}/>
                <span>{props.name}をダウンロード</span>
            </a>
        </span>
    )
}