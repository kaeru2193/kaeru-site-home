import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "Babel Index Viewer", desc: "A web tool for easily searching for languages in Mikanixonable's conlang list.", url: "https://tools.kaeru2193.net/Babel-Index-Viewer/"},
        {name: "Langdon Squad / 未知言語解読班", desc: "A Discord server where multiple people bring their own conlangs, and we work them out by doing field work.", url: "https://discord.gg/UjqJp2gDNX"},
        {name: "地球語くらぶ", desc: "An unofficial Discord server for the conlang \"Earth Language\", created by Yoshiko McFarland.", url: "https://discord.gg/YQN62zxNyE"}
    ]

const Page = () => {
    return (
        <>
            <h1>Conlanging</h1>
            <p>Content about other conlanging activities.</p>
            <h2>Links</h2>
            <SiteLinkList data={siteData}/>
        </>
    )
}

export default Page
