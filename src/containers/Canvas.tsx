import React, { useEffect, useRef } from "react"

export type CanvasProps = {
    id: string,
    data: string|null
    left?: number,
    top?: number,
    width?: number,
    height?:number
}

export default function Canvas(props: CanvasProps) {
    const { id, data} = props
    const left = props.left ?? 0
    const top = props.top ?? 0
    const width = props.width ?? 1280
    const height = props.height ?? 720

    const ref = useRef<HTMLCanvasElement>(null)

    const drawLayer = (data: string | null) => {
        const canvas: HTMLCanvasElement | null = ref.current
        const context = canvas?.getContext('2d')
        
        if (context) {
            if (data) {
                const img = new Image;
                img.onload = () => context.drawImage(img, left, top)
                img.src = data;
            } else {
                context.clearRect(0, 0, width, height);
            }
        }
    }

    useEffect(() => drawLayer(data), [])

    return <canvas id={id} ref={ref} width={width} height={height} />
}