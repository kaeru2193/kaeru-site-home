import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "雰語", desc: "かえるによって制作されている人工言語です。", url: "phun/lang"},
        {name: "雰界", desc: "雰語が用いられる世界観です。", url: "phun/world"}
    ]

const externalData = 
    [
        {name: "雰界資料集", desc: "雰界創作に関する総合Wikiです。", url: "https://phunworld.miraheze.org"},
    ]

const Page = () => {
    return (
        <>
            <h1>雰界創作</h1>
            <p>人工言語「雰語」と世界観「雰界」を中心とする創作活動です。</p>
            <h2>館内案内</h2>
            <SiteLinkList data={siteData}/>

            <h2>リンク集</h2>
            <SiteLinkList data={externalData}/>
        </>
    )
}

export default Page