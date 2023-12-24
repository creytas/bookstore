import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@smastrom/react-rating/style.css'
import Header from "@/components/navbar/header";

const inter = Inter({ subsets: ['latin'] })
config.autoAddCss = false

export const metadata = {
  title: 'Bookstore App',
  description: 'Welcome to your online Bookstore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
      {/* <Header/> */}
      {children}
      </body>
    </html>
  )
}
