import "./cuangnem.scss"
import { SetScroll } from "./scroll"
import Link from "next/link"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <>
        <div className="mainContainer">
            <SetScroll/>
            <span className="titleBox">
                <Link href="/cuangnem">
                    <img src="/cuangnem/logo.svg" width={70}/>
                </Link>
            </span>
            {children}
            <span className="footerBox">
                <a href="/">
                    <img src="/banner_vertical.png" width={40}/>
                </a>
            </span>
        </div>
      </>
    )
}