"use client"

import styles from "./Module.module.css"
import { getPhunPron } from "@/funcs";
import { charaTable, marks } from "./table";

import { FaAngleRight } from "react-icons/fa6";

const convertCode = (word: string) => word
  .split("")
  .map(c => Object.hasOwn(charaTable, c) ?
    charaTable[c] 
    :Object.hasOwn(marks, c)
      ? marks[c]
      : ""
  )
  .filter(c => c)
  .join(" ")

export const PPron = (props: {text: string, children: React.ReactNode}) => {
  return <>
    <span className={styles.phunText}>{props.text.split(".").map(w => convertCode(w)).join(" ")}</span>
  </>
}

export const Translate = (props: {children: React.ReactNode}) => {
  return <div className={styles.transContainer}>
    <span className={styles.transIcon}><FaAngleRight/></span><span>{props.children}</span>
  </div>
}

export const Misqo = (props: {children: React.ReactNode}) => {
  return <span className={styles.phunMisqo}>
    {props.children}
  </span>
}

export const PBox = (props: {children: React.ReactNode}) => {
  return <div className={styles.translateBox}>
    {props.children}
  </div>
}

export const PText = (props: {children: React.ReactNode}) => {
  return <span className={styles.phunText}>
    {convertCode(String(props.children))}
  </span>
}