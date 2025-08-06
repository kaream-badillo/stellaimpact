'use client'

import { useState } from 'react'
import { useWalletContext } from '../../src/components/providers/WalletProvider'
import Link from 'next/link'

export default function SettingsPage() {
  const { address, userType, isConnected, disconnectWallet } = useWalletContext()
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    badges: true,
    validations: false
  })
  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showWallet: false,
    showUniversity: true
  })

  const handleDisconnect = () => {
    if (confirm('¿Estás seguro de que quieres desconectar tu wallet?')) {
      disconnectWallet()
    }
  }

  if (!isConnected) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Conecta tu wallet para ver la configuración
        </h1>
        <p className="text-gray-600">
          Necesitas conectar tu wallet de Freighter para acceder a la configuración
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">⚙️ Configuración</h1>
        <p className="text-gray-600">Gestiona tus preferencias y configuración de cuenta</p>
      </div>

      {/* Account Information */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">👤 Información de Cuenta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600">Tipo de Usuario</p>
            <p className="font-medium">{userType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Wallet Address</p>
            <p className="font-mono text-sm">{address}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Estado</p>
            <p className="font-medium text-green-600">✅ Conectado</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Última Actividad</p>
            <p className="font-medium">Hace 2 horas</p>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">🔔 Notificaciones</h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">Notificaciones por Email</p>
              <p className="text-sm text-gray-600">Recibe actualizaciones por correo electrónico</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
              className="w-5 h-5 text-nova-500 focus:ring-nova-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">Notificaciones Push</p>
              <p className="text-sm text-gray-600">Recibe notificaciones en tiempo real</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
              className="w-5 h-5 text-nova-500 focus:ring-nova-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">Nuevos Badges</p>
              <p className="text-sm text-gray-600">Notificaciones cuando ganes nuevos badges</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.badges}
              onChange={(e) => setNotifications(prev => ({ ...prev, badges: e.target.checked }))}
              className="w-5 h-5 text-nova-500 focus:ring-nova-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">Validaciones (Embajadores)</p>
              <p className="text-sm text-gray-600">Notificaciones de nuevas validaciones</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.validations}
              onChange={(e) => setNotifications(prev => ({ ...prev, validations: e.target.checked }))}
              className="w-5 h-5 text-nova-500 focus:ring-nova-500"
            />
          </label>
        </div>
      </div>

      {/* Privacy */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">🔒 Privacidad</h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">Perfil Público</p>
              <p className="text-sm text-gray-600">Permite que otros vean tu perfil</p>
            </div>
            <input
              type="checkbox"
              checked={privacy.profilePublic}
              onChange={(e) => setPrivacy(prev => ({ ...prev, profilePublic: e.target.checked }))}
              className="w-5 h-5 text-nova-500 focus:ring-nova-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">Mostrar Wallet</p>
              <p className="text-sm text-gray-600">Muestra tu dirección de wallet públicamente</p>
            </div>
            <input
              type="checkbox"
              checked={privacy.showWallet}
              onChange={(e) => setPrivacy(prev => ({ ...prev, showWallet: e.target.checked }))}
              className="w-5 h-5 text-nova-500 focus:ring-nova-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-medium">Mostrar Universidad</p>
              <p className="text-sm text-gray-600">Muestra tu universidad en el perfil</p>
            </div>
            <input
              type="checkbox"
              checked={privacy.showUniversity}
              onChange={(e) => setPrivacy(prev => ({ ...prev, showUniversity: e.target.checked }))}
              className="w-5 h-5 text-nova-500 focus:ring-nova-500"
            />
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">🚀 Acciones</h2>
        <div className="space-y-4">
          <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">📄 Exportar Datos</p>
                <p className="text-sm text-gray-600">Descarga todos tus datos en formato JSON</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </button>
          
          <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">🗑️ Eliminar Cuenta</p>
                <p className="text-sm text-gray-600">Elimina permanentemente tu cuenta y datos</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </button>
          
          <button 
            onClick={handleDisconnect}
            className="w-full text-left p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-red-600">🔌 Desconectar Wallet</p>
                <p className="text-sm text-red-500">Desconecta tu wallet de Freighter</p>
              </div>
              <span className="text-red-400">→</span>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/dashboard" className="btn-primary">
          📊 Dashboard
        </Link>
        <Link href="/profile" className="btn-secondary">
          👤 Mi Perfil
        </Link>
      </div>
    </div>
  )
} 