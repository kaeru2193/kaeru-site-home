import style from "./components.module.scss"

import Link from "next/link";

import { convertDate } from "./funcs";

export const ArticleList = (props: {list: any[]}) => props.list.map(a => 
    <div className={style.articleCardContainer} key={a.id}>
        <Link className={style.articleLink} href={`/cuangnem/${a.id}`}>
            <div className={style.articleTitle + " bold"}>{a.data.title}</div>
        </Link>
        <div className={style.dateBox}>
            <img src="/cuangnem/seal.svg" width={25}/>
            <span>{convertDate(a.data.date)}</span>
        </div>
    </div>
)

export const CaptionedImage = (props: {src: string, width: number, title: string}) => {
    return <div className={style.captionedImageBox}>
        <img className={style.captionedImage}
            src={props.src}
            alt={props.title}
            style={{width: props.width}}/>
        <span className={style.imageCaption}>{props.title}</span>
    </div>
}