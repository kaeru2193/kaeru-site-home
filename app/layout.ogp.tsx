"use client"
import { usePathname } from "next/navigation";

import pageMap from '@/pageMap.json'

export const MetaOGP = (props: any) => {
    const path = usePathname().slice(1)
    if (path == "") {
        return <title>{`トップページ - ${props.site}`}</title>
    }
    const title = pageMap.filter(p =>
        p.route == path
    )[0]
    const htmlTitle = path? title? title.title: path.split("/").slice(-1)[0]: "トップページ" //パスが空(ルート)ならトップページ、マップに記録されていればそのタイトル、それ以外はパスの末端をタイトルに設定
    return <>
        <title>{`${htmlTitle} - ${props.site}`}</title>
        <meta property="og:url" content={props.url + path} />
        <meta property="og:title" content={`${htmlTitle} - ${props.site}`} />
        <meta property="og:site_name" content={props.site} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.desc} />
        <meta property="og:image" content="https://kaeru2193.net/ogp-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kaeru2193" />
        <meta name="twitter:creator" content="@kaeru2193" />
    </>
}