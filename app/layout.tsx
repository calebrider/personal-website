import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col max-w-screen min-h-screen">
        <span className='flex justify-center px-10 bg-red-600 font-bold text-white w-full font-sans'>
          Note: This website is a work in progress. Some features may be incomplete.
        </span>
        {children}
      </body>
    </html>
  )
}
