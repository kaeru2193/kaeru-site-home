"use client"

import { useState, useRef, useEffect, useCallback } from "react";
import { Input, OptionRow, Select, BreakLine } from "../components";
import style from "./page.module.css"

const Page = () => {
    const [params, setParams] = useState<{[key: string]: any}>({
        canvasLength: 1000,
        direction: "hori",
        align: "left",
        text: "之為栄言。",
        fontFamily: "Phun-Sans",
        fontSize: 60,
        margin: 20,
        lineHeight: 1.2,
        letterSpacing: 0,
        background: "ffffff",
        color: "000000"
    })

    const setParam = (key: string) => { //設定用の関数を返す関数
        return (value: any) => {
            const paramsCopy: any = {}
            Object.assign(paramsCopy, params) //コピーする

            paramsCopy[key] = value
            setParams(paramsCopy)
        }
    }

    const [fontLoaded, setFontLoaded] = useState(0);
    const isVert = params.direction == "vert" //縦書きか否か
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const DownloadRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => { //フォントの読み込みが終わったら再描画させる
        document.fonts.onloadingdone = () => {
            setFontLoaded(fontLoaded + 1);
        }
    }, [params]);
    
    useEffect(() => {
        if (!canvasRef.current) {return}

        let canvas = canvasRef.current
        let ctx = canvas.getContext("2d")
        if (!ctx) {return}

        const lineSize = params.fontSize * params.lineHeight

        ctx.font = `${params.fontSize}px ${params.fontFamily}`
        ctx.letterSpacing = `${params.letterSpacing}px`
        const lines = wordWrap(
            ctx,
            params.text,
            params.canvasLength - 2 * params.margin //行の長さから余白分を引く
        )
        const minLength = //最低限必要な行方向の幅
            2 * params.margin + //余白
            (lines.length - 1) * lineSize + //最後を除く行の高さ
            params.fontSize //最後の行（行間なし）

        if (isVert) {
            canvas.width = minLength //幅を最低限にする
        } else {
            canvas.height = minLength //高さを最低限にする
        }

        ctx.fillStyle = "#" + params.background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height) //背景を全部塗る

        if (isVert) { //縦書きならテキスト描画前にキャンバスを回転させる
            console.log("vert")
            ctx.save()
            ctx.translate(canvas.width, 0)
            ctx.rotate(Math.PI / 2) //90°
        }

        ctx.fillStyle = "#" + params.color
        ctx.font = `${params.fontSize}px ${params.fontFamily}`
        ctx.letterSpacing = `${params.letterSpacing}px`
        ctx.textBaseline = "top"
        ctx.textAlign = params.align
        
        for (let i = 0; i < lines.length; i++) {
            let xOffset = 0
            switch (params.align) { //揃え方によって基準点が変わる
                case "left":
                    xOffset = params.margin
                    break
                case "right":
                    xOffset = params.canvasLength - params.margin
                    break
                case "center":
                    xOffset = params.canvasLength / 2
                    break
            }

            ctx.fillText(
                lines[i],
                xOffset,
                params.margin + i * lineSize
            )
        }

        ctx.restore()
    }, [fontLoaded, params])

    return (
        <>
            <h1>雰字画像メーカー</h1>
            <p>雰字フォントを用いて簡易的に雰字の画像を作成します。</p>

            <BreakLine text="基本設定"/>
            <Input var={params.canvasLength} set={setParam("canvasLength")} default={params.canvasLength} label="行の長さ" number/>
            <OptionRow label="フォント">
                <Select var={params.fontFamily} set={setParam("fontFamily")} data={{
                    "Phun-Sans": "PhunSans（丸ゴシック）",
                    "PhunDot": "PhunDot（ドット）※縦書き非対応",
                    "PhunWrite": "PhunWrite（手書き文字）",
                }}/>
            </OptionRow>
            <Input var={params.fontSize} set={setParam("fontSize")} default={params.fontSize} label="文字サイズ" number/>
            <Input var={params.margin} set={setParam("margin")} default={params.margin} label="余白" number/>

            <OptionRow label="行揃え">
                <Select var={params.align} set={setParam("align")} data={{
                    "left": "左揃え",
                    "center": "中央揃え",
                    "right": "右揃え",
                }}/>
            </OptionRow>

            <OptionRow label="書記方向">
                <Select var={params.direction} set={setParam("direction")} data={{
                    "hori": "横書き",
                    "vert": "縦書き",
                }}/>
            </OptionRow>
            <Input var={params.text} set={setParam("text")} default={params.text} label="テキスト" textarea/>

            <BreakLine text="追加設定"/>

            <Input var={params.lineHeight} set={setParam("lineHeight")} default={params.lineHeight} label="行の高さ" number/>
            <Input var={params.letterSpacing} set={setParam("letterSpacing")} default={params.letterSpacing} label="文字間隔" number/>
            <Input var={params.color} set={setParam("color")} default={params.color} label="文字色"/>
            <Input var={params.background} set={setParam("background")} default={params.background} label="背景色"/>
            

            <BreakLine text="出力"/>
            <div className={style.canvasBox}>
                <canvas
                    style={isVert
                        ?{height: params.canvasLength / 2, writingMode: "vertical-rl"}
                        :{width: params.canvasLength / 2, writingMode: "horizontal-tb"}
                    }
                    className={style.canvas}
                    ref={canvasRef}
                    width={isVert ?0 :params.canvasLength}
                    height={isVert ?params.canvasLength :0}
                />
            </div>
            
            <a className={style.downloadButton} onClick={() => {
                DownloadRef.current?.click()
            }}>画像をダウンロード</a>
            <a href={canvasRef.current?.toDataURL("image/png")} download="funqo.png" ref={DownloadRef}></a>
        </>
    )
}

const wordWrap = (ctx: CanvasRenderingContext2D, text: string, width: number) => {
    const paras = text.split("\n")
    const wrapped = paras.map((p) => {
        let lines = []
        let currentLine = ""
        for (let i = 0; i < p.length;) {
            currentLine += p[i]
            i++

            if (ctx.measureText(currentLine).width > width) {
                if (currentLine.length <= 1) { //一文字も入らないときの無限ループ防止
                    currentLine = ""
                    break
                }

                lines.push(currentLine.slice(0, -1)) //最後の一字（超えた分）以外
                currentLine = currentLine.slice(-1) //最後の一字
            }
        }
        lines.push(currentLine) //最後の行

        return lines
    })

    return wrapped.flat()
}

export default Page