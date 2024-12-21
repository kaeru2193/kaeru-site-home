"use client"

import styles from "./Module.module.css"
import { getPhunPron } from "@/funcs";

import { FaAngleRight } from "react-icons/fa6";

export const Table = (props: any) => {
  const isHeader: boolean = props.head? props.head: false
  const isLeftHeader: boolean = props.left? props.left: false
  
  const tableData: JSX.Element[][] = props.data

  const tableElem = tableData.map((r, idx) => {
    const row = r.map((d, idx2) => 
      (isLeftHeader && idx2 == 0) || (isHeader && idx == 0)
      ?<th key={idx2}>
        {d}
      </th>
      :<td key={idx2}>
        {d}
      </td>
    )

    return (
      <tr key={idx}>
        {row}
      </tr>
    )
  })

  return (
    <table>
      <tbody>
        {tableElem}
      </tbody>
    </table>)
}

export const PPron = (props: {text: string, children: React.ReactNode}) => {
  return <>
    <span className={styles.phunText}>{props.children}</span>
    <span className={styles.phunPron}>({getPhunPron(props.text)})</span>
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
    {props.children}
  </span>
}