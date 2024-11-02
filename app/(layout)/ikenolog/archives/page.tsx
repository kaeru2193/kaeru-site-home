import articles from "../articles.json"
import { ArchiveList } from "../components"

const Page = () => {
    return (
        <>
            <h1>アーカイブ</h1>
            <ArchiveList list={articles}/>
        </>
    )
}

export default Page