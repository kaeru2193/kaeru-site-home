import { Header } from "./common"
import "./tools.css"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <>
        <div className="pageContainer">
          <Header/>
          <div className="mainContainer">
              {children}
          </div>
        </div>
      </>
    )
}