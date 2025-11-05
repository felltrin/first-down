"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { VaultHeader } from "~/components/vault-header"
import { VaultGrid } from "~/components/vault-grid"
import { EditItemModal } from "~/components/edit-item-modal"
import { Button } from "~/components/ui/button"

export type VaultItem = {
  id: string
  type: "login" | "card" | "note" | "identity"
  name: string
  username?: string
  email?: string
  website?: string
  folder?: string
  favorite: boolean
  lastModified: string
}

const mockVaultItems: VaultItem[] = [
  {
    id: "1",
    type: "login",
    name: "GitHub",
    username: "john.doe",
    email: "john@example.com",
    website: "github.com",
    folder: "Work",
    favorite: true,
    lastModified: "2 days ago",
  },
  {
    id: "2",
    type: "login",
    name: "Gmail",
    username: "john.doe@gmail.com",
    email: "john.doe@gmail.com",
    website: "mail.google.com",
    folder: "Personal",
    favorite: true,
    lastModified: "5 days ago",
  },
  {
    id: "3",
    type: "card",
    name: "Chase Sapphire",
    username: "John Doe",
    folder: "Finance",
    favorite: false,
    lastModified: "1 week ago",
  },
  {
    id: "4",
    type: "login",
    name: "Netflix",
    username: "john.doe@gmail.com",
    email: "john.doe@gmail.com",
    website: "netflix.com",
    folder: "Entertainment",
    favorite: false,
    lastModified: "2 weeks ago",
  },
  {
    id: "5",
    type: "note",
    name: "WiFi Passwords",
    folder: "Personal",
    favorite: false,
    lastModified: "3 weeks ago",
  },
  {
    id: "6",
    type: "login",
    name: "AWS Console",
    username: "admin@company.com",
    email: "admin@company.com",
    website: "aws.amazon.com",
    folder: "Work",
    favorite: true,
    lastModified: "1 day ago",
  },
  {
    id: "7",
    type: "login",
    name: "Spotify",
    username: "johndoe",
    email: "john@example.com",
    website: "spotify.com",
    folder: "Entertainment",
    favorite: false,
    lastModified: "4 days ago",
  },
  {
    id: "8",
    type: "identity",
    name: "Passport Info",
    username: "John Doe",
    folder: "Personal",
    favorite: false,
    lastModified: "1 month ago",
  },
]

export default function VaultPage() {
  const [selectedItem, setSelectedItem] = useState<VaultItem | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFolder] = useState<string>("all")

  const filteredItems = mockVaultItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFolder =
      selectedFolder === "all" || (selectedFolder === "favorites" && item.favorite) || item.folder === selectedFolder

    return matchesSearch && matchesFolder
  })

  return (
    <div className="flex h-screen flex-col bg-background">
      <VaultHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <VaultGrid items={filteredItems} onItemClick={setSelectedItem} />

      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        onClick={() => console.log("[v0] Add new item clicked")}
      >
        <Plus className="h-6 w-6" />
      </Button>

      <EditItemModal
        item={selectedItem}
        open={!!selectedItem}
        onOpenChange={(open) => !open && setSelectedItem(null)}
      />
    </div>
  )
}
