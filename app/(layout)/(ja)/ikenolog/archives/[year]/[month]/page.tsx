import { notFound } from "next/navigation"
import { ArticleList } from "../../../components"
import { yearSearch } from "../../../components"
import { monthSearch } from "../../../components"

import articles from '../../../articles.json'

const Page = ({ params }: { params: { year: string, month: string } }) => {
    const yearArticle = yearSearch(articles, params.year)
    const result = monthSearch(yearArticle, params.month)

    if (result.length < 1) {
        notFound()
    }

    return (
        <>
            <h1>{params.year}年{params.month}月の記事</h1>
            <ArticleList list={result}/>
        </>
    )
}

export default Page