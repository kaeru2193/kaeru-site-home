import Image from "next/image";
import Link from "next/link";
import style from "./common.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.content}>
                <Link href="/" className={style.logoLink}>
                    <Image src="/kaeru_logo.svg" alt="logo" height={60} width={60}/>
                </Link>
                <span className={style.title}>之機堂</span>
            </div>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className={style.footer}>
            <p className={style.copyright}>© 2023-2024 kaeru2193</p>
        </div>
    )
}