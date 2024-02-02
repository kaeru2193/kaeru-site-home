import newsData from "../news.json"

import { NewsList } from "./news"

const Page = () => {
    return (
        <div className="mainContainer">
            <h1>新着情報</h1>
            <NewsList data={newsData}/>
        </div>
    )
}

export default Page