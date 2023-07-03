import { Providers } from '../components/providers'
import TopBar from '../components/top-bar'
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Mercurius',
  description: 'Product catalog and pricing portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopBar />
        {children}
        </Providers>
        </body>
    </html>
  )
}
