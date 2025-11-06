import { MessageCircle, User } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
      <button className="p-2 hover:bg-secondary rounded-full transition-colors">
        <User className="w-6 h-6 text-muted-foreground" />
      </button>
      <div className="w-8" />
      <button className="p-2 hover:bg-secondary rounded-full transition-colors">
        <MessageCircle className="w-6 h-6 text-muted-foreground" />
      </button>
    </header>
  )
}
