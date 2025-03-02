import { usePathname } from "next/navigation"

export type langTexts = {
    latin?: boolean,
    siteName: string,
    siteDescription: string,
    topPage: string,
    notFound: {
        title: JSX.Element,
        content: JSX.Element
    },
    header: {url: string, title: string}[],
    kiribanText: string,
}

export const JA: langTexts = {
    siteName: '之機堂',
    siteDescription: 'かえるのホームページです。',
    topPage: "トップページ",
    notFound: {
        title: <>404 Not Found</>,
        content: <>
            <p className="phun">其雷紙不居在之蔓処。</p>
            <p><b>お探しのページは見つかりませんでした。移動または削除された可能性があります。</b></p>
            <p><a href="/">ここをクリック</a>してトップページに戻ります。</p>
        </>
    },
    header: [
        {url: "/phuncreation", title: "雰界創作"},
        {url: "/ikenolog", title: "池ノ録"},
        {url: "/download", title: "倉庫"},
        {url: "/tools", title: "技術棟"},
    ],
    kiribanText: "おめでとうございます！あなたは之機堂の###番目の来館者です！"
}

export const TOK: langTexts = {
    latin: true,
    siteName: 'tomo Kawelu',
    siteDescription: 'ni li lipu pi akesi Kawelu.',
    topPage: "lipu open",
    notFound: {
        title: <>404 lipu li lon ala</>,
        content: <>
            <p><b>lipu ni li lon ala. ken la lipu ni li lon ma ante.</b></p>
            <p><a href="/tok">o tawa lipu open</a></p>
        </>
    },
    header: [
        {url: "/phuncreation", title: "ijo pali Pun"},
        {url: "/ikenolog", title: "lipu Ikeno"},
        {url: "/download", title: "tomo poki"},
        {url: "/tools", title: "tomo ilo"},
    ],
    kiribanText: "pona mute a! sina jan kama nanpa ### pi tomo Kawelu!"
}

export const PHUN: langTexts = {
    siteName: '之機家',
    siteDescription: '之為之機含蔓処。',
    topPage: "開雷記",
    notFound: {
        title: <span className="phun">〤〇〤 雷紙不居</span>,
        content: <div className="phun">
            <p><b>其雷紙不居在之蔓処。其概虚岐其概動行外処。</b></p>
            <p>圧<a href="/phun">之処</a>模汝行開雷記。</p>
        </div>
    },
    header: [
        {url: "/phuncreation", title: "栄世思造"},
        {url: "/ikenolog", title: "蟾水録"},
        {url: "/download", title: "函家"},
        {url: "/tools", title: "機家"},
    ],
    kiribanText: "喜伴慶！汝為###序来人在之機家！"
}

export const langData: {[key: string]: langTexts} = {
    "tok": TOK,
    "ja": JA,
    "phun": PHUN
}

export const langParse = () => {
    const paths = usePathname().slice(1).split("/").filter(l => l)
    const [lang, pagePath] = Object.hasOwn(langData, paths[0]) //URLを見て言語版を判断
      ?[paths[0], paths.slice(1)]
      :["ja", paths]

    return {
        lang,
        pagePath,
        data: langData[lang]
    }
}