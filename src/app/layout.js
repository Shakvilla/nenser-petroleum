// "use client"
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Outfit } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Nenser Petroleum',
  description: 'Bulk distributer of petroleum products ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
             <Navbar />
        {children}
        <Footer />
        </div>
     
        </body>
    </html>
  )
}
