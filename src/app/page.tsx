"use client"
import { Earn, Hero, Nav, Prize, Trade, User } from '../../components'

export default function Home() {

  return (
    <main  className="min-h-screen bg-primary dark:bg-primary-dark-mode overflow-x-hidden" >
      <Nav />
      <Hero />
      <User />
      <Trade />
      <Earn />
      <Prize />
    </main>
  )
}
