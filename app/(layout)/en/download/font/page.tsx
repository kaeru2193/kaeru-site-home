import { SiteLink } from "@/link"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>Fonts</h1>
            <p>You can download my various original fonts here.</p>

            <h2>Phun Characters</h2>
            <p>The system of logograms for writing the <Link href="/phunlang">Phun language</Link>.</p>
            <SiteLink title="PhunSans" desc="A rounded Gothic typeface of Phun characters that can be used for general purpose." url="./phunsans"/>
            <SiteLink title="PhunDot" desc="A 16 by 16 pixelated typeface of Phun characters." url="./phundot"/>
            <SiteLink title="PhunWrite" desc="A Phun character typeface handwritten by me. It's currently not worked on." url="./phunwrite"/>

            <h2>Latin Alphabets</h2>
            <SiteLink title="Blophabet" desc="A font that expresses Latin Alphabets with a grid dividing a square into 8 triangles. As it is extremely difficult to read, it is meant for decoration purposes." url="./blophabet"/>

            <h2>Shaleian Letters</h2>
            <p>
                The writing system used for the Shaleian language, created by <a href="https://twitter.com/Ziphil">Ziphil</a>
                .
            </p>
            <SiteLink title="Càgit" desc="A serif-like typeface of Shaleian characters." url="./cagit"/>
            <SiteLink title="Bosval" desc="A pixalated typeface of Shaleian characters." url="./bosval"/>
        </>
    )
}

export default Page
