'use client'

import { useWalletContext } from '../../src/components/providers/WalletProvider'
import Link from 'next/link'

// Mock data
const mockRankings = [
  {
    position: 1,
    university: 'Universidad XYZ',
    points: 2450,
    actions: 245,
    medal: '🥇'
  },
  {
    position: 2,
    university: 'Universidad ABC',
    points: 1890,
    actions: 189,
    medal: '🥈'
  },
  {
    position: 3,
    university: 'Universidad DEF',
    points: 1230,
    actions: 123,
    medal: '🥉'
  },
  {
    position: 4,
    university: 'Universidad GHI',
    points: 890,
    actions: 89,
    medal: ''
  },
  {
    position: 5,
    university: 'Universidad JKL',
    points: 670,
    actions: 67,
    medal: ''
  }
]

const mockStats = {
  totalActions: 7140,
  activeAmbassadors: 45,
  participatingUniversities: 12,
  totalBadges: 7140
}

const mockRecentActions = [
  {
    id: 1,
    student: 'Juan Pérez',
    action: 'ayudó en evento de tecnología',
    university: 'Universidad XYZ',
    timeAgo: 'hace 2h'
  },
  {
    id: 2,
    student: 'María García',
    action: 'recicló 10kg de papel',
    university: 'Universidad ABC',
    timeAgo: 'hace 3h'
  },
  {
    id: 3,
    student: 'Carlos López',
    action: 'enseñó programación',
    university: 'Universidad DEF',
    timeAgo: 'hace 4h'
  },
  {
    id: 4,
    student: 'Ana Rodríguez',
    action: 'mentoré a 2 estudiantes',
    university: 'Universidad GHI',
    timeAgo: 'hace 5h'
  }
]

export default function RankingPage() {
  const { isConnected } = useWalletContext()

  if (!isConnected) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Conecta tu wallet para ver el ranking
        </h1>
        <p className="text-gray-600">
          Necesitas conectar tu wallet de Freighter para acceder al ranking
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🏆 Ranking Institucional</h1>
        <p className="text-gray-600">Descubre las universidades más activas en StellaNova</p>
      </div>

      {/* Rankings */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">🏫 Ranking por Universidad</h2>
        <div className="space-y-4">
          {mockRankings.map((ranking) => (
            <div key={ranking.position} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{ranking.medal}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{ranking.university}</h3>
                  <p className="text-sm text-gray-600">{ranking.actions} acciones validadas</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{ranking.points.toLocaleString()}</p>
                <p className="text-sm text-gray-600">puntos</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-semibold text-gray-800">Total de Acciones</h3>
          <p className="text-2xl font-bold text-nova-600">{mockStats.totalActions.toLocaleString()}</p>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">👥</div>
          <h3 className="font-semibold text-gray-800">Embajadores Activos</h3>
          <p className="text-2xl font-bold text-stellar-600">{mockStats.activeAmbassadors}</p>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">🏫</div>
          <h3 className="font-semibold text-gray-800">Universidades</h3>
          <p className="text-2xl font-bold text-nova-600">{mockStats.participatingUniversities}</p>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">🌟</div>
          <h3 className="font-semibold text-gray-800">Badges Otorgados</h3>
          <p className="text-2xl font-bold text-stellar-600">{mockStats.totalBadges.toLocaleString()}</p>
        </div>
      </div>

      {/* Recent Actions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">🌟 Acciones Recientes</h2>
        <div className="space-y-4">
          {mockRecentActions.map((action) => (
            <div key={action.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-nova-500 to-stellar-500 rounded-full flex items-center justify-center text-white font-bold">
                  {action.student.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    <span className="font-semibold">{action.student}</span> {action.action}
                  </p>
                  <p className="text-sm text-gray-600">
                    ({action.university}) • {action.timeAgo}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-green-600 font-medium">+100 pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/dashboard" className="btn-primary">
          📊 Dashboard
        </Link>
        <Link href="/validate" className="btn-secondary">
          🔍 Validar
        </Link>
        <Link href="/export" className="btn-outline">
          📄 Exportar
        </Link>
      </div>
    </div>
  )
} 