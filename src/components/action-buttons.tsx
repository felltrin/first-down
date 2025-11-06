"use client"

import { X, Heart, Star, RotateCcw } from "lucide-react"
import { Button } from "~/components/ui/button"

interface ActionButtonsProps {
  onLike: () => void
  onDislike: () => void
}

export function ActionButtons({ onLike, onDislike }: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        size="icon"
        variant="outline"
        className="w-14 h-14 rounded-full border-2 hover:scale-110 transition-transform bg-transparent"
        onClick={() => {}}
      >
        <RotateCcw className="w-6 h-6 text-amber-500" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="w-16 h-16 rounded-full border-2 hover:scale-110 transition-transform bg-transparent"
        onClick={onDislike}
      >
        <X className="w-8 h-8 text-destructive" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="w-14 h-14 rounded-full border-2 hover:scale-110 transition-transform bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
        onClick={() => {}}
      >
        <Star className="w-6 h-6 fill-current" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="w-16 h-16 rounded-full border-2 hover:scale-110 transition-transform bg-transparent"
        onClick={onLike}
      >
        <Heart className="w-8 h-8 text-primary" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="w-14 h-14 rounded-full border-2 hover:scale-110 transition-transform bg-transparent"
        onClick={() => {}}
      >
        <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.31C16.8 3.63 14.3 2 11.6 2 9.03 2 6.77 3.47 5.88 5.75c-.34.89-.5 1.85-.5 2.75C5.38 12.33 9.41 17.15 12 19.47c2.59-2.32 6.62-7.14 6.62-10.97 0-.9-.16-1.86-.5-2.75-.11-.28-.23-.56-.37-.83-.14-.27-.29-.53-.46-.78z" />
        </svg>
      </Button>
    </div>
  )
}
