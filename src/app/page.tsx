import { SwipeCards } from "~/components/swipe-cards"
import { Header } from "~/components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <SwipeCards />
    </main>
  )
}
