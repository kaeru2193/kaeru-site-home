import { newsData } from "@/news"

import { NewsList } from "./news"

const Page = () => {
    return (
        <>
            <h1>News</h1>
            <NewsList data={newsData}/>
        </>
    )
}

export default Page
