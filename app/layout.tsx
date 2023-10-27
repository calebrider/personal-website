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
        {children}
      </body>
    </html>
  )
}
