import style from "./page.module.css"
import Image from "next/image"
import { ScrollableImg } from "@/components"

export const fontData = [
    {
        "name": "PhunSans",
        "id": "phunsans",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/PhunSans-latest.zip",
        "example": "我為之機、汝為何如？",
        "desc": 
            <p>汎用的に使える雰字の丸ゴシック体フォントです。Light, Regular, Boldの3ウェイトが含まれています。</p>
    },
    {
        "name": "PhunWrite",
        "id": "phunwrite",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/PhunWrite-latest.zip",
        "example": "我為之機、汝為何如？",
        "desc": 
            <p>かえるが雰字を手書きしたフォントです。Regularの1ウェイトのみが含まれます。</p>
    },
    {
        "name": "PhunDot",
        "id": "phundot",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/PhunDot-latest.zip",
        "example": "我為之機、汝為何如？",
        "desc": 
            <>
                <p>雰字の16×16ドットフォントです。1ウェイトのみが含まれます。</p>
                <ScrollableImg src="/font-preview/phun-dot.png" height={500} alt={"PhunDot preview"}/>
            </>
    },
    {
        "name": "Blophabet",
        "id": "blophabet",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/Blophabet-latest.zip",
        "example": "lorem ipsum",
        "desc": 
            <p>8等分にした正方形で構成される英字フォントです。可読性が非常に低いため、装飾用途での使用を想定しています。</p>
    },
    {
        "name": "Càgit",
        "id": "cagit",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/Cagit-latest.zip",
        "example": "sizkulig okebiq a hay adoj te rafepxav acál e monaf.",
        "desc": 
            <>
                <p>
                    <a href="https://ziphil.com">Ziphil</a>
                    さんの製作している『シャレイア語』で用いられる『シャレイア文字』のセリフ体風フォントです。Regular, Boldの2ウェイトが含まれます。
                </p>
                <ScrollableImg src="/font-preview/cagit.png" height={500} alt={"cagit preview"}/>
            </>
    },
    {
        "name": "Bosval",
        "id": "bosval",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/Bosval-latest.zip",
        "example": "sizkulig okebiq a hay adoj te rafepxav acál e monaf.",
        "desc": 
            <>
                <p>
                    <a href="https://ziphil.com">Ziphil</a>
                    さんの製作している『シャレイア語』で用いられる『シャレイア文字』のドットフォントです。Regular, Boldの2ウェイトが含まれます。
                </p>
                <ScrollableImg src="/font-preview/bosval.png" height={500} alt={"bosval preview"}/>
            </>
    },
]