"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Info } from "lucide-react"
import type { Profile } from "~/lib/mock-data"

interface ProfileCardProps {
  profile: Profile
  swipeDirection: "left" | "right" | null
  onSwipe: (direction: "left" | "right") => void
  zIndex?: number
  scale?: number
  yOffset?: number
  isInteractive?: boolean
}

export function ProfileCard({
  profile,
  swipeDirection,
  onSwipe,
  zIndex = 0,
  scale = 1,
  yOffset = 0,
  isInteractive = true,
}: ProfileCardProps) {
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (swipeDirection) {
      setDragOffset({ x: swipeDirection === "right" ? 1000 : -1000, y: 0 })
    }
  }, [swipeDirection])

  const handleDragStart = (clientX: number, clientY: number) => {
    if (!isInteractive) return
    setDragStart({ x: clientX, y: clientY })
    setIsDragging(true)
  }

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!dragStart || !isInteractive) return
    const deltaX = clientX - dragStart.x
    const deltaY = clientY - dragStart.y
    setDragOffset({ x: deltaX, y: deltaY })
  }

  const handleDragEnd = () => {
    if (!dragStart || !isInteractive) return

    const threshold = 100
    if (Math.abs(dragOffset.x) > threshold) {
      onSwipe(dragOffset.x > 0 ? "right" : "left")
    } else {
      setDragOffset({ x: 0, y: 0 })
    }

    setDragStart(null)
    setIsDragging(false)
  }

  const rotation = isDragging ? dragOffset.x / 20 : 0
  const opacity = swipeDirection ? 0 : 1

  return (
    <div
      ref={cardRef}
      className="absolute inset-0 touch-none"
      style={{
        transform: `translate(${dragOffset.x}px, ${dragOffset.y + yOffset}px) rotate(${rotation}deg) scale(${scale})`,
        transition: isDragging ? "none" : "all 0.3s ease-out",
        opacity,
        zIndex,
        cursor: isInteractive ? (isDragging ? "grabbing" : "grab") : "default",
        pointerEvents: isInteractive ? "auto" : "none",
      }}
      onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
      onMouseMove={(e) => isDragging && handleDragMove(e.clientX, e.clientY)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => isDragging && handleDragMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleDragEnd}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-card">
        <img src={profile.image || "/placeholder.svg"} alt={profile.name} className="w-full h-full object-cover" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

        {/* Like/Nope indicators */}
        {isDragging && isInteractive && (
          <>
            <div
              className="absolute top-8 right-8 text-6xl font-bold text-primary border-4 border-primary rounded-2xl px-6 py-3 rotate-[20deg]"
              style={{ opacity: Math.min(dragOffset.x / 100, 1) }}
            >
              LIKE
            </div>
            <div
              className="absolute top-8 left-8 text-6xl font-bold text-destructive border-4 border-destructive rounded-2xl px-6 py-3 rotate-[-20deg]"
              style={{ opacity: Math.min(-dragOffset.x / 100, 1) }}
            >
              NOPE
            </div>
          </>
        )}

        {/* Profile info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-end justify-between mb-2">
            <div>
              <h2 className="text-4xl font-bold text-balance">
                {profile.name}, {profile.age}
              </h2>
              <div className="flex items-center gap-1 mt-1 text-white/90">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{profile.distance} miles away</span>
              </div>
            </div>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Info className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm text-white/90 line-clamp-2 text-pretty">{profile.bio}</p>
        </div>
      </div>
    </div>
  )
}
