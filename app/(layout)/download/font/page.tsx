import { SiteLink } from "@/link"

const Page = () => {
    return (
        <>
            <h1>フォント</h1>
            <p>各種自作フォントのダウンロードを行うことが出来ます。</p>

            <h2>雰字</h2>
            <p><a href="/phun/lang">雰語</a>を書記するための表意文字体系です。</p>
            <SiteLink title="PhunSans" desc="様々な媒体で違和感なく使える丸ゴシック体の雰字フォントです。" url="font/phunsans"/>
            <SiteLink title="PhunWrite" desc="かえるの手書き雰字フォントです。現在は更新を停止しています。" url="font/phunwrite"/>

            <h2>英字</h2>
            <SiteLink title="Blophabet" desc="正方形を8等分したグリッドで英字を表現したフォントです。可読性が非常に低いため、装飾用途を想定しています。" url="font/blophabet"/>

            <h2>シャレイア文字</h2>
            <p>
                <a href="https://twitter.com/Ziphil">Ziphil</a>
                さんの製作している『シャレイア語』で用いられる文字体系です。
            </p>
            <SiteLink title="Càgit" desc="シャレイア文字のセリフ体風フォントです。" url="font/cagit"/>
            <SiteLink title="Bosval" desc="シャレイア文字のドットフォントです。" url="font/bosval"/>
        </>
    )
}

export default Page