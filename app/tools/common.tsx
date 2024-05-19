import Image from "next/image";
import Link from "next/link";
import style from "./common.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.content}>
                <div className={style.logoLink}>
                    <Link href="/tools"><span className={style.title}>之機堂 技術棟</span></Link>
                </div>
                <div className={style.homeLink}>
                    <a href="/">
                        <span className={style.toHome}>
                            <Image src="/tools_kaeru_logo.svg" alt="logo" height={25} width={25}/>
                            <span>本棟へ</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}