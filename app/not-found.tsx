import style from "./not-found.module.css"
import Image from "next/image"

const Page = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.box}>
                <Image src="/kaeru_logo.svg" alt="logo" height={100} width={100}/>
                <h1 className={style.title}>404 Not Found</h1>
                <p className="phun">其記不居在之網処。</p>
                <p>お探しのページは見つかりませんでした。</p>
                <p><a href="/">ここをクリック</a>してトップページに戻ります。</p>
            </div>
        </div>
    )
}

export default Page