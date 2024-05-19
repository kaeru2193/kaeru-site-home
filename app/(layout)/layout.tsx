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