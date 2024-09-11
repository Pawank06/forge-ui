import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import Navigation from '@/components/navigation'

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
        <>
            <main className="lg:w-[1200px] w-full mx-auto px-4 py-8">
                {children}
            </main>
        </>

    )
}