"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BreadCrumb = () => {
    const paths = usePathname().substring(1).split("/")

    const roots = paths.map((a, idx) => {
        return paths.slice(0, idx + 1).join("/")
    })
  
    return (
      <div>
        <Link href="/">
          Top
        </Link>
        {paths.map((x, idx) => (
          <span key={idx}>
            {">"}
            <Link href={`/${roots[idx]}`}>
              {x}
            </Link>
          </span>
        ))}
      </div>
    )
  }