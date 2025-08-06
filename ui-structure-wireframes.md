# 🎨 StellaNova - UI Structure & Wireframes

## 📱 Platform Target: **Responsive Web** (Mobile-First)

---

## 🧭 Flujo Principal de Interacción

### 1. **Landing Page** → Conectar Wallet
### 2. **Mi Perfil** → Ver Reputación Actual
### 3. **Validar Acción** → Escanear QR / Ingresar Código
### 4. **Cargar Evidencia** → Foto o POAP
### 5. **Confirmar Validación** → Firma de Embajador
### 6. **Ver Impacto** → Dashboard Institucional
### 7. **Exportar PDF** → Huella Reputacional

---

## 🖥️ Pantalla 1: Landing Page

```
┌─────────────────────────────────────────────────────────┐
│                    🌟 StellaNova                       │
│              "Haz visible lo invisible"                │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  │  "Tu esfuerzo merece ser contado,              │   │
│  │   aunque no tenga nota"                        │   │
│  │                                                 │   │
│  │  [Conectar Wallet con Freighter]               │   │
│  │                                                 │   │
│  │  ¿Ya tienes reputación?                        │   │
│  │  [Ver Mi Perfil]                               │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🌟 Badges • 📊 Reputación • 📱 QR • 📄 PDF   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  "Stellar reconoce lo que nadie ve"                    │
└─────────────────────────────────────────────────────────┘
```

**Secciones:**
- Header con logo y título
- Hero section con frase principal
- Botón "Conectar Wallet" (Freighter)
- Botón "Ver Mi Perfil" (si ya conectado)
- Features destacados (Badges, Reputación, QR, PDF)
- Footer con frase simbólica

---

## 👤 Pantalla 2: Mi Perfil

```
┌─────────────────────────────────────────────────────────┐
│  🌟 StellaNova                    [🔗 Wallet: 0x...]  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  👤 [Nombre del Estudiante]                   │   │
│  │  🏫 Universidad XYZ                           │   │
│  │  📧 email@universidad.edu                     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🌟 Reputación Actual                         │   │
│  │  ████████████████████████████████████ 85%     │   │
│  │  [8/10 badges] • [850 puntos]                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🏆 Mis Badges                                 │   │
│  │  ⭐ Ayudé en evento • ⭐ Reciclé • ⭐ Enseñé   │   │
│  │  ⭐ Mentoré • ⭐ Organicé • ⭐ Participé        │   │
│  │  ⭐ Colaboré • ⭐ Innové                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📅 Historia de Acciones                       │   │
│  │  • 2025-01-15: Ayudé en evento de tecnología  │   │
│  │    [Ver evidencia]                             │   │
│  │  • 2025-01-10: Reciclé 5kg de papel          │   │
│  │    [Ver evidencia]                             │   │
│  │  • 2025-01-05: Enseñé programación a 3       │   │
│  │    [Ver evidencia]                             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [📄 Exportar PDF] • [📊 Ver Ranking] • [🔍 Validar] │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔗 Ver en Stellar Testnet                    │   │
│  │  [Botón simbólico onchain]                    │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Secciones:**
- Header con wallet conectado
- Información del estudiante
- Barra de reputación visual
- Grid de badges obtenidos
- Lista cronológica de acciones
- Botones de acción (Exportar, Ranking, Validar)
- Botón simbólico "Ver en Stellar"

---

## 📱 Pantalla 3: Validar Acción (Embajador)

```
┌─────────────────────────────────────────────────────────┐
│  🌟 StellaNova                    [👤 Embajador]     │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔍 Validar Nueva Acción                      │   │
│  │                                               │   │
│  │  [📱 Escanear QR]                            │   │
│  │  [⌨️ Ingresar Código Manual]                  │   │
│  │                                               │   │
│  │  Código: [________________] [Buscar]          │   │
│  │                                               │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  📋 Información del Estudiante         │   │   │
│  │  │  Nombre: [Nombre encontrado]           │   │   │
│  │  │  Universidad: [Universidad]            │   │   │
│  │  │  Reputación actual: [X/Y badges]      │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📸 Cargar Evidencia                          │   │
│  │  [📷 Tomar Foto] [📁 Subir Imagen]           │   │
│  │  [🎫 Subir POAP] [✍️ Descripción]            │   │
│  │                                               │   │
│  │  Descripción:                                │   │
│  │  [________________________________]          │   │
│  │                                               │   │
│  │  Tipo de acción:                             │   │
│  │  ○ Ayudar ○ Enseñar ○ Reciclar ○ Organizar  │   │
│  │  ○ Mentorear ○ Participar ○ Colaborar       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [✅ Confirmar Validación] • [❌ Cancelar]             │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔐 Firma de Embajador                        │   │
│  │  [Firmar con Wallet]                          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Secciones:**
- Header con rol de embajador
- Opciones de validación (QR/Manual)
- Información del estudiante encontrado
- Carga de evidencia (foto/POAP)
- Selección de tipo de acción
- Confirmación con firma de wallet

