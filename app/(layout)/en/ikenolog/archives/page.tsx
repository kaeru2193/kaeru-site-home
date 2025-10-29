import articles from "@/(layout)/(ja)/ikenolog/articles.json"
import { ArchiveList } from "@/(layout)/(ja)/ikenolog/components"

const Page = () => {
    return (
        <>
            <h1>Archives</h1>
            <ArchiveList list={articles}/>
        </>
    )
}

export default Page
