'use client'

import { useState } from 'react'
import { useWalletContext } from '../providers/WalletProvider'

interface ValidationFormProps {
  studentId: string
  onSuccess: () => void
}

const actionTypes = [
  { id: 'ayudar', label: 'Ayudar', points: 100 },
  { id: 'ensenar', label: 'Enseñar', points: 150 },
  { id: 'reciclar', label: 'Reciclar', points: 50 },
  { id: 'organizar', label: 'Organizar', points: 120 },
  { id: 'mentorear', label: 'Mentorear', points: 200 },
  { id: 'participar', label: 'Participar', points: 80 },
  { id: 'colaborar', label: 'Colaborar', points: 90 },
  { id: 'innovar', label: 'Innovar', points: 180 }
]

export function ValidationForm({ studentId, onSuccess }: ValidationFormProps) {
  const { userType } = useWalletContext()
  const [formData, setFormData] = useState({
    actionType: '',
    description: '',
    evidence: '',
    points: 0
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.actionType) {
      newErrors.actionType = 'Selecciona un tipo de acción'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Describe la acción realizada'
    }

    if (formData.description.length < 10) {
      newErrors.description = 'La descripción debe tener al menos 10 caracteres'
    }

    if (!formData.evidence.trim()) {
      newErrors.evidence = 'Agrega evidencia de la acción'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleActionTypeChange = (actionId: string) => {
    const action = actionTypes.find(a => a.id === actionId)
    setFormData(prev => ({
      ...prev,
      actionType: actionId,
      points: action?.points || 0
    }))
    if (errors.actionType) {
      setErrors(prev => ({ ...prev, actionType: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success
      onSuccess()
    } catch (error) {
      console.error('Validation error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (userType !== 'Embajador') {
    return (
      <div className="card">
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Acceso Restringido
          </h3>
          <p className="text-gray-600">
            Solo los embajadores pueden validar acciones. Tu tipo de usuario es: {userType}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Action Type Selection */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Tipo de Acción</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {actionTypes.map((action) => (
            <label
              key={action.id}
              className={`
                flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-colors
                ${formData.actionType === action.id
                  ? 'border-nova-500 bg-nova-50 text-nova-700'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <input
                type="radio"
                name="actionType"
                value={action.id}
                checked={formData.actionType === action.id}
                onChange={() => handleActionTypeChange(action.id)}
                className="sr-only"
              />
              <span className="text-lg mb-2">{getActionIcon(action.id)}</span>
              <span className="text-sm font-medium text-center">{action.label}</span>
              <span className="text-xs text-gray-500 mt-1">+{action.points} pts</span>
            </label>
          ))}
        </div>
        {errors.actionType && (
          <p className="text-red-600 text-sm mt-2">{errors.actionType}</p>
        )}
      </div>

      {/* Description */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">✍️ Descripción</h3>
        <textarea
          value={formData.description}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, description: e.target.value }))
            if (errors.description) {
              setErrors(prev => ({ ...prev, description: '' }))
            }
          }}
          placeholder="Describe detalladamente la acción realizada por el estudiante..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-500 focus:border-transparent resize-none"
          rows={4}
        />
        {errors.description && (
          <p className="text-red-600 text-sm mt-2">{errors.description}</p>
        )}
      </div>

      {/* Evidence */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">📸 Evidencia</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button type="button" className="btn-secondary">
              📷 Tomar Foto
            </button>
            <button type="button" className="btn-secondary">
              📁 Subir Imagen
            </button>
            <button type="button" className="btn-secondary">
              🎫 Subir POAP
            </button>
          </div>
          <textarea
            value={formData.evidence}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, evidence: e.target.value }))
              if (errors.evidence) {
                setErrors(prev => ({ ...prev, evidence: '' }))
              }
            }}
            placeholder="Describe la evidencia o agrega un enlace..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-500 focus:border-transparent resize-none"
            rows={3}
          />
          {errors.evidence && (
            <p className="text-red-600 text-sm mt-2">{errors.evidence}</p>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Resumen</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">{formData.points}</div>
            <div className="text-sm text-gray-600">Puntos a otorgar</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">
              {actionTypes.find(a => a.id === formData.actionType)?.label || '-'}
            </div>
            <div className="text-sm text-gray-600">Tipo de acción</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">✅</div>
            <div className="text-sm text-gray-600">Validación lista</div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex-1"
        >
          {isSubmitting ? '⏳ Procesando...' : '✅ Confirmar Validación'}
        </button>
        <button
          type="button"
          className="btn-secondary flex-1"
          onClick={() => setFormData({ actionType: '', description: '', evidence: '', points: 0 })}
        >
          🔄 Reiniciar
        </button>
      </div>
    </form>
  )
}

function getActionIcon(actionId: string): string {
  const icons: Record<string, string> = {
    ayudar: '🤝',
    ensenar: '📚',
    reciclar: '♻️',
    organizar: '📋',
    mentorear: '👨‍🏫',
    participar: '🎯',
    colaborar: '🤝',
    innovar: '💡'
  }
  return icons[actionId] || '⭐'
} 