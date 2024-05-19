"use client"

import { useState, useEffect } from "react";
import styles from "./components.module.css"

export const Input = (props: any) => {
    if (props.textarea) {
        return (<textarea className={styles.textarea} rows={props.height} onBlur={(e) => {
            props.set(e.target.value)
        }}/>)
    } else {
        return (<input className={styles.input} type="text" onBlur={(e) => {
            props.set(e.target.value)
        }}/>)
    }
}

const copyText = async (text: string, set: Function) => {
    await global.navigator.clipboard.writeText(text)
    set("COPIED!")
    await new Promise(resolve => setTimeout(resolve, 1500))
    set("COPY")
}

export const Output = (props: any) => {
    if (props.textarea) {
        const [copyLabel, setCopyLabel] = useState("COPY")

        return (
            <div className={styles.outputArea}>
                <div className={styles.outputTool}>
                    <button className={styles.copyButton} onClick={() => copyText(props.var, setCopyLabel)}>{copyLabel}</button>
                </div>
                <textarea className={`${styles.textarea} ${styles.output}`} rows={props.height} value={props.var} readOnly/>
            </div>
        )
    } else {
        return (<input className={`${styles.input} ${styles.output}`} type="text" value={props.var} readOnly/>)
    }
}

export const BreakLine = (props: any) => {
    return (
        <div className={styles.breakLine}>{props.text}</div>
    )
}

export const Select = (props: any) => {
    return (
        <select className={styles.select} value={props.var} onChange={(e) => {
            props.set(e.target.value)
        }}>
            {Object.keys(props.data).map(k => <option value={k} key={k}>{props.data[k]}</option>)}
        </select>
    )
}

export const OptionRow = (props: any) => {
    return (
        <div className={styles.optionRow}>
            <span className={styles.optionLabel}>{props.label}</span>
            <span>{props.children}</span>
        </div>
    )
}