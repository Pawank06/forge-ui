import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forge/ui',
  description: 'Documentation for our component library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}