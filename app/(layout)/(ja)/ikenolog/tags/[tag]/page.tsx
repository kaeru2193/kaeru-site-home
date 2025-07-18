import { notFound } from "next/navigation"
import { ArticleList } from "../../components"
import { tagSearch } from "../../components"

import articles from '../../articles.json'

const Page = ({ params }: { params: { tag: string } }) => {
    const result = tagSearch(articles, decodeURI(params.tag))
    if (result.length < 1) {
        notFound()
    }

    return (
        <>
            <h1>タグ検索</h1>
            <h2>"{decodeURI(params.tag)}"タグの記事</h2>
            <ArticleList list={result}/>
        </>
    )
}

export default Page