import Link from "next/link";

const Page = () => {
    return (
        <>
            <h1>技術棟トップ</h1>
            <p>テキスト変換や計算機などの細かいWebツールを適当に放り込む棟です。</p>
            <h2>ツール一覧</h2>
            <ul>
                <li><Link href="tools/phun-pron">雰語を漢字転写から表音表記に変換</Link></li>
            </ul>
        </>
    )
}

export default Page