import style from "./page.module.css"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>雰語</h1>
            <p className={`${style.phunText} phun`}>栄言為、現書使我然之言。</p>
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
                    <Link href="./phunlang/grammar">雰文典</Link> ― 雰語の文法事項を整理した資料です。
                </li>
                <li>
                    <Link href="https://dict.kaeru2193.net">雰和辞典</Link> ― 雰語のオンライン辞書ツールです。モバイル端末にも対応しています。
                </li>
                <li>
                    <Link href="https://qo.kaeru2193.net">雰字典</Link> ― 雰語表記に用いられる雰字のオンライン字典です。それぞれの雰字について詳細を確認することが可能です。
                </li>
                <li>
                    <Link href="./phunlang/texts">雰語文庫</Link> ― 雰語の例文や翻訳した文章の置き場です。ポップアップ辞典を用いて語義を確認しながら読むことも出来ます。
                </li>
                <li>
                    <Link href="https://lib.kaeru2193.net/">栄言記集</Link> ― 雰語のみで書かれたブログ記事のような何かの置き場です。
                </li>
            </ul>
            <h2>文化</h2>
            <ul>
                <li>
                    <Link href="./phunlang/name">雰名</Link> ― 雰人の名前についての解説
                </li>
            </ul>
        </>
    )
}

export default Page