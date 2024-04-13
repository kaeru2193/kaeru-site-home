"use client"
import { usePathname } from "next/navigation";

import pageMap from '@/pageMap.json'

export const PageTitle = (props: any) => {
    const path = usePathname().slice(1)
    if (path == "") {
        return <title>{`トップページ - ${props.site}`}</title>
    }
    const title = pageMap.filter(p =>
        p.route == path
    )[0]
    const htmlTitle = path? title? title.title: path.split("/").slice(-1)[0]: "トップページ" //パスが空(ルート)ならトップページ、マップに記録されていればそのタイトル、それ以外はパスの末端をタイトルに設定
    return <title>{`${htmlTitle} - ${props.site}`}</title>
}