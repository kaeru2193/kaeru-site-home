import style from "./page.module.css"

const Page = () => {
    return (
        <>
            <h1>雰語文庫</h1>
            <p>雰語によるテキストを閲覧できます。</p>
            <h2>翻訳</h2>
            <ul>
                <li><a href="./texts/alice">『Alice's Adventures in Wonderland』</a></li>
                <li><a href="./texts/babel">『バベルの塔』</a></li>
                <li><a href="./texts/scp">『SCP財団とは』</a></li>
                <li><a href="./texts/internationale">『L'Internationale』</a></li>
            </ul>
        </>
    )
}

export default Page