"use client"
import { Header, Footer } from "@/common"
import { BreadCrumb } from "@/breadCrumb"

import { langParse } from "@/languages"

import "./kaeru.css"

export default function KaeruLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const paths = langParse()

    const isRoot = !paths.pagePath[0] //言語版のトップページかどうか（0番目の要素があるか）

    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
        <Header data={paths.data}/>
            <div className="article">
              {isRoot? <></>: <BreadCrumb lang={paths.lang} paths={paths.pagePath}/>}
              <div className="mainContainer">
                {children}
              </div>
            </div>
        <Footer data={paths.data}/>
      </>
    )
}