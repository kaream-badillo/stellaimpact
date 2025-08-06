'use client'

import { useState } from 'react'
import { QRScanner } from '../../src/components/ui/QRScanner'
import { ValidationForm } from '../../src/components/validation/ValidationForm'
import { useWalletContext } from '../../src/components/providers/WalletProvider'
import Link from 'next/link'

// Mock student data
const mockStudent = {
  name: 'María García',
  university: 'Universidad ABC',
  currentBadges: 5,
  totalBadges: 10,
  wallet: '0x1234567890abcdef1234567890abcdef12345678'
}

export default function ValidatePage() {
  const { isConnected, userType } = useWalletContext()
  const [studentFound, setStudentFound] = useState(false)
  const [validationSuccess, setValidationSuccess] = useState(false)
  const [searchError, setSearchError] = useState('')

  const handleStudentSearch = (studentId: string) => {
    // Simulate student search
    if (studentId.trim().length < 3) {
      setSearchError('Ingresa al menos 3 caracteres')
      return
    }

    setSearchError('')
    setStudentFound(true)
  }

  const handleValidationSuccess = () => {
    setValidationSuccess(true)
    // Reset after showing success message
    setTimeout(() => {
      setValidationSuccess(false)
      setStudentFound(false)
    }, 3000)
  }

  if (!isConnected) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Conecta tu wallet para validar acciones
        </h1>
        <p className="text-gray-600">
          Necesitas conectar tu wallet de Freighter para acceder a la validación
        </p>
      </div>
    )
  }

  if (userType !== 'Embajador') {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Acceso Restringido
        </h1>
        <p className="text-gray-600 mb-6">
          Solo los embajadores pueden validar acciones. Tu tipo de usuario es: {userType}
        </p>
        <Link href="/dashboard" className="btn-primary">
          📊 Ir al Dashboard
        </Link>
      </div>
    )
  }

  if (validationSuccess) {
    return (
      <div className="text-center py-12">
        <div className="card max-w-md mx-auto">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Validación Exitosa!
          </h1>
          <p className="text-gray-600 mb-6">
            María García ha recibido un nuevo badge por su acción.
          </p>
          <div className="text-sm text-gray-500">
            Redirigiendo al dashboard...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🔍 Validar Nueva Acción</h1>
        <p className="text-gray-600">Como embajador, puedes validar las acciones de los estudiantes</p>
      </div>

      {/* QR Scanner Section */}
      <div className="card">
        <QRScanner 
          onScan={(data) => {
            console.log('QR Scanned:', data)
            handleStudentSearch(data)
          }}
          onError={(error) => {
            console.error('QR Error:', error)
            setSearchError('Error al escanear QR: ' + error)
          }}
        />
      </div>

      {/* Student Information */}
      {studentFound && (
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">📋 Información del Estudiante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Nombre</p>
              <p className="font-medium">{mockStudent.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Universidad</p>
              <p className="font-medium">{mockStudent.university}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Reputación actual</p>
              <p className="font-medium">{mockStudent.currentBadges}/{mockStudent.totalBadges} badges</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Wallet</p>
              <p className="font-mono text-sm">{mockStudent.wallet.slice(0, 6)}...{mockStudent.wallet.slice(-4)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estado</p>
              <p className="font-medium text-green-600">✅ Verificado</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Embajador</p>
              <p className="font-medium">{userType}</p>
            </div>
          </div>
        </div>
      )}

      {/* Validation Form */}
      {studentFound && (
        <ValidationForm 
          studentId={mockStudent.wallet}
          onSuccess={handleValidationSuccess}
        />
      )}

      {/* Error Display */}
      {searchError && (
        <div className="card">
          <div className="text-red-600 bg-red-50 p-4 rounded-lg">
            ❌ {searchError}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-center">
        <Link href="/dashboard" className="btn-outline">
          📊 Volver al Dashboard
        </Link>
      </div>
    </div>
  )
} 