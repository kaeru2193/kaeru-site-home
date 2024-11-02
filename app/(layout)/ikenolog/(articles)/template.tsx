"use client"
import style from "./template.module.css"
import { usePathname } from "next/navigation";
import articles from '../articles.json'

import { TopInfo } from "../components";

export default function Template({ children }: { children: React.ReactNode }) {
    const articleID = usePathname().slice(1).split("/").pop()
    const articleData = articles.find(a => a.id == articleID)
    const title = articleData!.data.title
    const date = articleData!.data.date
    const tags = articleData!.data.tags

    return (
      <>
        <h1>{title? title: articleID}</h1>
        <TopInfo date={date} tags={tags}/>
        {children}
      </>
    );
}