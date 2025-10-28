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
            <h1>Tag Search</h1>
            <h2>Articles with the tag "{decodeURI(params.tag)}"</h2>
            <ArticleList list={result}/>
        </>
    )
}

export default Page
