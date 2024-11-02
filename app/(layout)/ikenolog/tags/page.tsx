import articles from "../articles.json"
import { TagList } from "../components"

const Page = () => {
    return (
        <>
            <h1>タグ</h1>
            <TagList list={articles}/>
        </>
    )
}

export default Page