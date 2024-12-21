import style from "./page.module.css"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h1>雰語文庫</h1>
            <p>雰語によるテキストを閲覧できます。</p>
            <h2>翻訳</h2>
            <ul>
                <li><Link href="./texts/alice">『Alice's Adventures in Wonderland』</Link></li>
                <li><Link href="./texts/babel">『バベルの塔』</Link></li>
                <li><Link href="./texts/scp">『SCP財団とは』</Link></li>
                <li><Link href="./texts/internationale">『L'Internationale』</Link></li>
                <li><Link href="./texts/lords_prayer">『主の祈り』</Link></li>
            </ul>
        </>
    )
}

export default Page