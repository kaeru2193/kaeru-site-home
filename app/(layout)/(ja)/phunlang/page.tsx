import style from "./page.module.css"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>雰語</h1>
            <p className={`${style.phunText} bold phun`}>栄言為、現書使我然之言。</p>
            <p><b>雰語</b>（ふんご、雰：<span className="phun">栄字</span>、雰音：fúnbùn、英：Phun Language）は、かえるにより2021/1/13から制作されている人工言語である。</p>
            <h2>主要な特徴</h2>
            <ul>
                <li>声調言語であり、1形態素は1音節からなる。</li>
                <li>書記において表語文字である「雰字」が用いられる。</li>
                <li>孤立語であり、SVO-AN語順である。また主題優勢言語であり、主語が頻繁に省略される。</li>
            </ul>
            
            <h2>資料</h2>
            <ul>
                <li>
                    <Link href="grammar">雰文典</Link> ― 雰語の文法事項を整理した資料です。
                </li>
                <li>
                    <Link href="https://dict.kaeru2193.net">雰和辞典</Link> ― 雰語のWeb辞書ツールです。モバイル端末にも対応しています。
                </li>
                <li>
                    <Link href="https://qo.kaeru2193.net">雰字典</Link> ― 雰語の書記に用いられる表語文字、雰字のWeb字典です。各々の雰字について詳しい情報が見られます。
                </li>
                <li>
                    <Link href="https://qo.kaeru2193.net">雰界資料集</Link> ― 雰界創作の総合Wikiです。雰語の歴史的な体系など、世界観設定に関する資料が置かれています。
                </li>
            </ul>

            <h2>読み物</h2>
            <ul>
                <li>
                    <Link href="texts">雰語文庫</Link> ― かえるによる雰語の翻訳文や創作文の置き場です。ポップアップ辞典を用いて語義を確認しながら読めます。
                </li>
                <li>
                    <Link href="https://lib.kaeru2193.net/">栄言記集</Link> ― 雰語のみで書かれたブログのような何かです。多分もう更新はしません。
                </li>
                <li>
                    <Link href="/phun">之機家</Link> ― このサイトの雰語版です。
                </li>
                <li>
                    <Link href="https://epiku.net/pages/home/phn">透仙蔓処</Link> ― <Link href="https://epiku.net">epikijetesantakalu Lili</Link>さんの個人サイトの雰語版です。
                </li>
            </ul>

            <h2>文化</h2>
            <ul>
                <li>
                    <Link href="name">雰名</Link> ― 雰人の名前についての解説です。
                </li>
            </ul>

            <h2>ツール</h2>
            <ul>
                <li>
                    <Link href="../download/font">フォント</Link> ― 雰字のフォントをダウンロードできます。
                </li>
                <li>
                    <Link href="/tools/phun-pron/">雰語を漢字翻字から表音表記化</Link> ― 漢字転写された雰語文を表音表記に変換します。
                </li>
                <li>
                    <Link href="/tools/phun-renderer/">雰字画像メーカー</Link> ― 雰字フォントを用いた画像をお手軽に作成できます。
                </li>
                <li>
                    <Link href="https://github.com/epikijetesantakalu/PhunDict-for-Yomitan">PhunDict for Yomitan</Link> ― <Link href="https://epiku.net">epikijetesantakalu Lili</Link>さんによる、<Link href="https://yomitan.wiki">Yomitan</Link>向けの雰語辞書です。
                </li>
                <li>
                    <Link href="https://github.com/epikijetesantakalu/tuosuafai">桜印具</Link> ― <Link href="https://epiku.net">epikijetesantakalu Lili</Link>さんによる、Windows用の雰語IMEです。
                </li>
            </ul>
        </>
    )
}

export default Page