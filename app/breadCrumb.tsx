"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./breadCrumb.module.css"

import pageMap from '@/pageMap.json'

import { FaHouseChimney, FaAngleRight } from "react-icons/fa6";

export const BreadCrumb = () => {
    const paths = usePathname().slice(1).split("/")

    const roots = paths.map((a, idx) => {
        return paths.slice(0, idx + 1).join("/")
    })
  
    return (
      <div className={style.breadCrumb}>
        <Link className={style.homeLink} href="/">
          <span className={style.home}><FaHouseChimney/></span>
        </Link>
        {paths.map((d, idx) => {
          const title = pageMap.filter(p =>
            p.route == roots[idx]
          )[0]

          const link = idx != roots.length - 1
          const linkTitle = title? title.title: d //登録されていればそれを、されていなければURLから取得して表示

          return (
            <span className={style.linkContainer} key={idx}>
              <FaAngleRight className={style.rightArrow}/>
              {link
                ? <Link className={style.link} href={`/${roots[idx]}`}>{linkTitle}</Link>
                : <span className={style.presentPage}>{linkTitle}</span>
              }
            </span>
          )
        })}
      </div>
    )
  }