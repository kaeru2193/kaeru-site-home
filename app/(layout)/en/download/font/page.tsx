import { SiteLink } from "@/link"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>Fonts</h1>
            <p>You can download my various original fonts here.</p>

            <h2>Phun Characters</h2>
            <p>A system of ideograms for writing the <Link href="/phuncreation/lang">Phun language</Link>.</p>
            <SiteLink title="PhunSans" desc="A rounded Gothic typeface that can be used in various circumstances." url="./phunsans"/>
            <SiteLink title="PhunDot" desc="A 16 by 16 pixel font of Phun characters." url="./phundot"/>
            <SiteLink title="PhunWrite" desc="A Phun character font handwritten by me. Is currently not worked on." url="./phunwrite"/>

            <h2>English Characters</h2>
            <SiteLink title="Blophabet" desc="A font that expresses the English alphabet with an 8 by 8 square grid. As it is extremely difficult to read, it is meant for decoration purposes." url="./blophabet"/>

            <h2>Shaleian Characters</h2>
            <p>
                A writing system used for the Shaleian language created by
                <a href="https://twitter.com/Ziphil">Ziphil</a>
                .
            </p>
            <SiteLink title="Càgit" desc="A serif-like typeface of Shaleian characters." url="./cagit"/>
            <SiteLink title="Bosval" desc="A pixalated typeface of Shaleian characters." url="./bosval"/>
        </>
    )
}

export default Page
