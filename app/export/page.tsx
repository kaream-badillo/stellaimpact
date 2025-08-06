'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock certificate data
const mockCertificate = {
  name: 'Juan Pérez',
  university: 'Universidad XYZ',
  date: new Date().toLocaleDateString('es-ES'),
  hash: '0x1234567890abcdef1234567890abcdef12345678',
  reputation: 85,
  earnedBadges: 8,
  totalBadges: 10,
  badges: [
    'Ayudé en evento',
    'Reciclé materiales',
    'Enseñé a otros',
    'Mentoré estudiantes',
    'Organicé actividad',
    'Participé en proyecto',
    'Colaboré en equipo',
    'Innové en solución'
  ]
}

export default function ExportPage() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = () => {
    setIsGenerating(true)
    // TODO: Implement real PDF generation
    setTimeout(() => {
      setIsGenerating(false)
      alert('PDF descargado exitosamente!')
    }, 2000)
  }

  const handleShare = () => {
    // TODO: Implement sharing functionality
    if (navigator.share) {
      navigator.share({
        title: 'Mi Certificado de Reputación - StellaNova',
        text: 'Mira mi reputación verificada en StellaNova',
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Enlace copiado al portapapeles!')
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📄 Exportar PDF</h1>
        <p className="text-gray-600">Descarga tu certificado de reputación verificable</p>
      </div>

      {/* Certificate Preview */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">📋 Vista Previa del PDF</h2>
        
        <div className="bg-white border-2 border-gray-300 rounded-lg p-8 max-w-2xl mx-auto">
          {/* Certificate Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-2">🌟</div>
            <h1 className="text-2xl font-bold text-gray-900">Certificado de Reputación</h1>
            <h2 className="text-xl font-semibold text-nova-600">StellaNova</h2>
          </div>

          {/* Certificate Content */}
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Nombre</p>
                <p className="font-semibold">{mockCertificate.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Universidad</p>
                <p className="font-semibold">{mockCertificate.university}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Fecha</p>
                <p className="font-semibold">{mockCertificate.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hash</p>
                <p className="font-mono text-xs">{mockCertificate.hash}</p>
              </div>
            </div>

            {/* Reputation */}
            <div className="text-center py-4">
              <p className="text-sm text-gray-600 mb-2">Reputación</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockCertificate.reputation}% ({mockCertificate.earnedBadges}/{mockCertificate.totalBadges} badges)
              </p>
              <div className="flex justify-center mt-2">
                {Array.from({ length: mockCertificate.totalBadges }, (_, i) => (
                  <span key={i} className="text-2xl">
                    {i < mockCertificate.earnedBadges ? '⭐' : '○'}
                  </span>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Badges obtenidos:</p>
              <div className="grid grid-cols-2 gap-2">
                {mockCertificate.badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate Footer */}
          <div className="text-center border-t pt-4">
            <p className="text-sm text-gray-600 italic">
              "Stellar reconoce lo que nadie ve"
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="btn-primary disabled:opacity-50"
        >
          {isGenerating ? '⏳ Generando...' : '📥 Descargar PDF'}
        </button>
        <button onClick={handleShare} className="btn-secondary">
          📤 Compartir
        </button>
        <Link href="/profile" className="btn-outline">
          👤 Mi Perfil
        </Link>
      </div>

      {/* PDF Features Info */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 Este PDF incluye:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✅</span>
            <span className="text-sm">Hash único verificable</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✅</span>
            <span className="text-sm">Firma digital del sistema</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✅</span>
            <span className="text-sm">Lista completa de badges</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✅</span>
            <span className="text-sm">Fecha de emisión</span>
          </div>
        </div>
      </div>
    </div>
  )
} 