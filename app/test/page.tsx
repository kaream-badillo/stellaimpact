export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🧪 Test de Configuración
          </h1>
          <p className="text-xl text-gray-600">
            Verificando Tailwind CSS + DaisyUI + Next.js
          </p>
        </div>

        {/* Tailwind Test */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🎨 Tailwind CSS
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-100 text-green-800 p-4 rounded-lg border border-green-200">
                ✅ Tailwind CSS funcionando
              </div>
              
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg border border-yellow-200">
                ⚠️ Clases responsive
              </div>
              
              <div className="bg-red-100 text-red-800 p-4 rounded-lg border border-red-200">
                ❌ Gradientes personalizados
              </div>
              
              <div className="bg-gradient-to-r from-nova-500 to-stellar-500 text-white p-4 rounded-lg">
                🌟 Colores personalizados (nova/stellar)
              </div>
            </div>
          </div>

          {/* DaisyUI Test */}
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🎭 DaisyUI
            </h2>
            
            <div className="space-y-4">
              <button className="btn btn-primary">
                Botón Primary
              </button>
              
              <button className="btn btn-secondary">
                Botón Secondary
              </button>
              
              <div className="alert alert-info">
                <span>Alert de información</span>
              </div>
              
              <div className="badge badge-success">
                Badge Success
              </div>
            </div>
          </div>
        </div>

        {/* Layout Test */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📐 Layout Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 border">
              <h3 className="text-lg font-semibold mb-2">Responsive Grid</h3>
              <p className="text-gray-600">1 col en móvil, 3 en desktop</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border">
              <h3 className="text-lg font-semibold mb-2">Flexbox</h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌟</span>
                <span>Flexbox funcionando</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 border">
              <h3 className="text-lg font-semibold mb-2">Spacing</h3>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-300 rounded"></div>
                <div className="h-2 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <span className="text-xl">✅</span>
            <span className="font-medium">Configuración completada</span>
          </div>
        </div>
      </div>
    </div>
  )
} 