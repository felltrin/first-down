"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Eye, EyeOff, Copy, Star, Trash2 } from "lucide-react"
import type { VaultItem } from "~/app/page"
import { cn } from "~/lib/utils"

type EditItemModalProps = {
  item: VaultItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditItemModal({ item, open, onOpenChange }: EditItemModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isFavorite, setIsFavorite] = useState(item?.favorite ?? false)

  if (!item) return null

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">{item.name}</DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
                <Star
                  className={cn("w-5 h-5", isFavorite ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground")}
                />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="w-5 h-5 text-destructive" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {item.type === "login" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={item.name} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="flex gap-2">
                  <Input id="website" defaultValue={item.website} className="flex-1" />
                  <Button variant="outline" size="icon" onClick={() => handleCopy(item.website || "")}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="flex gap-2">
                  <Input id="username" defaultValue={item.username} className="flex-1" />
                  <Button variant="outline" size="icon" onClick={() => handleCopy(item.username || "")}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex gap-2">
                  <Input id="email" type="email" defaultValue={item.email} className="flex-1" />
                  <Button variant="outline" size="icon" onClick={() => handleCopy(item.email || "")}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="flex gap-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    defaultValue="••••••••••••"
                    className="flex-1 font-mono"
                  />
                  <Button variant="outline" size="icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleCopy("password123")}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}

          {item.type === "card" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input id="cardName" defaultValue={item.username} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="flex gap-2">
                  <Input id="cardNumber" defaultValue="•••• •••• •••• 4242" className="flex-1 font-mono" />
                  <Button variant="outline" size="icon" onClick={() => handleCopy("4242424242424242")}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" defaultValue="12/25" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" type="password" defaultValue="•••" />
                </div>
              </div>
            </>
          )}

          {item.type === "note" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="noteTitle">Title</Label>
                <Input id="noteTitle" defaultValue={item.name} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="noteContent">Content</Label>
                <Textarea
                  id="noteContent"
                  rows={8}
                  defaultValue="Home WiFi: MyNetwork123&#10;Password: SecurePass456&#10;Guest WiFi: GuestNetwork&#10;Password: Guest789"
                />
              </div>
            </>
          )}

          {item.type === "identity" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue={item.username} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passportNumber">Passport Number</Label>
                <Input id="passportNumber" defaultValue="X12345678" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input id="nationality" defaultValue="United States" />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="folder">Folder</Label>
            <Input id="folder" defaultValue={item.folder} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" rows={3} placeholder="Add private notes..." />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
