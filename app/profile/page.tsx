'use client'

import { Badge } from '../../src/components/ui/Badge'
import { ProgressBar } from '../../src/components/ui/ProgressBar'
import Link from 'next/link'

// Mock data
const mockUser = {
  name: 'Juan Pérez',
  university: 'Universidad XYZ',
  email: 'juan.perez@universidad.edu',
  wallet: '0x1234567890abcdef1234567890abcdef12345678'
}

const mockBadges = [
  { type: 'Ayudé en evento', earned: true, description: 'Tecnología' },
  { type: 'Reciclé', earned: true, description: '5kg papel' },
  { type: 'Enseñé', earned: true, description: 'Programación' },
  { type: 'Mentoré', earned: true, description: '3 estudiantes' },
  { type: 'Organicé', earned: true, description: 'Actividad' },
  { type: 'Participé', earned: true, description: 'Proyecto' },
  { type: 'Colaboré', earned: true, description: 'Equipo' },
  { type: 'Innové', earned: true, description: 'Solución' },
  { type: 'Lideré', earned: false },
  { type: 'Investigé', earned: false }
]

const mockActions = [
  {
    id: 1,
    date: '2025-01-15',
    action: 'Ayudé en evento de tecnología',
    evidence: 'foto_evento.jpg',
    points: 100
  },
  {
    id: 2,
    date: '2025-01-10',
    action: 'Reciclé 5kg de papel',
    evidence: 'foto_reciclaje.jpg',
    points: 50
  },
  {
    id: 3,
    date: '2025-01-05',
    action: 'Enseñé programación a 3 estudiantes',
    evidence: 'foto_ensenanza.jpg',
    points: 150
  }
]

export default function ProfilePage() {
  const earnedBadges = mockBadges.filter(badge => badge.earned).length
  const totalBadges = mockBadges.length
  const totalPoints = mockActions.reduce((sum, action) => sum + action.points, 0)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* User Info */}
      <div className="card">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-nova-500 to-stellar-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {mockUser.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{mockUser.name}</h1>
            <p className="text-gray-600">🏫 {mockUser.university}</p>
            <p className="text-gray-600">📧 {mockUser.email}</p>
          </div>
        </div>

        {/* Reputation Progress */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">🌟 Reputación Actual</h2>
          <ProgressBar progress={earnedBadges} total={totalBadges} />
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-gray-900">{totalPoints}</span>
            <span className="text-gray-600 ml-2">puntos</span>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">🏆 Mis Badges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {mockBadges.map((badge, index) => (
            <Badge 
              key={index}
              type={badge.type}
              earned={badge.earned}
              description={badge.description}
            />
          ))}
        </div>
      </div>

      {/* Action History */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">📅 Historia de Acciones</h2>
        <div className="space-y-4">
          {mockActions.map((action) => (
            <div key={action.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{action.action}</p>
                  <p className="text-sm text-gray-600">{action.date}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-green-600">+{action.points} pts</span>
                  <button className="block text-xs text-nova-600 hover:text-nova-700 mt-1">
                    Ver evidencia
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/export" className="btn-primary">
          📄 Exportar PDF
        </Link>
        <Link href="/dashboard" className="btn-secondary">
          📊 Ver Ranking
        </Link>
        <Link href="/validate" className="btn-outline">
          🔍 Validar
        </Link>
      </div>

      {/* Stellar Testnet Button */}
      <div className="card text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Ver en Stellar Testnet</h3>
        <button className="btn-primary">
          🌟 Ver en Blockchain
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Verifica tu reputación en la blockchain de Stellar
        </p>
      </div>
    </div>
  )
} 