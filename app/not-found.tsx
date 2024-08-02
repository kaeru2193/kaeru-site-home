import style from "./not-found.module.css"
import Image from "next/image"

const Page = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.box}>
                <Image className={style.icon} src="/kaeru_logo.svg" alt="logo" height={100} width={100}/>
                <h1 className={style.title}>404 Not Found</h1>
                <p className="phun">其雷紙不居在之蔓処。</p>
                <p><b>お探しのページは見つかりませんでした。移動または削除された可能性があります。</b></p>
                <p><a href="/">ここをクリック</a>してトップページに戻ります。</p>
            </div>
        </div>
    )
}

export default Page