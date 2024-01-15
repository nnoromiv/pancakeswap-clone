"use client"
import { Hero, NavBar } from '../../components'

export default function Home() {

  return (
    <main  className="min-h-screen bg-primary dark:bg-primary-dark-mode overflow-x-hidden" >
      <NavBar />
      <Hero />
    </main>
  )
}
