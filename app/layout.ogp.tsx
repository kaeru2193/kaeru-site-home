"use client"
import { usePathname } from "next/navigation";

import pageMap from '@/pageMap.json'
import blogArticles from "@/(layout)/ikenolog/articles.json"

export const MetaOGP = (props: any) => {
    const path = usePathname().slice(1)
    const pathList = path.split("/")
    
    const title = pageMap.filter(p =>
        p.route == path
    )[0]
    const htmlTitle = path? title? title.title: pathList.slice(-1)[0]: "トップページ" //パスが空(ルート)ならトップページ、マップに記録されていればそのタイトル、それ以外はパスの末端をタイトルに設定
    const ogpImage = pathList[0] == "ikenolog"
        ?"https://kaeru2193.net/ikenolog-ogp.png"
        :"https://kaeru2193.net/ogp-image.png" //ブログ中は専用ogp

    const blogDesc = pathList[0] == "ikenolog"
        ?blogArticles.find(a => a.id == pathList[1])?.data.outline
        :""

    return <>
        <title>{`${htmlTitle} - ${props.site}`}</title>
        <meta property="og:url" content={props.url + path} />
        <meta property="og:title" content={htmlTitle} />
        <meta property="og:site_name" content={props.site} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={blogDesc ?blogDesc :props.desc} />
        <meta property="og:image" content={ogpImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kaeru2193" />
        <meta name="twitter:creator" content="@kaeru2193" />
    </>
}