"use client"
import { usePathname } from "next/navigation";
import { langParse } from "./languages";

import pageMap from '@/pageMap.json'
import blogArticles from "@/(layout)/(ja)/ikenolog/articles.json"

export const MetaOGP = (props: any) => {
    const paths = langParse()
    const fullPath = paths.pagePath.join("/")
    const siteName = paths.data.siteName
    const siteDesc = paths.data.siteDescription
    
    const title = pageMap.find(p =>
        p.route == fullPath
    )
    const htmlTitle = paths.pagePath[0] //パスの0番目が空(ルート)ならトップページ、マップに記録されていればそのタイトル、それ以外はパスの末端をタイトルに設定
        ? title
            ? title.title
            : paths.pagePath.slice(-1)[0]
        : paths.data.topPage

    const ogpImage = paths.pagePath[0] == "ikenolog"
        ? "https://kaeru2193.net/ikenolog-ogp.png"
        : "https://kaeru2193.net/ogp-image.png" //ブログ中は専用ogp

    const blogDesc = paths.pagePath[0] == "ikenolog"
        ? blogArticles.find(a => a.id == paths.pagePath[1])?.data.outline
        : ""

    return <>
        <title>{`${htmlTitle} - ${siteName}`}</title>
        <meta property="og:url" content={props.url + fullPath} />
        <meta property="og:title" content={htmlTitle} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={blogDesc ?blogDesc :siteDesc} />
        <meta property="og:image" content={ogpImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kaeru2193" />
        <meta name="twitter:creator" content="@kaeru2193" />
    </>
}