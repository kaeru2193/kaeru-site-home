"use client"
import Image from "next/image";
import Link from "next/link";
import style from "./common.module.css"

import { FetchData } from "./funcs";
import { useState, useEffect } from "react";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.content}>
                <Link href="/" className={style.logoLink}>
                    <div className={style.logoContainer}>
                        <Image src="/kaeru_logo.svg" alt="logo" height={60} width={60}/>
                        <span className={style.title}>之機堂</span>
                    </div>
                </Link>
                <div className={style.topLinks}>
                    <Link href="/phun"><div>雰界創作</div></Link>
                    <Link href="/ikenolog"><div>池ノ録</div></Link>
                    <Link href="/download"><div>倉庫</div></Link>
                    <Link href="/tools"><div>技術棟</div></Link>
                </div>
            </div>
        </div>
    )
}

export const Footer = () => {
    const [countData, setCountData]: any = useState("")
    const [kiriban, setKiriban] = useState(false)

    useEffect(() => {
        const access = async () => {
          try {
            const data = await FetchData("https://script.google.com/macros/s/AKfycbxz3t_RTrYJbkIXnqnWqo3lSG2JC1GYIk9PWNVyjLywCBa3waoZ5WMNcBHeo-F7dTSw1g/exec");
            const json = JSON.parse(data)

            const count = Number(json.count)
            const base12 = count.toString(12)

            const kiribanReg = new RegExp(/^([0-9ab])\1{2,}$|^[0-9ab]+0{2,}$/)
            setKiriban(kiribanReg.test(base12)) //キリ番チェック (ゾロ目か0の連続)

            setCountData(base12)
          } catch (error) {
            setCountData("")
          }
        }
    
        access()
      }, []);

    return (
        <div className={style.footer}>
            <p className={style.copyright}>© 2021-2024 kaeru2193</p>
            <div className={style.count}>
                {kiriban
                    ? <div className={style.message}>おめでとうございます！あなたは之機堂の<span className={style.messageNum}>{countData}</span>番目の来館者です！</div>
                    : <></>}
                <span className={`${style.countNum} ${kiriban? style.kiriban: ""}`}>{("000000" + countData).slice(-6)}</span>
            </div>
        </div>
    )
}