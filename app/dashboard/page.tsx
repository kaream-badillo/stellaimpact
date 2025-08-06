'use client'

import { useState } from 'react'
import { useWalletContext } from '../../src/components/providers/WalletProvider'

export default function Dashboard() {
  const { userType, isConnected } = useWalletContext()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const stats = {
    totalBadges: 12,
    reputationScore: 85,
    actionsValidated: 8,
    rank: 3
  }

  const recentBadges = [
    { id: 1, name: 'Ayudé en evento', icon: '🤝', date: '2024-01-15', type: 'Comunidad' },
    { id: 2, name: 'Enseñé a otra persona', icon: '📚', date: '2024-01-12', type: 'Educación' },
    { id: 3, name: 'Reciclé correctamente', icon: '♻️', date: '2024-01-10', type: 'Sostenibilidad' },
  ]

  const topRanking = [
    { rank: 1, name: 'María García', score: 95, badges: 15 },
    { rank: 2, name: 'Carlos López', score: 92, badges: 14 },
    { rank: 3, name: 'Ana Martínez', score: 85, badges: 12 },
    { rank: 4, name: 'Luis Rodríguez', score: 78, badges: 10 },
    { rank: 5, name: 'Sofia Pérez', score: 72, badges: 9 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Bienvenido a tu perfil reputacional</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Tipo: {userType || 'Estudiante'}</span>
          <div className="bg-nova-100 text-nova-700 px-3 py-1 rounded-full text-sm font-medium">
            Reputación: {stats.reputationScore}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Badges</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalBadges}</p>
            </div>
            <div className="text-3xl">🌟</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Puntuación</p>
              <p className="text-2xl font-bold text-gray-900">{stats.reputationScore}</p>
            </div>
            <div className="text-3xl">📊</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Acciones Validadas</p>
              <p className="text-2xl font-bold text-gray-900">{stats.actionsValidated}</p>
            </div>
            <div className="text-3xl">✅</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ranking</p>
              <p className="text-2xl font-bold text-gray-900">#{stats.rank}</p>
            </div>
            <div className="text-3xl">🏆</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-nova-500 text-nova-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resumen
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'badges'
                  ? 'border-nova-500 text-nova-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Badges Recientes
            </button>
            <button
              onClick={() => setActiveTab('ranking')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'ranking'
                  ? 'border-nova-500 text-nova-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Ranking
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Progreso Reputacional</h3>
                <div className="bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-nova-500 to-stellar-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${stats.reputationScore}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {stats.reputationScore}% completado • {100 - stats.reputationScore}% restante
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Próximos Objetivos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-medium text-gray-900">Llegar a 100 puntos</p>
                        <p className="text-sm text-gray-600">15 puntos restantes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl">🏅</span>
                      <div>
                        <p className="font-medium text-gray-900">Obtener 5 badges más</p>
                        <p className="text-sm text-gray-600">3 badges restantes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Actividad Reciente</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-600">Badge obtenido: "Ayudé en evento"</p>
                      <span className="text-xs text-gray-400">Hace 2 días</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-sm text-gray-600">Validación exitosa de acción</p>
                      <span className="text-xs text-gray-400">Hace 3 días</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'badges' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Badges Recientes</h3>
              <div className="space-y-4">
                {recentBadges.map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl">{badge.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{badge.name}</h4>
                      <p className="text-sm text-gray-600">{badge.type} • {badge.date}</p>
                    </div>
                    <div className="text-nova-600">
                      <span className="text-2xl">✅</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ranking' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 5 Ranking</h3>
              <div className="space-y-3">
                {topRanking.map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        user.rank === 1 ? 'bg-yellow-500' :
                        user.rank === 2 ? 'bg-gray-400' :
                        user.rank === 3 ? 'bg-orange-500' : 'bg-gray-300'
                      }`}>
                        {user.rank}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.badges} badges</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{user.score}</p>
                      <p className="text-sm text-gray-600">puntos</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 