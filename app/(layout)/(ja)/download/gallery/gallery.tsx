'use client';

import Image from 'next/image';
import justifiedLayout from 'justified-layout';
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styles from './gallery.module.css';

const GAP = 2; // 画像間の余白
const TARGET_ROW_HEIGHT_TOLERANCE = 0.3; // 目標行高からの最大ズレ
const DEFAULT_RATIO = 1.5; // デフォルトのアスペクト比

export type GalleryProps = {
    images: string[];
    basePath?: string;
    targetRowHeight?: number;
};

function isGif(name: string) {
    return /\.gif(\?|$)/i.test(name);
}

function defaultTargetRowHeight(containerWidth: number) {
    if (containerWidth < 480) return 130;
    if (containerWidth < 900) return 130;
    return 150;
}

export default function Gallery({
    images,
    basePath = '',
    targetRowHeight,
}: GalleryProps) {
    // 降順に配置
    const ordered = useMemo(() => [...images].reverse(), [images]);

    // 画像の実アスペクト比
    const [ratios, setRatios] = useState<Record<string, number>>({});
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const pendingRatios = useRef<Record<string, number>>({});
    const flushScheduled = useRef(false);

    useLayoutEffect(() => {
        const node = containerRef.current;
        if (!node) return;
        setContainerWidth(node.getBoundingClientRect().width);
        const observer = new ResizeObserver((entries) => {
            const width = entries[0]?.contentRect.width;
            if (width) setContainerWidth(width);
        });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const handleLoad = useCallback((src: string, img: HTMLImageElement) => {
        if (!img.naturalWidth || !img.naturalHeight) return;
        pendingRatios.current[src] = img.naturalWidth / img.naturalHeight;
        if (!flushScheduled.current) {
            flushScheduled.current = true;
            requestAnimationFrame(() => { //取得したアスペクト比を集めておき、フレーム更新時にまとめてstateを更新する
                flushScheduled.current = false;
                const batch = pendingRatios.current;
                pendingRatios.current = {};
                setRatios((prev) => ({ ...prev, ...batch }));
            });
        }
    }, []);

    const effectiveRowHeight = targetRowHeight ?? defaultTargetRowHeight(containerWidth || 1200);

    // justified-layoutが、アスペクト比の配列から各画像の配置を生成
    const layout = useMemo(() => {
        if (!containerWidth || ordered.length === 0) return null;
        const aspectRatios = ordered.map((name) => ratios[`${basePath}${name}`] ?? DEFAULT_RATIO);
        return justifiedLayout(aspectRatios, {
            containerWidth,
            containerPadding: 0,
            boxSpacing: GAP,
            targetRowHeight: effectiveRowHeight,
            targetRowHeightTolerance: TARGET_ROW_HEIGHT_TOLERANCE,
            showWidows: true,
        });
    }, [ordered, ratios, containerWidth, basePath, effectiveRowHeight]);

    return (
        <div
            ref={containerRef}
            className={styles.grid}
            style={{ height: layout ? Math.ceil(layout.containerHeight) : undefined }}
        >
            {layout &&
                ordered.map((name, index) => {
                    const src = `${basePath}${name}`;
                    const box = layout.boxes[index];
                    if (!box) return null; //除外された場合

                    return (
                        <a
                            key={`${index}-${name}`}
                            href={src}
                            target='_blank'
                            className={styles.item}
                            style={{
                                top: box.top,
                                left: box.left,
                                width: box.width,
                                height: box.height,
                            }}
                            aria-label={name}
                        >
                            <Image
                                src={src}
                                alt={name}
                                fill
                                sizes={`${Math.ceil(box.width)}px`}
                                className={styles.image}
                                unoptimized={isGif(name)}
                                // 最初だけ優先的に読み込み
                                priority={index < 5}
                                onLoad={(e) => handleLoad(src, e.currentTarget)}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.filename}>{name}</span>
                            </div>
                        </a>
                    );
                })}
        </div>
    );
}