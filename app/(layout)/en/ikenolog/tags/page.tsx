import articles from "@/(layout)/(ja)/ikenolog/articles.json"
import { TagList } from "@/(layout)/(ja)/ikenolog/components"

const Page = () => {
    return (
        <>
            <h1>Tags</h1>
            <TagList list={articles}/>
        </>
    )
}

export default Page
