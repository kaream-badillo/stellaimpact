'use client'

import { useState } from 'react'
import { useWalletContext } from '../providers/WalletProvider'

export function Header() {
  const { address, userType, isConnected, getShortAddress, disconnectWallet } = useWalletContext()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const mockNotifications = [
    { id: 1, message: 'Nuevo badge obtenido: Ayudé en evento', time: '2h' },
    { id: 2, message: 'Validación exitosa de María García', time: '3h' },
  ]

  return (
    <header className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🌟</span>
          <h1 className="text-xl font-bold text-gray-900">StellaNova</h1>
        </div>
        
        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Wallet Info */}
          {isConnected && address && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{userType}</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-mono">
                {getShortAddress(address)}
              </span>
            </div>
          )}
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-xl">🔔</span>
              {mockNotifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {mockNotifications.length}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                <div className="p-4 border-b">
                  <h3 className="font-semibold text-gray-900">Notificaciones</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {mockNotifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b hover:bg-gray-50">
                      <p className="text-sm text-gray-700">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* User Menu */}
          {isConnected && (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-nova-500 to-stellar-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {userType?.charAt(0) || 'U'}
                </div>
                <span className="text-sm">▼</span>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-4 border-b">
                    <p className="font-semibold text-gray-900">{userType}</p>
                    <p className="text-sm text-gray-600">{getShortAddress(address!)}</p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={disconnectWallet}
                      className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
                    >
                      Desconectar Wallet
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 