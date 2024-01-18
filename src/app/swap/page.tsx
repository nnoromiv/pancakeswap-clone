import React from 'react'
import { Footer, Nav, TradeNav } from '../../../components'

const page = () => {

  return (
    <main  className="min-h-screen bg-primary dark:bg-primary-dark-mode overflow-x-hidden" >
        <Nav />
        <TradeNav caller='/swap'/>
        <Footer />
    </main>
  )
}

export default page