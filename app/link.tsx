import Link from "next/link"
import linkCSS from "./link.module.css"
import { usePathname } from "next/navigation";

export const RelativeLink = (props: {href: string}) => {
    
}

export const SiteLink = (props: any) => {
    let linkElem = <></>
    
    if (props.reload) {
        linkElem =
            <a href={props.url} className={linkCSS.link}>
                <div className={linkCSS.title}>{props.title}</div>
                <div className={linkCSS.desc}>{props.desc}</div>
            </a>
    } else {
        linkElem =
            <Link href={props.url} className={linkCSS.link}>
                <div className={linkCSS.title}>{props.title}</div>
                <div className={linkCSS.desc}>{props.desc}</div>
            </Link>
    }
    return (
        <div className={linkCSS.card}>
            {linkElem}
        </div>
    )
}

export const SiteLinkList = (props: any) => {
    return (
        <div>
            {props.data.map((e: any) => {
                return <SiteLink title={e.name} desc={e.desc} url={e.url} key={e.name} reload={e.reload}/>
            })}
        </div>
    )
}