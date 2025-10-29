import { notFound } from "next/navigation"
import { ArticleList } from "@/(layout)/(ja)/ikenolog/components"
import { yearSearch } from "@/(layout)/(ja)/ikenolog/components"
import { monthSearch } from "@/(layout)/(ja)/ikenolog/components"

import articles from '@/(layout)/(ja)/ikenolog/articles.json'

const Page = ({ params }: { params: { year: string, month: string } }) => {
    const yearArticle = yearSearch(articles, params.year)
    const result = monthSearch(yearArticle, params.month)

    if (result.length < 1) {
        notFound()
    }

    return (
        <>
            <h1>Per-Month Archives</h1>
            <h2>Articles of month {params.month} of the year {params.year}</h2>
            <ArticleList list={result}/>
        </>
    )
}

export default Page
