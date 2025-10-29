import { notFound } from "next/navigation"
import { ArticleList } from "@/(layout)/(ja)/ikenolog/components"
import { tagSearch } from "@/(layout)/(ja)/ikenolog/components"

import articles from '@/(layout)/(ja)/ikenolog/articles.json'

const Page = ({ params }: { params: { tag: string } }) => {
    const result = tagSearch(articles, decodeURI(params.tag))
    if (result.length < 1) {
        notFound()
    }

    return (
        <>
            <h1>Tag Search</h1>
            <h2>Articles with the tag "{decodeURI(params.tag)}"</h2>
            <ArticleList list={result}/>
        </>
    )
}

export default Page