---

## 📊 Pantalla 4: Dashboard Institucional

```
┌─────────────────────────────────────────────────────────┐
│  🌟 StellaNova                    [🏆 Ranking]        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🏫 Ranking por Universidad                   │   │
│  │                                               │   │
│  │  1. 🥇 Universidad XYZ - 2,450 puntos        │   │
│  │     [245 acciones validadas]                  │   │
│  │                                               │   │
│  │  2. 🥈 Universidad ABC - 1,890 puntos        │   │
│  │     [189 acciones validadas]                  │   │
│  │                                               │   │
│  │  3. 🥉 Universidad DEF - 1,230 puntos        │   │
│  │     [123 acciones validadas]                  │   │
│  │                                               │   │
│  │  4. Universidad GHI - 890 puntos              │   │
│  │     [89 acciones validadas]                   │   │
│  │                                               │   │
│  │  5. Universidad JKL - 670 puntos              │   │
│  │     [67 acciones validadas]                   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📈 Estadísticas Globales                     │   │
│  │  • Total de acciones: 7,140                   │   │
│  │  • Embajadores activos: 45                    │   │
│  │  • Universidades participantes: 12            │   │
│  │  • Badges otorgados: 7,140                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🌟 Acciones Recientes                        │   │
│  │  • Juan Pérez ayudó en evento de tecnología   │   │
│  │    (Universidad XYZ) - hace 2h                 │   │
│  │  • María García recicló 10kg de papel         │   │
│  │    (Universidad ABC) - hace 3h                 │   │
│  │  • Carlos López enseñó programación           │   │
│  │    (Universidad DEF) - hace 4h                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [👤 Mi Perfil] • [🔍 Validar] • [📄 Exportar]       │
└─────────────────────────────────────────────────────────┘
```

**Secciones:**
- Header con título de ranking
- Top 5 universidades con puntos
- Estadísticas globales del sistema
- Feed de acciones recientes
- Navegación a otras secciones

---

## 📄 Pantalla 5: Exportar PDF

