'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useWalletContext } from '../src/components/providers/WalletProvider'

export default function Home() {
  const router = useRouter()
  const { 
    address, 
    userType, 
    isConnected, 
    isLoading, 
    error, 
    connectWallet 
  } = useWalletContext()

  // Redirect to dashboard if connected
  useEffect(() => {
    if (isConnected && !isLoading) {
      router.push('/dashboard')
    }
  }, [isConnected, isLoading, router])

  const handleConnectWallet = async () => {
    await connectWallet()
  }

  // Show loading while checking connection
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Conectando wallet...</p>
        </div>
      </div>
    )
  }

  // If connected, show redirect message
  if (isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p className="text-lg text-gray-600">Redirigiendo al dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            🌟 StellaNova
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">
            "Haz visible lo invisible"
          </p>
          
          <div className="card max-w-2xl mx-auto mb-12">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              "Tu esfuerzo merece ser contado, aunque no tenga nota"
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={handleConnectWallet}
                disabled={isLoading}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '⏳ Conectando...' : '🔗 Conectar Wallet con Freighter'}
              </button>
              
              {error && (
                <div className="text-red-600 bg-red-50 p-4 rounded-lg">
                  ❌ {error}
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold">Badges</h3>
              <p className="text-sm text-gray-600">Recompensas visibles</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold">Reputación</h3>
              <p className="text-sm text-gray-600">Progreso medible</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-semibold">QR</h3>
              <p className="text-sm text-gray-600">Validación fácil</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📄</div>
              <h3 className="font-semibold">PDF</h3>
              <p className="text-sm text-gray-600">Exportar logros</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-xl text-gray-700 font-medium">
              "Stellar reconoce lo que nadie ve"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 