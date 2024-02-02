import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "Babel Index Viewer", desc: "みかぶるさんの人工言語リストを簡易的に検索するためのWebツールです。", url: "https://tools.kaeru2193.net/Babel-Index-Viewer/"},
        {name: "Langdon Squad / 未知言語解読班", desc: "人工言語を複数人で持ち寄り、フィールドワークを行いながら解読していくゲームを開催しているDiscordサーバーです。", url: "discord.gg/UjqJp2gDNX"}
    ]

const Page = () => {
    return (
        <div className="mainContainer">
            <h1>人工言語</h1>
            <p>雰界創作以外の人工言語活動についてです。</p>
            <h2>リンク集</h2>
            <SiteLinkList data={siteData}/>
        </div>
    )
}

export default Page