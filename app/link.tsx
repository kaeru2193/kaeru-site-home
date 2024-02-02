import Link from "next/link"
import linkCSS from "./link.module.css"

export const SiteLink = (props: any) => {
    return (
        <div className={linkCSS.card}>
            <Link href={props.url} className={linkCSS.link}>
                <div className={linkCSS.title}>{props.title}</div>
                <div className={linkCSS.desc}>{props.desc}</div>
            </Link>
        </div>
    )
}

export const SiteLinkList = (props: any) => {
    return (
        <div>
            {props.data.map((e: any) => {
                return <SiteLink title={e.name} desc={e.desc} url={e.url} key={e.name}/>
            })}
        </div>
    )
}