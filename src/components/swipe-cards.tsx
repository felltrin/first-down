"use client"

import { useState } from "react"
import { ProfileCard } from "~/components/profile-card"
import { ActionButtons } from "~/components/action-buttons"
import { mockProfiles } from "~/lib/mock-data"

export function SwipeCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null)

  const handleSwipe = (direction: "left" | "right") => {
    setSwipeDirection(direction)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockProfiles.length)
      setSwipeDirection(null)
    }, 300)
  }

  const visibleProfiles = mockProfiles.slice(currentIndex, currentIndex + 3)

  if (visibleProfiles.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">No more profiles</p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 gap-6 max-w-md mx-auto w-full">
      <div className="relative w-full aspect-[3/4]">
        {visibleProfiles.reverse().map((profile, index) => {
          const reverseIndex = visibleProfiles.length - 1 - index
          const isTopCard = reverseIndex === 0
          const zIndex = visibleProfiles.length - 1 - reverseIndex

          return (
            <ProfileCard
              key={`${profile.id}-${currentIndex + reverseIndex}`}
              profile={profile}
              swipeDirection={isTopCard ? swipeDirection : null}
              onSwipe={isTopCard ? handleSwipe : () => {}}
              zIndex={zIndex}
              scale={1 - reverseIndex * 0.05}
              yOffset={reverseIndex * 10}
              isInteractive={isTopCard}
            />
          )
        })}
      </div>
      <ActionButtons onLike={() => handleSwipe("right")} onDislike={() => handleSwipe("left")} />
    </div>
  )
}
