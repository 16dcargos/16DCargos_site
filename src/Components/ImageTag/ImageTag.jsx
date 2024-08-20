import React from 'react'

export default function ImageTag({ width, height, src, alt, className }) {
    return (
        <img src={src} alt={alt} className={className} loading='lazy' width={width} height={height} />
    )
}
