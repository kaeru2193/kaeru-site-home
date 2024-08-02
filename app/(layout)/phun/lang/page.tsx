import { SiteLinkList, SiteLink } from "@/link"

import style from "./page.module.css"

const siteData = 
    [
        {name: "雰和辞典", desc: "雰語のオンライン辞書ツールです。モバイル端末にも対応しています。", url: "https://dict.kaeru2193.net"},
        {name: "雰字典", desc: "雰字のオンライン字典ツールです。それぞれの字形について詳細を確認することが出来ます。", url: "https://qo.kaeru2193.net"},
        {name: "文法解説", desc: "Wikiの雰語文法についての記事です。", url: "https://phunworld.miraheze.org/wiki/%E9%9B%B0%E8%AA%9E%E3%81%AE%E6%96%87%E6%B3%95"},
        {name: "雰語図書", desc: "雰語のみで執筆しているブログです。", url: "https://lib.kaeru2193.net/"}
    ]

const Page = () => {
    return (
        <>
            <h1>雰語</h1>
            <p className={`${style.phunText} phun`}>栄言為、現書使我然之言。</p>
            <p><b>雰語</b>（ふんご、雰字：<span className="phun">栄字</span>、雰音：fúnbùn、英：Phun Language）は、かえるにより2021/1/13から制作されている人工言語である。</p>
            <h2>主要な特徴</h2>
            <ul>
                <li>声調言語であり、1形態素が1音節からなる。</li>
                <li>書記には表語文字である「雰字」が用いられる。</li>
                <li>孤立語であり、原則(S/T)VO-AN語順である。ここでTは主題を指す。</li>
                <li>語彙に関してはほぼ完全なアプリオリ人工言語である。</li>
            </ul>
            <h2>リンク集</h2>
            <SiteLinkList data={siteData}/>
        </>
    )
}

export default Page