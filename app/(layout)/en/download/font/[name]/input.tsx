"use client"
import { useState } from "react"

import "./page.module.css"
import style from "./page.module.css"

export const TestWrite = (props: any) => {
    const font = props.font

    const [text, setText] = useState(font.example)

    return (
        <>
            <div style={{fontFamily: font.id}} className={style.example}>
                {text}
            </div>
            <input
                className={style.textBox}
                type="text"
                defaultValue={text}
                onChange={e => {
                    setText(e.target.value)
                }}
            />
        </>
    )
}