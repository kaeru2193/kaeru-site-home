import { SiteLinkList } from "@/link"

const siteData = 
    [
        {name: "永球時計", desc: "雰界の暦に従って動く時計です。", url: "/clock", reload: true},
        {name: "灼陽系儀", desc: "永球が属する星系である「灼陽系」の軌道シミュレーションです。", url: "https://tools.kaeru2193.net/ShakuyoSim/"},
    ]

const Page = () => {
    return (
        <div className="mainContainer">
            <h1>雰界</h1>
            <p>雰語が用いられる架空世界です。「永球」という架空の惑星を中心に、地理や国家、天文など広い範囲の創作を行っています。</p>
            <h2>リンク集</h2>
            <SiteLinkList data={siteData}/>
        </div>
    )
}

export default Page