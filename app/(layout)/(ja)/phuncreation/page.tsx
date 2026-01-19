import { SiteLinkList } from "@/link"
import Link from "next/link"
import { ScrollableImg } from "@/components"

const externalData = 
    [
        {name: "雰界資料集", desc: "雰界創作に関する総合Wikiです。", url: "https://phunworld.miraheze.org"},
        {name: "雷家向雰民", desc: "雰界創作のための公式Discordサーバーです。", url: "https://discord.gg/tHhA4bBYap"},
    ]

const Page = () => {
    return (
        <>
            <h1>雰界創作</h1>
            <ScrollableImg src="/phuncreation-logo.png" height={150} alt="the logo of Phun Creation"/>
            <p>かえるが2021年頃から断続的に行っている、人工言語「雰語」と世界観「雰界」を中心とする創作活動です。</p>
            
            <h2>案内</h2>
            <ul>
                <li>
                    <Link href="../phunlang">雰語</Link>
                    <ul><li>かえるによって2021年頃から制作されている芸術言語です。</li></ul>
                </li>
                <li>
                    <Link href="lang">雰界の諸言語</Link>
                    <ul><li>雰界で話される各言語の紹介です。</li></ul>
                </li>
                <li>
                    <Link href="world">雰界</Link>
                    <ul><li>雰語を初めとする人工言語が用いられる世界観であり、雰界創作における全ての事象を内包する並行宇宙です。</li></ul>
                </li>
            </ul>

            <h2>理念</h2>
            雰界創作に取り組むに当たって、かえるは創作を進める上での方針を幾つか規定している。ここでは、そのうち特に根本的な理念を示す。
            <ul>
                <li>雰界創作の全ては、単一の世界観である雰界の内部で完結する。雰界は、現界の並行宇宙、または現界と同じ宇宙ではあるが地球から見て宇宙の地平線の向こう側にあるものとして解釈される。すなわち、雰界の自然法則は現界のそれと寸分違わず一致するが、現界を含む他の宇宙・世界観と雰界とは、互いにいかなる因果関係も持つことはできない。</li>
                <li>かえるは雰界の事象を客観的に記述する立場を取るのであって、雰界の創造主とは見なされない。そのため、雰界創作で未着手となっている部分については、存在しないのではなく、単にかえるの記述に未だ現れていないだけであると解釈される。</li>
                <li>雰界創作の一次創作は、全てかえるにより行われる。</li>
            </ul>
            但し、雰界創作の派生や二次創作においてはこの限りではない。

            <h2>リンク集</h2>
            <SiteLinkList data={externalData}/>
        </>
    )
}

export default Page