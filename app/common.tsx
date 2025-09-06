"use client"
import Image from "next/image";
import Link from "next/link";
import style from "./common.module.css"

import { FetchData } from "./funcs";
import { useState, useEffect, useRef, use } from "react";
import { BsGlobe } from "react-icons/bs";
import { langTexts, langParse } from "./languages";
import reactStringReplace from "react-string-replace";

export const Header = (props: {data: langTexts}) => {
    const paths = langParse()
    const isRoot = !paths.pagePath[0] //言語版のトップページかどうか（0番目の要素があるか）

    return (
        <div className={`${style.header} ${props.data.latin && style.latinHeader}`}>
            <div className={style.content}>
                <Link href="/" className={style.logoLink}>
                    <div className={style.logoContainer}>
                        <AnimeIcon anime={isRoot} name={props.data.siteName}/>
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
                        <li>
                            <a href="/en"><span className="defFont">English</span></a>
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

const AnimeIcon = (props: any) => {
    if (!props.anime) {
        return <div className={style.animeIconBox}>
            <Image className={style.icon} src="/kaeru_logo.svg" height={60} width={60} alt="kaeru icon"/>
            <span className={style.titleBox}>
                <span className={style.title}>{props.name}</span>
            </span>
        </div>
    }

    const iconRef = useRef<SVGSVGElement>(null)
    const [titleAnime, setTitleAnime] = useState(false)

    useEffect(() => {
        const animes: NodeListOf<SVGAnimateElement> = iconRef.current!.querySelectorAll('animate, animateTransform')
        animes.forEach(a => a.beginElement())
        setTimeout(() => {
            setTitleAnime(true)
        }, 500)
    }, [])

    return (
    <div className={style.animeIconBox}>
    <span className={style.icon}><svg ref={iconRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
        <g transform="translate(85.9981 80)">
        <g transform="translate(-33.9981 -28)">
        <g transform="rotate(0)">
            <g transform="scale(0.65 0.65)">
            <g transform="skewX(0) skewY(0)">
            <g opacity="1" transform="translate(-85.9981 -80)">
            <g id="Group">
                <g transform="translate(137.163 240.637)">
                <g transform="translate(-31.3437 -140.816)">
                <g transform="rotate(0)">
                <g transform="scale(1 1)">
                    <g transform="skewX(0) skewY(0)">
                    <g opacity="1" transform="translate(-137.163 -240.637)">
                    <path fill="none" stroke="rgba(255, 255, 255, 1)" id="path1003" stroke-width="23.7855" stroke-linecap="round" fill-rule="evenodd" stroke-linejoin="round">
                    <animate fill="freeze" keyTimes="0;0.4;0.44;0.48;0.52;0.56;0.6;0.64;0.68;0.72;0.76;0.8;0.84;0.88;0.92;1" calcMode="discrete" values="M0 0;M0 0;M117.342 220.816C117.342 220.816 121.98 225.454 128.083 231.557;M117.342 220.816C117.342 220.816 126.936 230.41 136.684 240.158;M117.342 220.816C117.342 220.816 131.91 235.384 143.383 246.857;M117.342 220.816C117.342 220.816 136.172 239.646 147.877 251.351;M117.342 220.816C117.342 220.816 139.583 243.057 150.747 254.221;M117.342 220.816C117.342 220.816 142.546 246.02 152.761 256.235;M117.342 220.816C117.342 220.816 145.206 248.68 154.213 257.687;M117.342 220.816C117.342 220.816 147.625 251.1 155.255 258.73;M117.342 220.816C117.342 220.816 149.865 253.339 155.995 259.469;M117.342 220.816C117.342 220.816 151.894 255.368 156.483 259.957;M117.342 220.816C117.342 220.816 153.799 257.273 156.79 260.264;M117.342 220.816C117.342 220.816 155.299 258.773 156.93 260.404;M117.342 220.816C117.342 220.816 156.984 260.458 156.984 260.458;M117.342 220.816C117.342 220.816 156.984 260.458 156.984 260.458" attributeName="d" dur="0.833333s"/>
                    </path>
                    </g>
                    </g>
                </g>
                </g>
                </g>
                </g>
                <g transform="translate(117.342 220.816)">
                <g transform="translate(-31.3437 -140.816)">
                <g transform="rotate(0)">
                <g transform="scale(1 1)">
                    <g transform="skewX(0) skewY(0)">
                    <g opacity="1" transform="translate(-117.342 -220.816)">
                    <path fill="none" stroke="rgba(255, 255, 255, 1)" id="path5" stroke-width="23.7855" stroke-linecap="round" fill-rule="evenodd" stroke-linejoin="round">
                    <animate fill="freeze" keyTimes="0;0.04;0.08;0.12;0.16;0.2;0.24;0.28;0.32;0.36;0.4;0.44;0.48;0.52;0.56;0.6;0.64;0.68;0.72;0.76;0.8;1" calcMode="discrete" values="M0 0;M77.6992 181.173C77.6992 181.173 77.6992 193.522 77.6992 208.473;M77.6992 181.173C77.6992 181.173 77.6992 210.133 77.6992 233.048;M77.6992 181.173C77.6992 181.173 77.6992 237.161 77.6992 255.04;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 81.604 256.554 87.6805 250.477;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 87.3292 250.828 99.8768 238.281;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 93.2327 244.925 110.549 227.609;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 99.2 238.958 119.808 218.349;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 105.158 232.999 127.757 210.401;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 111.036 227.121 134.477 203.681;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 116.788 221.37 140.073 198.085;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 122.384 215.773 144.661 193.496;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 127.753 210.404 148.32 189.838;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 132.877 205.281 151.17 186.987;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 137.726 200.431 153.319 184.838;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 142.185 195.972 154.843 183.314;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 146.299 191.859 155.879 182.279;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 149.873 188.284 156.499 181.659;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 152.858 185.299 156.822 181.336;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 155.137 183.021 156.952 181.206;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 156.984 181.173 156.984 181.173;M77.6992 181.173C77.6992 181.173 77.6992 260.458 77.6992 260.458C77.6992 260.458 156.984 181.173 156.984 181.173" attributeName="d" dur="0.833333s"/>
                    </path>
                    </g>
                    </g>
                </g>
                </g>
                </g>
                </g>
            </g>
            </g>
            </g>
            </g>
        </g>
        </g>
        </g>
        <defs/>
    </svg></span>
        <span className={style.titleBox}>
            <span className={`${style.title} ${titleAnime? style.animeShow :style.animeHide}`}>{props.name}</span>
        </span>
    </div>)
}