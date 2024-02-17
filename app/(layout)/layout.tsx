import { Header, Footer } from "@/common"

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
            {children}
            </div>
        <Footer/>
      </>
    )
}