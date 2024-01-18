import React from 'react'
import { Footer, Nav, TradeNav } from '../../../components'

const page = () => {

  return (
    <main  className="min-h-screen bg-hero-gradient dark:bg-hero-gradient-dark overflow-x-hidden" >
        <Nav />
        <TradeNav caller='/swap'/>
        <Footer />
    </main>
  )
}

export default page