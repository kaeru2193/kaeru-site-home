import { FaDownload } from "react-icons/fa6";

import Image from "next/image"

import style from "./download.module.css"

export const DownloadButton = (props: any) => {
    return (
        <span className={style.button}>
            <a href={props.url} className={style.link}>
                <FaDownload/>
                <span>{props.name}をダウンロード</span>
            </a>
        </span>
    )
}