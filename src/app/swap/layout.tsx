import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import { Provider } from '..'

export const metadata: Metadata = {
  title: 'Pancake Swap',
  description: 'A Pancake Swap Clone',
}

const kanit = Kanit({subsets : ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
  return (
    <main className={kanit.className}>
      <Provider>
        {children}
      </Provider>
    </main>
  )
}
