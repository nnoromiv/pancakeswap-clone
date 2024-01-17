"use client"
import { About, Earn, Footer, Hero, Nav, Prize, ScrollUp, TopFooter, Trade, User } from '../../components'

export default function Home() {

  return (
    <main  className="min-h-screen bg-primary dark:bg-primary-dark-mode overflow-x-hidden" >
      <Nav />
      <Hero />
      <ScrollUp />
      <User />
      <Trade />
      <Earn />
      <Prize />
      <About />
      <TopFooter />
      <Footer />
    </main>
  )
}
