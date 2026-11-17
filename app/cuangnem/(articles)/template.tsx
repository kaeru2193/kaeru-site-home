"use client"
import { usePathname } from "next/navigation";
import { convertDate } from "../funcs"
import articles from '../articles.json'
import styles from "./template.module.scss"

export default function Template({ children }: { children: React.ReactNode }) {
    const pathCut = usePathname().slice(1).split("/")
    const articleID = pathCut[pathCut.length - 2]
    const articleData = articles.find(a => a.id == articleID)
    const title = articleData!.data.title
    const date = articleData!.data.date

    return (
      <>
        <h1 className={styles.title}>{title? title: articleID}</h1>
        <div className={styles.dateBox}>
            <img src="/cuangnem/seal.svg" width={25}/>
            <span>{convertDate(articleData!.data.date)}</span>
        </div>
        <div className="contentContainer">
            {children}
        </div>
      </>
    );
}