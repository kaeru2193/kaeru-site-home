import { SiteLink } from "@/link"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>フォント</h1>
            <p>各種自作フォントのダウンロードを行うことが出来ます。</p>

            <h2>雰字</h2>
            <p><Link href="/phuncreation/lang">雰語</Link>を書記するための表意文字体系です。</p>
            <SiteLink title="PhunSans" desc="様々な媒体で違和感なく使える丸ゴシック体の雰字フォントです。" url="./phunsans"/>
            <SiteLink title="PhunDot" desc="雰字の16×16ドットフォントです。" url="./phundot"/>
            <SiteLink title="PhunWrite" desc="かえるの手書き雰字フォントです。現在は更新を停止しています。" url="./phunwrite"/>

            <h2>英字</h2>
            <SiteLink title="Blophabet" desc="正方形を8等分したグリッドで英字を表現したフォントです。可読性が非常に低いため、装飾用途を想定しています。" url="./blophabet"/>

            <h2>シャレイア文字</h2>
            <p>
                <a href="https://twitter.com/Ziphil">Ziphil</a>
                様が製作されている『シャレイア語』で用いられる文字体系です。
            </p>
            <SiteLink title="Càgit" desc="シャレイア文字のセリフ体風フォントです。" url="./cagit"/>
            <SiteLink title="Bosval" desc="シャレイア文字のドットフォントです。" url="./bosval"/>
        </>
    )
}

export default Page