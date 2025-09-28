import style from "../(ja)/page.module.css"
import { SiteLinkList } from "@/link"
import { PhunClock } from "@/common"

const snsData =
    [
        {id: "x", name: "十処", url: "https://twitter.com/kaeru2193"},
        {id: "you", name: "内立影", url: "https://youtube.com/channel/UCohJlUTohjjcikJPD7b2mdA"},
        {id: "dis", name: "壁宝宇", url: "https://discord.gg/tHhA4bBYap"},
        {id: "mis", name: "数終", url: "https://misskey.io/@kaeru2193"},
        {id: "gih", name: "或間算", url: "https://github.com/kaeru2193"},
        {id: "ste", name: "熱霞", url: "https://steamcommunity.com/profiles/76561199224206180/"},
        {id: "bls", name: "青宇", url: "https://bsky.app/profile/kaeru2193.net"},
        {id: "bmc", name: "買茶向我", url: "https://www.buymeacoffee.com/kaeru2193"},
        {id: "plx", name: "栄言訓機", url: "https://twitter.com/PhunLanguage"},
        {id: "rdi", name: "基壁蔓", url: "https://www.reddit.com/user/kaeru2193"},
        {id: "mig", name: "暁箔緑", url: "https://migdal.jp/kaeru2193"},
        {id: "bga", name: "盤戦園", url: "https://boardgamearena.com/player?name=kaeru2193"},
    ]

const siteData = 
    [
        {name: "栄世思造", desc: "記向我多做然思造言〈栄言〉来思造世〈栄世〉。", url: "/phuncreation", reload: true},
        {name: "栄言", desc: "記向我造元〡〢〥〩年然思造言。", url: "/phunlang"},
        {name: "思造言", desc: "記向我思造言事外栄世思造。", url: "/conlang", reload: true},
        {name: "蟾水録", desc: "据雑記処。", url: "/ikenolog", reload: true},
        {name: "函家", desc: "能汲録我造然物。", url: "/download", reload: true},
        {name: "画家", desc: "能汲録我紋来画来銀影。", url: "/download/gallery", reload: true},
        {name: "機家", desc: "据蔓然倫機然家。", url: "/tools", reload: true},
        {name: "雑籠", desc: "不能等壁然雑小造物然蔓架集。", url: "/various", reload: true},
    ]

const Page = () => {
    return (
        <>
            <h1>喜汝！</h1>
            <PhunClock/>
            <p className="bigText">喜汝！</p>
            
            <p>之家為之機 （<span className="defFont">kaeru2193</span>） 含蔓処。</p>

            <h2>蔓架集</h2>

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
                <a href="/links">外蔓架居之処</a>
            </div>

            <h2>領紙向之家</h2>
            <SiteLinkList data={siteData}/>

            <h2>我為何人？</h2>
            <p><b>之機</b> （<span className="defFont">kaeru2193</span>等為名） 為思造言来世、追書算序、追做多事然蟾蛇 （定言名為<span className="defFont"><i>Dryophytes phunics</i></span>）。</p>
            <p>活内之衆網元〡〢〥〩年〺旬、追造思造言〈栄言〉来思造世〈栄世〉。</p>
            <h3>我名集</h3>
            <ul>
                <li>之機 （<span className="defFont">kaeru2193</span>）</li>
                <li><span className="defFont">akesi Kawelu</span> （名以<a href="https://tokipona.org">倫言</a>）</li>
                <li><span className="defFont">ʻkáles-ʻcolfomas</span> （名以<a href="https://ziphil.com/conlang/document/16.html">訓夜言</a>）</li>
                <li><span className="defFont">Mońieto Fjenkaamsi</span> （名以<a href="https://zpdic.ziphil.com/dictionary/raqef/">秒強技言</a>）</li>
                <li><span className="defFont">opalfwaluttai Kaeru</span> （名以<a href="https://ithkuil.net">弟間肩言</a>）</li>
                <li><span className="defFont">Kaela / Rhuigympha</span> （名以<a href="https://lamplight0.sakura.ne.jp/a/articles/?id=100">透鬚桜守言</a>、名以<a href="https://lamplight0.sakura.ne.jp/a/articles/?id=520">浄鬚紋言</a>）</li>
            </ul>
            <h3>好然事</h3>
            <ul>
                <li>在多時
                    <ul>
                        <li>思造言来思造世</li>
                        <li>書算序 （多書<span className="defFont">Typescript</span>、回等少書<span className="defFont">Python</span>）</li>
                        <li>天律知</li>
                        <li>画雑紋</li>
                        <li>建字来書魂字</li>
                    </ul>
                </li>

                <li>在少時
                    <ul>
                        <li>数知</li>
                        <li>画思造世領紙</li>
                        <li>雷脳動影</li>
                        <li>注録動影</li>
                    </ul>
                </li>

                <li>知拘事
                    <ul>
                        <li>造雷機</li>
                        <li>造奏</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Page