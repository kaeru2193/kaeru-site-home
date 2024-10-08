import { SiteLinkList } from "@/link"

const externalData = 
    [
        {name: "雰界資料集", desc: "雰界創作に関する総合Wikiです。", url: "https://phunworld.miraheze.org"},
        {name: "雷家向雰民", desc: "雰界創作のための公式Discordサーバーです。", url: "https://discord.gg/tHhA4bBYap"},
    ]

const Page = () => {
    return (
        <>
            <h1>雰界創作</h1>
            <p>かえるが2021年頃から断続的に行っている、人工言語「雰語」と世界観「雰界」を中心とする創作活動です。</p>
            
            <h2>案内</h2>
            <ul>
                <li>
                    <a href="phunlang">雰語</a>
                    <ul><li>かえるによって2021年頃から制作されている芸術言語です。</li></ul>
                </li>
                <li>
                    <a href="phun/lang">雰界の諸言語</a>
                    <ul><li>雰界で話される各言語の紹介です。</li></ul>
                </li>
                <li>
                    <a href="phun/world">雰界</a>
                    <ul><li>雰語を初めとする人工言語が用いられる世界観であり、雰界創作における全ての事象を内包する並行宇宙です。</li></ul>
                </li>
            </ul>

            <h2>理念</h2>
            <ul>
                <li>雰界は、雰界創作に於けるあらゆる事物を含む世界観であり、現界から見て単一の並行宇宙である。</li>
                <li>雰界創作の全ては雰界の内部で完結しなければならず、現界を含む他の宇宙・世界観への干渉をしてはならない。</li>
                <li>上記二項は一次創作においての理念であり、派生・二次創作には適用されない。</li>
            </ul>

            <h2>リンク集</h2>
            <SiteLinkList data={externalData}/>
        </>
    )
}

export default Page