```
┌─────────────────────────────────────────────────────────┐
│  🌟 StellaNova                    [📄 Exportar]       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📋 Vista Previa del PDF                      │   │
│  │                                               │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  🌟 Certificado de Reputación          │   │   │
│  │  │  StellaNova                            │   │   │
│  │  │                                       │   │   │
│  │  │  Nombre: [Nombre del Estudiante]      │   │   │
│  │  │  Universidad: [Universidad]           │   │   │
│  │  │  Fecha: [Fecha actual]                │   │   │
│  │  │  Hash: [Hash único]                    │   │   │
│  │  │                                       │   │   │
│  │  │  Reputación: 85% (8/10 badges)        │   │   │
│  │  │  ⭐⭐⭐⭐⭐⭐⭐⭐○○                          │   │   │
│  │  │                                       │   │   │
│  │  │  Badges obtenidos:                     │   │   │
│  │  │  • Ayudé en evento                    │   │   │
│  │  │  • Reciclé materiales                 │   │   │
│  │  │  • Enseñé a otros                     │   │   │
│  │  │  • Mentoré estudiantes                │   │   │
│  │  │  • Organicé actividad                 │   │   │
│  │  │  • Participé en proyecto              │   │   │
│  │  │  • Colaboré en equipo                 │   │   │
│  │  │  • Innové en solución                 │   │   │
│  │  │                                       │   │   │
│  │  │  "Stellar reconoce lo que nadie ve"   │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [📥 Descargar PDF] • [📤 Compartir] • [👤 Mi Perfil] │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  💡 Este PDF incluye:                        │   │
│  │  • Hash único verificable                    │   │
│  │  • Firma digital del sistema                 │   │
│  │  • Lista completa de badges                  │   │
│  │  • Fecha de emisión                          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Secciones:**
- Header con título de exportación
- Vista previa del PDF
- Información del certificado
- Badges obtenidos
- Botones de descarga y compartir
- Información sobre el PDF

---

## 🎯 Tips para Maquetación con Tailwind/Next.js

### 1. **Estructura de Componentes**

```typescript
// components/layout/Header.tsx
export function Header({ wallet, userType }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🌟</span>
          <h1 className="text-xl font-bold">StellaNova</h1>
        </div>
        {wallet && (
          <div className="flex items-center space-x-4">
            <span className="text-sm opacity-90">{userType}</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">
              {wallet.slice(0, 6)}...{wallet.slice(-4)}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
```

### 2. **Badge Component**

```typescript
// components/ui/Badge.tsx
export function Badge({ type, earned = false }: BadgeProps) {
  return (
    <div className={`
      inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      ${earned 
        ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' 
        : 'bg-gray-100 text-gray-500 border border-gray-300'
      }
    `}>
      <span className="mr-1">{earned ? '⭐' : '○'}</span>
      {type}
    </div>
  );
}
```

### 3. **Progress Bar**

```typescript
// components/ui/ProgressBar.tsx
export function ProgressBar({ progress, total }: ProgressBarProps) {
  const percentage = (progress / total) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div 
        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
      <div className="text-center text-sm text-gray-600 mt-1">
        {progress}/{total} badges • {percentage}%
      </div>
    </div>
  );
}
```

### 4. **QR Scanner Component**

```typescript
// components/ui/QRScanner.tsx
export function QRScanner({ onScan }: QRScannerProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">📱 Escanear QR</h3>
        <p className="text-gray-600">Apunta la cámara al código QR</p>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="text-4xl mb-2">📱</div>
        <p className="text-gray-500">Cámara no disponible</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Activar Cámara
        </button>
      </div>
    </div>
  );
}
```

### 5. **Responsive Design Tips**

```css
/* globals.css */
@layer components {
  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }
  
  .btn-primary {
    @apply bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200;
  }
  
  .btn-secondary {
    @apply bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200;
  }
}
```

### 6. **Layout Structure**

```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

### 7. **Mobile-First Approach**

```typescript
// Responsive grid for badges
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {badges.map(badge => (
    <Badge key={badge.id} {...badge} />
  ))}
</div>

// Responsive navigation
<nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
  <button className="btn-primary w-full sm:w-auto">Conectar Wallet</button>
  <button className="btn-secondary w-full sm:w-auto">Ver Perfil</button>
</nav>
```

### 8. **Color Scheme (Stellar Theme)**

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        stellar: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        nova: {
          50: '#fdf4ff',
          100: '#fae8ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
        }
      }
    }
  }
}
```

---

## 🚀 Implementación Recomendada

### Fase 1: Landing + Perfil
1. Landing page con conexión wallet
2. Página de perfil con reputación
3. Componentes básicos (Header, Badge, ProgressBar)

### Fase 2: Validación
1. Página de validación para embajadores
2. QR Scanner (simulado inicialmente)
3. Formulario de carga de evidencia

### Fase 3: Dashboard + Export
1. Dashboard institucional
2. Exportador de PDF
3. Botón simbólico "Ver en Stellar"

### Fase 4: Integración
1. Conexión real con Freighter
2. Validaciones onchain
3. Persistencia de datos

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Elementos Visuales Clave

- **Estrellas** (⭐) para badges y reputación
- **Gradientes** púrpura-azul para elementos principales
- **Sombras suaves** para profundidad
- **Bordes redondeados** para modernidad
- **Animaciones sutiles** para feedback
- **Iconos emoji** para simplicidad

Esta estructura proporciona una base sólida para implementar el MVP de StellaNova con una experiencia de usuario clara y atractiva. 