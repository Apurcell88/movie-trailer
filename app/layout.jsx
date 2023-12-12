import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ subsets: ['latin'] })

// components
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Zuru',
  description: 'Browse movies, get their ratings and trailers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
