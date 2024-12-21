"use client"
import { Header, Footer } from "@/common"
import { BreadCrumb } from "@/breadCrumb"

import { usePathname } from "next/navigation";

import "./kaeru.css"

export default function KaeruLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const isRoot = usePathname() == "/"

    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
        <Header/>
            <div className="article">
              {isRoot? <></>: <BreadCrumb/>}
              <div className="mainContainer">
                {children}
              </div>
            </div>
        <Footer/>
      </>
    )
}