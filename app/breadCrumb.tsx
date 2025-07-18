"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./breadCrumb.module.css"

import pageMap from '@/pageMap.json'

import { FaHouseChimney, FaAngleRight } from "react-icons/fa6";

export const BreadCrumb = (props: {lang: string, paths: string[]}) => {
    const paths = props.paths.filter(p => p)

    const roots = paths.map((a, idx) => {
        return paths.slice(0, idx + 1).join("/")
    })
  
    return (
      <div className={style.breadCrumb}>
        <span className={style.home}>
          <Link className={style.homeLink} href={props.lang == "ja" ?"/" :`/${props.lang}`}>
            <FaHouseChimney/>
          </Link>
        </span>
        {paths.map((d, idx) => {
          const title = pageMap.filter(p =>
            p.route == roots[idx]
          )[0]

          const link = idx != roots.length - 1
          const linkTitle = title? title.title: d //登録されていればそれを、されていなければURLから取得して表示

          return (
            <>
              <span className={style.rightArrowContainer}><FaAngleRight className={style.rightArrow}/></span>
              <span className={style.linkContainer} key={idx}>
                
                {link
                  ? <Link className={style.link} href={`/${roots[idx]}`}>{decodeURI(linkTitle!)}</Link>
                  : <span className={style.presentPage}>{decodeURI(linkTitle!)}</span>
                }
              </span>
            </>
          )
        })}
      </div>
    )
  }