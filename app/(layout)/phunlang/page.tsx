import style from "./page.module.css"

const Page = () => {
    return (
        <>
            <h1>雰語</h1>
            <p className={`${style.phunText} phun`}>栄言為、現書使我然之言。</p>
            <p><b>雰語</b>（ふんご、雰：<span className="phun">栄字</span>、雰音：fúnbùn、英：Phun Language）は、かえるにより2021/1/13から制作されている人工言語である。</p>
            <h2>主要な特徴</h2>
            <ul>
                <li>声調言語であり、1形態素が1音節からなる。</li>
                <li>書記に表語文字である「雰字」が用いられる。</li>
                <li>孤立語であり、原則(S/T)VO-AN語順である。ここでTは主題を指す。</li>
                <li>語彙に関してはほぼ完全なアプリオリ人工言語である。</li>
            </ul>
            <h2>リンク集</h2>
            <ul>
                <li>
                    <a href="./phunlang/texts">雰語文庫</a>
                    <ul><li>雰語の例文や翻訳した文章の置き場です。ポップアップ辞典を用いて語義を確認しながら読むことも出来ます。</li></ul>
                </li>
                <li>
                    <a href="https://dict.kaeru2193.net">雰和辞典</a>
                    <ul><li>雰語のオンライン辞書ツールです。モバイル端末にも対応しています。</li></ul>
                </li>
                <li>
                    <a href="https://qo.kaeru2193.net">雰字典</a>
                    <ul><li>雰語表記に用いられる雰字のオンライン字典です。それぞれの雰字について詳細を確認することが可能です。</li></ul>
                </li>
                <li>
                    <a href="https://phunworld.miraheze.org/wiki/%E9%9B%B0%E8%AA%9E%E3%81%AE%E6%96%87%E6%B3%95">文法解説</a>
                    <ul><li>Wiki上の雰語文法についての記事です。情報が少し古いため注意。</li></ul>
                </li>
                <li>
                    <a href="https://lib.kaeru2193.net/">栄言記集</a>
                    <ul><li>雰語のみで書かれたブログ記事のような何かの置き場です。</li></ul>
                </li>
            </ul>
        </>
    )
}

export default Page