import style from "./page.module.css"
import { SiteLinkList } from "@/link"

import { NewsList } from "@/(layout)/news/news"
import { newsData } from "@/news"

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
        {name: "雰界創作", desc: "主に取り組んでいる、人工言語「雰語」と世界観「雰界」を中心とする創作活動です。", url: "/phun"},
        {name: "人工言語", desc: "雰界創作以外の人工言語活動についてです。", url: "/conlang"},
        {name: "池ノ録", desc: "雑多な文書置き場です。", url: "/ikenolog"},
        {name: "倉庫", desc: "各種創作物をダウンロードします。", url: "/download"},
        {name: "ギャラリー", desc: "ロゴや紋章など、画像形式の制作物をダウンロードできます。", url: "/download/gallery"},
        {name: "技術棟", desc: "細かいWebツールが適当に放り込まれた別館です。", url: "/tools", reload: true},
        {name: "がらくた箱", desc: "分類できない小規模な制作物へのリンク集です。", url: "/various"},
    ]

const Page = () => {
    return (
        <>
            <h1>ようこそ！</h1>
            
            <p>ここはかえる（kaeru2193）のサイトです。</p>

            <h2>リンク群</h2>

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

            <h2>館内案内</h2>
            <SiteLinkList data={siteData}/>

            <h2>Who am I?</h2>
            <p><b>かえる</b>（kaeru2193とも）は、言語・世界創作やプログラミング、その他諸々の活動をしている雑多なかえる（学名 <i>Dryophytes phunics</i>）である。</p>
            <p>2021/10頃から現界隈での生息が確認されており、主に人工言語「雰語」・架空世界「雰界」を創作するなどの生態が見られる。</p>
            <p>サイト名は「之機 (雰語名の漢字転写) + 堂」であるが、正しい読みは不明である。</p>
            <h3>名義群</h3>
            <ul>
                <li>かえる / kaeru2193</li>
                
                <li>之機 / Kúaàil (雰名)
                    <ul>
                        <li>[kɯa˥.ail˨] または [kʰə˧˥.ɛl˩˧]</li>
                    </ul>
                </li>
                <li>akesi Kawelu (<a href="https://tokipona.org">トキポナ</a>名)</li>
                <li>ʻkáles-ʻcolfomas (<a href="https://ziphil.com/conlang/document/16.html">シャレイア</a>名)</li>
                <li>Mońieto Fjenkaamsi (<a href="https://zpdic.ziphil.com/dictionary/raqef/">ラゼフ</a>名)</li>
            </ul>
            <h3>興味範囲</h3>
            <ul>
                <li>おもに
                    <ul>
                        <li>人工言語・架空世界制作</li>
                        <li>プログラミング（主にTypescript、Pythonも少し）</li>
                        <li>宇宙や天文のはなし</li>
                        <li>各種ロゴなどのデザイン</li>
                        <li>フォントとか表意文字とか</li>
                    </ul>
                </li>

                <li>ときどき
                    <ul>
                        <li>数学とか</li>
                        <li>地図描き</li>
                        <li>3DCG</li>
                        <li>動画投稿とか</li>
                    </ul>
                </li>

                <li>きになる
                    <ul>
                        <li>電子工作</li>
                        <li>作曲</li>
                    </ul>
                </li>
            </ul>

            <h2>更新履歴</h2>
            <div>
                <NewsList data={newsData} limit={3}/>
                <span className={style.newsLink}><a href="/news">過去の更新履歴を見る</a></span>
            </div>

        </>
    )
}

export default Page