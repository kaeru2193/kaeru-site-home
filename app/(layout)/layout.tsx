import { Header, Footer } from "@/common"
import { BreadCrumb } from "@/breadCrumb"

import "./kaeru.css"

export default function KaeruLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header/>
            <div className="article">
              {/*<BreadCrumb/>*/}
              {children}
            </div>
        <Footer/>
      </>
    )
}