"use client";

import { useState } from "react";

interface ActionBadgeProps {
  name: string;
  date: string;
  type: "recycling" | "volunteering" | "education" | "community" | "environmental";
  points?: number;
  verified?: boolean;
  onClick?: () => void;
}

const ActionBadge = ({ 
  name, 
  date, 
  type, 
  points = 0, 
  verified = true, 
  onClick 
}: ActionBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Configuración de colores y iconos por tipo
  const badgeConfig = {
    recycling: {
      color: "bg-green-100 text-green-800 border-green-200",
      icon: "♻️",
      label: "Reciclaje"
    },
    volunteering: {
      color: "bg-blue-100 text-blue-800 border-blue-200",
      icon: "🤝",
      label: "Voluntariado"
    },
    education: {
      color: "bg-purple-100 text-purple-800 border-purple-200",
      icon: "📚",
      label: "Educación"
    },
    community: {
      color: "bg-orange-100 text-orange-800 border-orange-200",
      icon: "🏘️",
      label: "Comunidad"
    },
    environmental: {
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
      icon: "🌱",
      label: "Ambiental"
    }
  };

  const config = badgeConfig[type];

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div
      className={`
        relative p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer
        ${config.color}
        ${isHovered ? 'scale-105 shadow-lg' : 'shadow-md'}
        ${onClick ? 'hover:shadow-xl' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Badge de verificación */}
      {verified && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex items-start space-x-3">
        {/* Icono */}
        <div className="text-2xl flex-shrink-0">
          {config.icon}
        </div>

        {/* Información */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-sm truncate">
              {name}
            </h3>
            {points > 0 && (
              <span className="text-xs font-bold bg-white/50 px-2 py-1 rounded-full">
                +{points} pts
              </span>
            )}
          </div>
          
          <p className="text-xs opacity-75 mb-2">
            {config.label}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs opacity-60">
              {formatDate(date)}
            </span>
            
            {/* Estado de validación */}
            <div className="flex items-center space-x-1">
              {verified ? (
                <span className="text-xs text-green-600 font-medium">
                  Validado
                </span>
              ) : (
                <span className="text-xs text-yellow-600 font-medium">
                  Pendiente
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de hover */}
      {isHovered && onClick && (
        <div className="absolute inset-0 bg-black/5 rounded-xl flex items-center justify-center">
          <span className="text-xs font-medium text-gray-700">
            Ver detalles
          </span>
        </div>
      )}
    </div>
  );
};

export default ActionBadge; 