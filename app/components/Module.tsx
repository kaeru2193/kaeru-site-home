import Image from "next/image";

import styles from "./Image.module.css"

export const MdxImage = (props: any) => {
  return (
    <img src={props.src} width={props.width}/>
  )
}

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