'use client'

import { useState, useEffect } from 'react'

export type UserType = 'Estudiante' | 'Embajador' | 'Organizador' | null

interface WalletState {
  address: string | null
  userType: UserType
  isConnected: boolean
  isLoading: boolean
  error: string | null
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    userType: null,
    isConnected: false,
    isLoading: false,
    error: null
  })

  const connectWallet = async () => {
    setWalletState(prev => ({ ...prev, isLoading: true, error: null }))
    
    try {
      // Simulate Freighter connection
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40)
      const mockUserType: UserType = Math.random() > 0.7 ? 'Embajador' : 'Estudiante'
      
      setWalletState({
        address: mockAddress,
        userType: mockUserType,
        isConnected: true,
        isLoading: false,
        error: null
      })
    } catch (error) {
      setWalletState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Error al conectar wallet'
      }))
    }
  }

  const disconnectWallet = () => {
    setWalletState({
      address: null,
      userType: null,
      isConnected: false,
      isLoading: false,
      error: null
    })
  }

  const getShortAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
    getShortAddress
  }
} 