import { FaDownload } from "react-icons/fa6";

import Image from "next/image"

import style from "./components.module.css"

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

export const ScrollableImg = (props: {src: string, height: number, alt: string}) => {
    return <div className={style.scrollableBox} style={{height: props.height}}>
        <div className={style.imageBox}>
            <img className={style.scrollableImage}
                src={props.src}
                alt={props.alt}
                style={{height: props.height}}/>
        </div>
    </div>
}