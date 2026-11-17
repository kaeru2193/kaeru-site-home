"use client"

import { useEffect, useState } from "react"

export const SetScroll = () => {
    useEffect(()=> {
        window.addEventListener('wheel', (e) => {
            scrollBy({left: -e.deltaY * 1.2, top: 0, behavior: "instant"})
        }, {passive: true})
    }, [])
    return <></>
}