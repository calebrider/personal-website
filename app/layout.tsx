import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Rider',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth min-h-screen">
      <span className='flex justify-center px-10 bg-red-600 font-bold text-white w-full'>
        Note: This website is a work in progress. Some information/links may be missing and/or incomplete :)
      </span>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
