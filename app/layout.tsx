import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/styles/globals.css'
import { Header } from '../src/components/layout/Header'
import { Sidebar } from '../src/components/layout/Sidebar'
import { WalletProvider } from '../src/components/providers/WalletProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StellaNova - Reputación Simbólica para Universidades Web3',
  description: 'Haz visible lo invisible en tu universidad. Tu esfuerzo merece ser contado, aunque no tenga nota.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <WalletProvider>
          <div className="flex h-screen bg-gray-50">
            {/* Sidebar - always visible for testing */}
            <Sidebar />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
              <Header />
              <main className="flex-1 p-6 overflow-auto bg-gray-50">
                {children}
              </main>
            </div>
          </div>
        </WalletProvider>
      </body>
    </html>
  )
} 