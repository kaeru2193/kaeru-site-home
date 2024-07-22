"use client"

import { useState, useEffect } from "react";
import styles from "./components.module.css"

export const Input = (props: any) => {
    if (props.textarea) {
        return <label className={styles.textareaBox}><span className={styles.label}>{props.label}</span>
            <textarea className={styles.textarea} defaultValue={props.default? props.default: ""} rows={props.height} onBlur={(e) => {
                props.set(e.target.value)
            }}/>
        </label>
    } else {
        return <label className={styles.inputBox}><span className={styles.label}>{props.label}</span>
            <input className={styles.input} type={props.number? "number": "text"} defaultValue={props.default? props.default: ""} onBlur={(e) => {
                props.set(e.target.value)
            }}/>
        </label>
    }
}

const copyText = async (text: string, set: Function) => {
    await global.navigator.clipboard.writeText(text)
    set("COPIED!")
    await new Promise(resolve => setTimeout(resolve, 1500))
    set("COPY")
}

export const Output = (props: any) => {
    const [copyLabel, setCopyLabel] = useState("COPY")
    if (props.textarea) {
        return (
            <div className={styles.outputArea}>
                <div className={styles.outputTool}>
                    <button className={styles.copyButton} onClick={() => copyText(props.var, setCopyLabel)}>{copyLabel}</button>
                </div>
                <textarea className={`${styles.textarea} ${styles.output}`} rows={props.height} value={props.var} readOnly/>
            </div>
        )
    } else {
        return (
        <div className={styles.outputRowArea}>
            <input className={`${styles.input} ${styles.outputRow}`} type="text" value={props.var} readOnly/>
            <button className={styles.copyButton} onClick={() => copyText(props.var, setCopyLabel)}>{copyLabel}</button>
        </div>)
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
            <span className={styles.label}>{props.label}</span>
            <span className={styles.optionBody}>{props.children}</span>
        </div>
    )
}