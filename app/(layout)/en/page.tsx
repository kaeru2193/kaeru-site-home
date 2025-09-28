"use client"

import style from "../(ja)/page.module.css"
import { SiteLinkList } from "@/link"
import { PhunClock } from "@/common"

const snsData =
    [
        {id: "x", name: "X", url: "https://twitter.com/kaeru2193"},
        {id: "you", name: "Youtube", url: "https://youtube.com/channel/UCohJlUTohjjcikJPD7b2mdA"},
        {id: "dis", name: "Discord", url: "https://discord.gg/tHhA4bBYap"},
        {id: "mis", name: "Misskey.io", url: "https://misskey.io/@kaeru2193"},
        {id: "gih", name: "Github", url: "https://github.com/kaeru2193"},
        {id: "ste", name: "Steam", url: "https://steamcommunity.com/profiles/76561199224206180/"},
        {id: "bls", name: "Bluesky", url: "https://bsky.app/profile/kaeru2193.net"},
        {id: "bmc", name: "Buy Me a Coffee", url: "https://www.buymeacoffee.com/kaeru2193"},
        {id: "plx", name: "Phun Wordbot", url: "https://twitter.com/PhunLanguage"},
        {id: "rdi", name: "Reddit", url: "https://www.reddit.com/user/kaeru2193"},
        {id: "mig", name: "Migdal", url: "https://migdal.jp/kaeru2193"},
        {id: "bga", name: "BGA", url: "https://boardgamearena.com/player?name=kaeru2193"},
    ]

const siteData = 
    [
        {name: "Phun Creation", desc: "My main worldbuilding project centered around the Phun Language and the Phun World.", url: "/phuncreation"},
        {name: "Phun Language", desc: "The conlang that I have been creating since around 2021.", url: "/phunlang"},
        {name: "Conlanging", desc: "Content about other conlanging activities.", url: "/conlang"},
        {name: "Ikenolog", desc: "My miscellaneous diaries.", url: "/ikenolog"},
        {name: "Warehouse", desc: "Download various creative works.", url: "/download"},
        {name: "Gallery", desc: "Download creative works in image format, such as logos and emblems.", url: "/download/gallery"},
        {name: "Tech Annex", desc: "An annex with various small web tools.", url: "/tools", reload: true},
        {name: "Junk Box", desc: "A collection of links to small works that don't fit into other categories.", url: "/various"},
    ]

const Page = () => {
    return (
        <>
            <h1>Welcome!</h1>
            <PhunClock/>
            <p className="bigText">Welcome!</p>
            
            <p>This is the official website of kaeru2193.</p>

            <h2>Links</h2>

            <div className={style.grid}>
                {snsData.map(e => {
                    return (
                        <div className={`${style.item} ${style[e.id]}`} key={e.id}>
                            <a className={style.link} href={e.url} target="_blank">
                                {e.name}
                            </a>
                        </div>)
                })}
            </div>

            <div className={style.otherLink}>
                <a href="/links">Other links can be found here</a>
            </div>

            <h2>Site Navigation</h2>
            <SiteLinkList data={siteData}/>

            <h2>Who am I?</h2>
            <p><b>kaeru2193</b> is some kind of frog (scientific name is <i>Dryophytes phunics</i>) that dabbles in all sorts of things.</p>
            <p>Its existence has been confirmed since around October 2021, and it primarily has a habit of conlanging, worldbuilding, programming, etc.</p>
            <p>The site name is a combination of "Kaeru + -ington" and "tòn", which means "network" in the Phun language.</p>
            <h3>Names</h3>
            <ul>
                <li>かえる / Kaeru (kaeru2193)</li>
                <li><span className="phun">之機</span> / Kúaàil (<a href="/phunlang">Phun</a> name)
                    <ul>
                        <li><span className="ipa">[kɯa˥.ail˨]</span> or <span className="ipa">[kʰə˧˥.ɛl˩˧]</span></li>
                    </ul>
                </li>
                <li>akesi Kawelu (<a href="https://tokipona.org">Toki Pona</a> name)</li>
                <li>ʻkáles-ʻcolfomas (<a href="https://ziphil.com/conlang/document/16.html">Shaleian</a> name)</li>
                <li>Mońieto Fjenkaamsi (<a href="https://zpdic.ziphil.com/dictionary/raqef/">Rathefian</a> name)</li>
                <li>opalfwaluttai Kaeru (<a href="https://ithkuil.net">Ithkuil III</a> name)</li>
                <li>Kaela / Rhuigympha (<a href="https://lamplight0.sakura.ne.jp/a/articles/?id=100">Lisatopian</a> name / <a href="https://lamplight0.sakura.ne.jp/a/articles/?id=520">Shasavic</a> name)</li>
            </ul>
            <h3>Interests</h3>
            <ul>
                <li>Mainly
                    <ul>
                        <li>Conlanging and Worldbuilding</li>
                        <li>Programming (mainly Typescript, a little Python)</li>
                        <li>Topics about space and astronomy</li>
                        <li>Various logo and other design work</li>
                        <li>Fonts and Logograms</li>
                    </ul>
                </li>

                <li>Sometimes
                    <ul>
                        <li>Mathematics</li>
                        <li>Drawing fictional maps</li>
                        <li>3D CG</li>
                        <li>Video posting</li>
                    </ul>
                </li>

                <li>Curious
                    <ul>
                        <li>Electronics projects</li>
                        <li>Composing</li>
                    </ul>
                </li>
            </ul>

            <h3>Contact</h3>
            <p>The fastest and most reliable way to contact me is through Discord DMs.</p>
            <ul>
                <li>Discord: @kaeru2193</li>
                <li>X/Twitter: @kaeru2193</li>
                <li>Bluesky Social: @kaeru2193.net</li>
                <li>Email: kaeru2193◯gmail.com (Please replace the circle with an at sign)
                    <ul><li>I don't check my email very often, so please use other contact methods if possible.</li></ul>
                </li>
            </ul>

            <h2>Site Banner</h2>
            <p>This site is link-free. Please feel free to use the banner below when linking to this site.</p>
            <a href="https://kaeru2193.net"><img src="/banner.png" width="200" height="40" alt="之機堂" /></a>
            <pre><code>{`<a href="https://kaeru2193.net"><img src="https://kaeru2193.net/banner.png" width="200" height="40" alt="之機堂" /></a>`}</code></pre>
        </>
    )
}

export default Page
