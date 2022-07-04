import Image from "next/image"
import { useState } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={image.href} className="group" target="_blank" rel="noopener noreferrer">
      <div className="relative overflow-hidden rounded-lg h-64">
        <Image
          alt={`Images ${image.id}`}
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-80',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </a>
  )
}