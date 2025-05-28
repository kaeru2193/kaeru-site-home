"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

import style from "./layout.module.css"

const numberOfArticles = 13

export default function GrammarLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const paths = usePathname().split("/").filter(l => l)
    console.log(paths)
    
    const articleID = Number(paths[paths.length - 1])
    const nextID = articleID < numberOfArticles
        ? ("0000" + (articleID + 1)).slice(-2)
        : null
    const preID = 1 < articleID
        ? ("0000" + (articleID - 1)).slice(-2)
        : null


    return (
      <>
        {children}
        {!isNaN(articleID) && <div className={style.linkBox}>
            <span>{preID && <Link href={`../${preID}`}>&lt;前の記事へ</Link>}</span>
            <span>{nextID && <Link href={`../${nextID}`}>次の記事へ&gt;</Link>}</span>
        </div>}
      </>
    )
}