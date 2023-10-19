// import './globals.css'
// import { Inter } from 'next/font/google'

import Footer from "@/app/components/Shared/Footer"
import Header from "@/app/components/Shared/Header"

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RO',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>
      <Header/>
      {children}
      <Footer/>  
      </div>
      
    </html>
  )
}