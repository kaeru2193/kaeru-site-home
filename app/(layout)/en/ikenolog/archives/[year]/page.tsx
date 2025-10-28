import { notFound } from "next/navigation"
import { ArticleList } from "../../components"
import { yearSearch } from "../../components"

import articles from '../../articles.json'

const Page = ({ params }: { params: { year: string } }) => {
    const result = yearSearch(articles, params.year)
    if (result.length < 1) {
        notFound()
    }

    return (
        <>
            <h1>Per-Year Archives</h1>
            <h2>Articles of the year {params.year}</h2>
            <ArticleList list={result}/>
        </>
    )
}

export default Page
