import { newsData } from "@/news"

import { NewsList } from "./news"

const Page = () => {
    return (
        <>
            <h1>新着情報</h1>
            <NewsList data={newsData}/>
        </>
    )
}

export default Page