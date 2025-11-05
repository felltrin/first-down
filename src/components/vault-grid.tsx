"use client"

import { Key, CreditCard, FileText, User, Star, Globe, Mail } from "lucide-react"
import { Card } from "~/components/ui/card"
import { cn } from "~/lib/utils"
import type { VaultItem } from "~/app/page"

type VaultGridProps = {
  items: VaultItem[]
  onItemClick: (item: VaultItem) => void
}

const typeIcons = {
  login: Key,
  card: CreditCard,
  note: FileText,
  identity: User,
}

const typeColors = {
  login: "text-primary",
  card: "text-accent",
  note: "text-muted-foreground",
  identity: "text-foreground",
}

export function VaultGrid({ items, onItemClick }: VaultGridProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-foreground">Vault Items</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {items.length} {items.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => {
          const Icon = typeIcons[item.type]
          return (
            <Card
              key={item.id}
              className="p-4 cursor-pointer hover:shadow-lg transition-all hover:border-primary/50"
              onClick={() => onItemClick(item)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={cn("p-2 rounded-lg bg-muted", typeColors[item.type])}>
                  <Icon className="w-5 h-5" />
                </div>
                {item.favorite && <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />}
              </div>

              <h3 className="font-semibold text-card-foreground mb-2 text-balance">{item.name}</h3>

              <div className="space-y-1 mb-3">
                {item.username && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span className="truncate">{item.username}</span>
                  </div>
                )}
                {item.email && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-3 h-3" />
                    <span className="truncate">{item.email}</span>
                  </div>
                )}
                {item.website && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-3 h-3" />
                    <span className="truncate">{item.website}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                <span>{item.folder}</span>
                <span>{item.lastModified}</span>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
