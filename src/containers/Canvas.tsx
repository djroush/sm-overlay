import React, { useEffect, useRef } from "react"

export type CanvasProps = {
    id: string,
    data: string|null
}

export default function Canvas(props: CanvasProps) {
    const { id, data } = props
    const ref = useRef<HTMLCanvasElement>(null)

    const drawLayer = (data: string | null) => {
        const canvas: HTMLCanvasElement | null = ref.current
        const context = canvas?.getContext('2d')
        
        if (context) {
            if (data) {
                const img = new Image;
                img.onload = () => {
                    context.drawImage(img, 0, 0)
                }
                img.src = data;
            } else {
                context.clearRect(0, 0, 1280, 720);
            }
        }
    }

    useEffect(() => drawLayer(data), [])

    return <canvas id={id} ref={ref} width={1280} height={720} />
}