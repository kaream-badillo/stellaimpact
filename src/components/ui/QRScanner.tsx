interface QRScannerProps {
  onScan?: (data: string) => void;
  onError?: (error: string) => void;
}

export function QRScanner({ onScan, onError }: QRScannerProps) {
  const handleCameraActivation = () => {
    // TODO: Implement real camera access
    console.log('Activating camera...');
    onError?.('Cámara no disponible en esta versión');
  };

  return (
    <div className="card">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">📱 Escanear QR</h3>
        <p className="text-gray-600">Apunta la cámara al código QR del estudiante</p>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
        <div className="text-6xl mb-4">📱</div>
        <p className="text-gray-500 mb-4">Cámara no disponible</p>
        <button 
          onClick={handleCameraActivation}
          className="btn-primary"
        >
          Activar Cámara
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 mb-2">O ingresa el código manualmente</p>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Código del estudiante"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-500 focus:border-transparent"
          />
          <button className="btn-secondary">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
} 