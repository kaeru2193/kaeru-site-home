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
            <p>A rounded Gothic typeface that can be used for general purpose. It includes 3 weights: Light, Regular, Bold.</p>
    },
    {
        "name": "PhunWrite",
        "id": "phunwrite",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/PhunWrite-latest.zip",
        "example": "我為之機、汝為何如？",
        "desc": 
            <p>A typeface handwritten by me. It includes only 1 weight.</p>
    },
    {
        "name": "PhunDot",
        "id": "phundot",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/PhunDot-latest.zip",
        "example": "我為之機、汝為何如？",
        "desc": 
            <>
                <p>A 16 by 16 pixelated typeface of Phun characters. It includes only 1 weight.</p>
                <ScrollableImg src="/font-preview/phun-dot.png" height={500} alt={"PhunDot preview"}/>
            </>
    },
    {
        "name": "Blophabet",
        "id": "blophabet",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/Blophabet-latest.zip",
        "example": "lorem ipsum",
        "desc": 
            <p>A font that expresses Latin Alphabets with a grid dividing a square into 8 triangles. As it is extremely difficult to read, it is meant for decoration purposes.</p>
    },
    {
        "name": "Càgit",
        "id": "cagit",
        "publish": "https://kaeru2193.github.io/Phun-Resources/font-publish/Cagit-latest.zip",
        "example": "sizkulig okebiq a hay adoj te rafepxav acál e monaf.",
        "desc": 
            <>
                <p>
                    A serif-like typeface of Shaleian characters, used for the Shaleian language by <a href="https://twitter.com/Ziphil">Ziphil</a>. It includes 2 weights: Regular, Bold.
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
                    A pixalated typeface of Shaleian characters, used for the Shaleian language by <a href="https://twitter.com/Ziphil">Ziphil</a>. It includes 2 weights: Regular, Bold.
                </p>
                <ScrollableImg src="/font-preview/bosval.png" height={500} alt={"bosval preview"}/>
            </>
    },
]