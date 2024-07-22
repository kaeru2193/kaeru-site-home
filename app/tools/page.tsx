import Link from "next/link";

const Page = () => {
    return (
        <>
            <h1>技術棟トップ</h1>
            <p>テキスト変換や計算機などの細かいWebツールを適当に放り込む棟です。</p>
            <h2>雰界創作</h2>
            <ul>
                <li><Link href="tools/phun-pron">雰語を漢字翻字から表音表記化</Link></li>
                <li><Link href="tools/misqo-conv">算用数字を雰算字に変換</Link></li>
            </ul>
            <h2>数学</h2>
            <ul>
                <li><Link href="tools/radix-conv">進数変換器</Link></li>
            </ul>
        </>
    )
}

export default Page