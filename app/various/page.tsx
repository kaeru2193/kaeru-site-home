import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "Languess", desc: "任意の単語リストで遊ぶことが出来るWordle風ゲームです。", url: "https://kaeru2193.github.io/Languess/"},
        {name: "交回楽", desc: "盤面の駒の色を揃えるパズルゲームです。", url: "https://kaeru2193.github.io/cross-board"},
        {name: "進数変換器", desc: "小数に対応した進数変換器です。有効桁数を自由に変更することが出来ます。", url: "https://kaeru2193.github.io/radix-converter/"}
    ]

const Page = () => {
    return (
        <div className="mainContainer">
            <h1>がらくた箱</h1>
            <p>細かいWebツールやミニゲームなど。</p>
            <h2>リンク集</h2>
            <SiteLinkList data={siteData}/>
        </div>
    )
}

export default Page