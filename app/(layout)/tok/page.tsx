import style from "../(ja)/page.module.css"
import { SiteLinkList } from "@/link"

const snsData =
    [
        {id: "x", name: "ilo pi palisa tu", url: "https://twitter.com/kaeru2193"},
        {id: "you", name: "ilo Jutu", url: "https://youtube.com/channel/UCohJlUTohjjcikJPD7b2mdA"},
        {id: "dis", name: "ilo Siko", url: "https://discord.gg/tHhA4bBYap"},
        {id: "mis", name: "ilo Miki", url: "https://misskey.io/@kaeru2193"},
        {id: "gih", name: "ilo Kitupu", url: "https://github.com/kaeru2193"},
        {id: "ste", name: "ilo musi Simu", url: "https://steamcommunity.com/profiles/76561199224206180/"},
        {id: "bls", name: "ilo pi sewi laso", url: "https://bsky.app/profile/kaeru2193.net"},
        {id: "bmc", name: "o esun e telo tawa mi", url: "https://www.buymeacoffee.com/kaeru2193"},
        {id: "plx", name: "ilo pi toki Pun", url: "https://twitter.com/PhunLanguage"},
        {id: "rdi", name: "ilo Lesi", url: "https://www.reddit.com/user/kaeru2193"},
        {id: "mig", name: "ilo Mita", url: "https://migdal.jp/kaeru2193"},
        {id: "bga", name: "tomo pi musi supa", url: "https://boardgamearena.com/player?name=kaeru2193"},
    ]

const siteData = 
    [
        {name: "ijo pali Pun", desc: "toki sin Pun en ma sin Pun li lon. tenpo mute la mi pali e ni.", url: "/phun"},
        {name: "toki sin", desc: "ijo pi toki sin ante mi li lon.", url: "/conlang"},
        {name: "lipu Ikeno", desc: "lipu mi li lon.", url: "/ikenolog"},
        {name: "tomo poki", desc: "sina ken kama jo e ijo ni: tenpo pini la mi pali.", url: "/download"},
        {name: "tomo sitelen", desc: "sina ken kama jo e sitelen.", url: "/download/gallery"},
        {name: "tomo ilo", desc: "ilo pona li lon.", url: "/tools", reload: true},
        {name: "poki pi ijo lili", desc: "ijo lili en ilo lili li lon.", url: "/various"},
    ]

const Page = () => {
    return (
        <>
            <h1>kama pona!</h1>
            
            <p>tomo ni li lipu pi akesi Kawelu. nimi mi ante li <b>kaeru2193</b>.</p>

            <h2>linja pi lipu mi ante</h2>

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

            <h2>nasin pi tomo ni</h2>
            <SiteLinkList data={siteData}/>

            <h2>mi seme?</h2>
            <p><b>akesi Kawelu</b> (toki ante la nimi ona li kaeru2193) li akesi nasa. tenpo mute la ona li pali e toki sin Pun e ma sin Pun, li sitelen e toki ilo. toki Lasina la nimi pi akesi ni li <i>Dryophytes phunics</i>.</p>
            <p>tenpo sike nanpa 2021 la ona li kama.</p>
            <h3>nimi mi ante</h3>
            <ul>
                <li>akesi Kawelu / kaeru2193</li>
                
                <li><span className="phun">之機</span> / Kúaàil (nimi pi toki Pun)
                    <ul>
                        <li>nasin sitelen IPA la kalama pi nimi ni li <span className="ipa">[kɯa˥.ail˨]</span> anu <span className="ipa">[kʰə˧˥.ɛl˩˧]</span></li>
                    </ul>
                </li>
                <li>ʻkáles-ʻcolfomas (nimi pi <a href="https://ziphil.com/conlang/document/16.html">toki Sale</a>)</li>
                <li>Mońieto Fjenkaamsi (nimi pi <a href="https://zpdic.ziphil.com/dictionary/raqef/">toki Lase</a>)</li>
                <li>opalfwaluttai Kaeru (nimi pi <a href="https://ithkuil.net">toki Ikuli</a>)</li>
                <li>Kaela / Rhuigympha (nimi pi <a href="https://lamplight0.sakura.ne.jp/a/articles/?id=100">toki Lisatopa</a> / nimi pi <a href="https://lamplight0.sakura.ne.jp/a/articles/?id=520">toki Sasi</a>)</li>
            </ul>
            <h3>ijo ni li pona tawa mi</h3>
            <ul>
                <li>tenpo mute la...
                    <ul>
                        <li>mi pali e toki sin en ma sin</li>
                        <li>mi sitelen e toki ilo (mi ken sitelen lili e toki Typescript)</li>
                        <li>mi toki e ijo pi sona mun</li>
                        <li>mi pali e sitelen kule</li>
                        <li>mi pali e sitelen toki</li>
                    </ul>
                </li>

                <li>tenpo lili la...
                    <ul>
                        <li>mi toki e ijo pi sona nanpa</li>
                        <li>mi pali e sitelen ma pi ma sin</li>
                        <li>mi pali e sitelen tawa</li>
                    </ul>
                </li>

                <li>mi wile kama sona e ijo ni:
                    <ul>
                        <li>mi pali e ilo</li>
                        <li>mi pali e kalama musi</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Page