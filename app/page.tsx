import style from "./page.module.css"
import { SiteLinkList } from "./link"

import { NewsList } from "./news/news"
import { newsData } from "./news"

const snsData =
    [
        {id: "x", name: "X", url: "https://twitter.com/kaeru2193"},
        {id: "you", name: "Youtube", url: "https://youtube.com/channel/UCohJlUTohjjcikJPD7b2mdA"},
        {id: "dis", name: "Discord", url: "https://discord.gg/tHhA4bBYap"},
        {id: "mis", name: "Misskey.io", url: "https://misskey.io/@kaeru2193"},
        {id: "gih", name: "Github", url: "https://github.com/kaeru2193"},
        {id: "ste", name: "Steam", url: "https://steamcommunity.com/profiles/76561199224206180/"},
        {id: "bls", name: "Bluesky", url: "https://bsky.app/profile/kaeru2193.net"},
        {id: "bmc", name: "Buy Me a Coffee", url: "https://www.buymeacoffee.com/kaeru2193"},
        {id: "plx", name: "雰言訓機", url: "https://twitter.com/PhunLanguage"},
        {id: "rdi", name: "Reddit", url: "https://www.reddit.com/user/kaeru2193"},
        {id: "mig", name: "Migdal", url: "https://migdal.jp/kaeru2193"},
        {id: "bga", name: "BGA", url: "https://boardgamearena.com/player?name=kaeru2193"},
    ]

const siteData = 
    [
        {name: "Who am I?", desc: "かえるの自己紹介です。", url: "/self-intro"},
        {name: "雰界創作", desc: "主に取り組んでいる、人工言語「雰語」と世界観「雰界」を中心とする創作活動です。", url: "/phun"},
        {name: "人工言語", desc: "雰界創作以外の人工言語活動についてです。", url: "/conlang"},
        {name: "倉庫", desc: "各種創作物をダウンロードします。", url: "/download"},
        {name: "がらくた箱", desc: "細かいWebツールやゲームの寄せ集めです。", url: "/various"}
    ]

const Page = () => {
    return (
        <div className="mainContainer">
            <h1>ようこそ！</h1>

            <div className={style.grid}>
                {snsData.map(e => {
                    return (
                        <div className={`${style.item} ${style[e.id]}`} key={e.id}>
                            <a className={style.link} href={e.url} target="_blank">
                                {e.name}
                            </a>
                        </div>)
                })}
            </div>

            <p>ここはかえるのサイトです。</p>

            <h2>館内案内</h2>
            <SiteLinkList data={siteData}/>

            <h2>更新履歴</h2>
            <div>
                <NewsList data={newsData} limit={3}/>
                <span className={style.newsLink}><a href="/news">過去の更新履歴を見る</a></span>
            </div>

        </div>
    )
}

export default Page