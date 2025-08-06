'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useWalletContext } from '../providers/WalletProvider'

const navigationItems = [
  { href: '/dashboard', icon: '📊', label: 'Dashboard' },
  { href: '/profile', icon: '👤', label: 'Mi Perfil' },
  { href: '/validate', icon: '🔍', label: 'Validar', requiresAmbassador: true },
  { href: '/ranking', icon: '🏆', label: 'Ranking' },
  { href: '/export', icon: '📄', label: 'Exportar' },
  { href: '/settings', icon: '⚙️', label: 'Configuración' },
]

export function Sidebar() {
  const pathname = usePathname()
  const { userType, isConnected } = useWalletContext()

  // TEMPORAL: Always show sidebar for testing
  // if (!isConnected) {
  //   return null
  // }

  const filteredItems = navigationItems.filter(item => {
    if (item.requiresAmbassador && userType !== 'Embajador') {
      return false
    }
    return true
  })

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <span className="text-3xl">🌟</span>
          <h1 className="text-xl font-bold text-gray-900">StellaNova</h1>
        </div>
        
        <nav className="space-y-2">
          {filteredItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-nova-100 text-nova-700 font-medium' 
                    : 'text-gray-700 hover:bg-nova-50 hover:text-nova-700'
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500 mb-2">Tipo de Usuario</div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              {userType || 'No conectado'}
            </span>
            {userType && (
              <span className={`
                px-2 py-1 text-xs rounded-full
                ${userType === 'Embajador' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-blue-100 text-blue-700'
                }
              `}>
                {userType === 'Embajador' ? '👑' : '👤'}
              </span>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
} 