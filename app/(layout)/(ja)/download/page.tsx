import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "フォント", desc: "自作フォントをダウンロードできます。", url: "download/font"},
        {name: "ギャラリー", desc: "ロゴや紋章など、画像形式の制作物をダウンロードできます。", url: "download/gallery"}
    ]

const Page = () => {
    return (
        <>
            <h1>倉庫</h1>
            <p>各種創作物のダウンロードはこちらから。</p>
            <SiteLinkList data={siteData}/>
        </>
    )
}

export default Page