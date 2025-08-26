import style from "./page.module.css"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>雰語文庫</h1>
            <p>雰語によるテキストを閲覧できます。</p>
            <h2>翻訳</h2>
            <ul>
                <li><Link href="alice">『Alice's Adventures in Wonderland』</Link></li>
                <li><Link href="babel">『バベルの塔』</Link></li>
                <li><Link href="scp">『SCP財団とは』</Link></li>
                <li><Link href="internationale">『L'Internationale』</Link></li>
                <li><Link href="lords_prayer">『主の祈り』</Link></li>
                <li><Link href="unicat">『unicat』</Link></li>
                <li><Link href="library_prayer">大図書館教の祈り</Link></li>
                <li><Link href="end_poem">『End Poem』</Link></li>
            </ul>
        </>
    )
}

export default Page