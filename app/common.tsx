"use client"
import Image from "next/image";
import Link from "next/link";
import style from "./common.module.css"

import { FetchData } from "./funcs";
import { useState, useEffect } from "react";
import { BsGlobe } from "react-icons/bs";
import { langTexts } from "./languages";
import reactStringReplace from "react-string-replace";

export const Header = (props: {data: langTexts}) => {
    return (
        <div className={`${style.header} ${props.data.latin && style.latinHeader}`}>
            <div className={style.content}>
                <Link href="/" className={style.logoLink}>
                    <div className={style.logoContainer}>
                        <Image src="/kaeru_logo.svg" alt="logo" height={60} width={60}/>
                        <span className={style.title}>{props.data.siteName}</span>
                    </div>
                </Link>
                <div className={style.topLinks}>
                    {props.data.header.map(l => <a href={l.url}><div>{l.title}</div></a>)}
                </div>
                <div className={style.langSelect}>
                    <BsGlobe />
                    <ul className={style.langList}>
                        <li>
                            <a href="/"><span className="defFont">日本語</span></a>
                        </li>
                        <li>
                            <a href="/phun"><span className="phun">栄言</span></a>
                        </li>
                        <li>
                            <a href="/tok"><span className="defFont">toki pona</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const Footer = (props: {data: langTexts}) => {
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
            <p className={`${style.copyright} defFont`}>© 2021-2025 kaeru2193</p>
            <div className={style.count}>
                {kiriban
                    ? <div className={style.message}>
                        {reactStringReplace(
                            props.data.kiribanText,
                            /(###)/g,
                            () => <span className={style.messageNum}>
                                {countData}
                            </span>
                        )}
                    </div>
                    : <></>}
                <span className={`${style.countNum} ${kiriban? style.kiriban: ""}`}>{("000000" + countData).slice(-6)}</span>
            </div>
        </div>
    )
}