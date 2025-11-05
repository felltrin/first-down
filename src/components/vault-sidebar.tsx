"use client"

import { Key, Star, Folder, Plus } from "lucide-react"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"

type VaultSidebarProps = {
  selectedFolder: string
  onFolderSelect: (folder: string) => void
}

export function VaultSidebar({ selectedFolder, onFolderSelect }: VaultSidebarProps) {
  const categories = [
    { id: "all", label: "All Items", icon: Key, count: 8 },
    { id: "favorites", label: "Favorites", icon: Star, count: 3 },
  ]

  const folders = [
    { id: "Work", label: "Work", count: 2 },
    { id: "Personal", label: "Personal", count: 3 },
    { id: "Finance", label: "Finance", count: 1 },
    { id: "Entertainment", label: "Entertainment", count: 2 },
  ]

  return (
    <div className="w-64 border-r border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Key className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg text-card-foreground">SecureVault</span>
        </div>

        <Button className="w-full" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div className="space-y-1 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onFolderSelect(category.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                selectedFolder === category.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <category.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{category.label}</span>
              <span className="text-xs">{category.count}</span>
            </button>
          ))}
        </div>

        <div className="mb-2 px-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Folders</h3>
        </div>

        <div className="space-y-1">
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => onFolderSelect(folder.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                selectedFolder === folder.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Folder className="w-4 h-4" />
              <span className="flex-1 text-left">{folder.label}</span>
              <span className="text-xs">{folder.count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
