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
            <h1>年別アーカイブ</h1>
            <h2>{params.year}年の記事</h2>
            <ArticleList list={result}/>
        </>
    )
}

export default Page