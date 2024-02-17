import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "フォント", desc: "自作フォントをダウンロードできます。", url: "download/font"}
    ]

const Page = () => {
    return (
        <div className="mainContainer">
            <h1>倉庫</h1>
            <p>各種創作物のダウンロードはこちらから。</p>
            <SiteLinkList data={siteData}/>
        </div>
    )
}

export default Page