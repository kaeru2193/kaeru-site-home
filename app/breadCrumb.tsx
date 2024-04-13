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

          return (
            <span className={style.linkContainer} key={idx}>
              <FaAngleRight className={style.rightArrow}/>
              <Link className={style.link} href={`/${roots[idx]}`}>{title? title.title: d}</Link>
            </span>
          )
        })}
      </div>
    )
  }