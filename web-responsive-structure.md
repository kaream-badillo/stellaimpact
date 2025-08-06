# 🌟 StellaNova - Web-Responsive Structure (Desktop-First)

## 📋 1. Lista de Pantallas Principales

### **Pantallas Core (Flujo Principal)**
1. **Landing Page** (`/`) - Página de entrada y conexión wallet
2. **Dashboard Principal** (`/dashboard`) - Vista general con estadísticas
3. **Mi Perfil** (`/profile`) - Perfil del usuario con reputación
4. **Validar Acción** (`/validate`) - Interfaz para embajadores
5. **Ranking Institucional** (`/ranking`) - Tabla de posiciones
6. **Exportar PDF** (`/export`) - Generación de certificados
7. **Configuración** (`/settings`) - Ajustes de usuario

### **Pantallas Secundarias**
8. **Detalle de Badge** (`/badge/[id]`) - Información específica de badge
9. **Historial Completo** (`/history`) - Lista detallada de acciones
10. **Embajadores** (`/ambassadors`) - Gestión de validadores

---

## 🧭 2. Flujo de Navegación Web-Style

### **Estructura de Navegación**
```
┌─────────────────────────────────────────────────────────────────┐
│  Header (Fixed)                                               │
│  🌟 StellaNova  [Wallet] [UserType] [Notifications] [Menu]   │
├─────────────────────────────────────────────────────────────────┤
│  Sidebar (Collapsible)                                        │
│  📊 Dashboard                                                 │
│  👤 Mi Perfil                                                │
│  🔍 Validar                                                  │
│  🏆 Ranking                                                  │
│  📄 Exportar                                                 │
│  ⚙️ Configuración                                           │
└─────────────────────────────────────────────────────────────────┘
```

### **Rutas y Navegación**
- **Landing** → Conectar Wallet → **Dashboard**
- **Dashboard** → Sidebar Navigation → Todas las secciones
- **Mi Perfil** → Badge Details → **Historial**
- **Validar** → QR Scanner → **Confirmación**
- **Ranking** → Universidad Details → **Perfil**
- **Export** → PDF Preview → **Descarga**

---

## 🖥️ 3. Wireframes Textuales por Pantalla

### **Pantalla 1: Landing Page (`/`)**
```
┌─────────────────────────────────────────────────────────────────┐
│  Header: Logo + "Conectar Wallet"                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐                     │
│  │   Hero Section  │  │  Features Grid  │                     │
│  │                 │  │                 │                     │
│  │  🌟 StellaNova │  │  🌟 Badges     │                     │
│  │  "Haz visible  │  │  📊 Reputación  │                     │
│  │   lo invisible" │  │  📱 QR Scanner  │                     │
│  │                 │  │  📄 PDF Export  │                     │
│  │  [Conectar      │  │                 │                     │
│  │   Wallet]       │  └─────────────────┘                     │
│  └─────────────────┘                                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  Call-to-Action Section                                   │ │
│  │  "Stellar reconoce lo que nadie ve"                      │ │
│  │  [Ver Demo] [Documentación] [GitHub]                     │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### **Pantalla 2: Dashboard Principal (`/dashboard`)**
```
┌─────────────────────────────────────────────────────────────────┐
│  Header: [Wallet] [UserType] [Notifications]                 │
├─────────────────────────────────────────────────────────────────┤
│  Sidebar │ Main Content Area                                  │
│  ┌─────┐ │ ┌─────────────────────────────────────────────────┐ │
│  │ 📊 │ │ │  Welcome Section                                │ │
│  │ 👤 │ │ │  "Bienvenido, Juan Pérez"                      │ │
│  │ 🔍 │ │ │  Reputación: 85% • 8/10 badges                 │ │
│  │ 🏆 │ │ └─────────────────────────────────────────────────┘ │
│  │ 📄 │ │                                                     │
│  │ ⚙️ │ │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐  │
│  └─────┘ │  │ Quick Stats │ │ Recent      │ │ Top         │  │
│          │  │ • 850 pts   │ │ Actions     │ │ Universities│  │
│          │  │ • 8 badges  │ │ • Ayudé...  │ │ • XYZ: 2450 │  │
│          │  │ • 3 actions │ │ • Reciclé...│ │ • ABC: 1890 │  │
│          │  └─────────────┘ └─────────────┘ └─────────────┘  │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Action Buttons                                │ │
│          │  │  [🔍 Validar] [📊 Ranking] [📄 Exportar]      │ │
│          │  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### **Pantalla 3: Mi Perfil (`/profile`)**
```
┌─────────────────────────────────────────────────────────────────┐
│  Header: [Wallet] [UserType] [Notifications]                 │
├─────────────────────────────────────────────────────────────────┤
│  Sidebar │ Main Content Area                                  │
│  ┌─────┐ │ ┌─────────────────────────────────────────────────┐ │
│  │ 📊 │ │ │  User Info Section                              │ │
│  │ 👤 │ │ │  ┌─────────────┐ ┌─────────────────────────────┐ │ │
│  │ 🔍 │ │ │  │ Avatar      │ │ Name: Juan Pérez            │ │ │
│  │ 🏆 │ │ │  │ 🌟          │ │ University: Universidad XYZ │ │ │
│  │ 📄 │ │ │  │             │ │ Email: juan@university.edu  │ │ │
│  │ ⚙️ │ │ │  └─────────────┘ └─────────────────────────────┘ │ │
│  └─────┘ │ └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Reputación Progress                            │ │
│          │  │  ████████████████████████████████████ 85%     │ │
│          │  │  8/10 badges • 850 puntos                      │ │
│          │  └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Badges Grid (2-3 columns)                     │ │
│          │  │  ⭐ Ayudé ⭐ Reciclé ⭐ Enseñé ⭐ Mentoré      │ │
│          │  │  ⭐ Organicé ⭐ Participé ⭐ Colaboré ⭐ Innové │ │
│          │  └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Action History (Table)                        │ │
│          │  │  Date | Action | Points | Evidence            │ │
│          │  │  15/01| Ayudé...| +100  | [Ver]              │ │
│          │  │  10/01| Reciclé...| +50  | [Ver]              │ │
│          │  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### **Pantalla 4: Validar Acción (`/validate`)**
```
┌─────────────────────────────────────────────────────────────────┐
│  Header: [Wallet] [Embajador] [Notifications]                │
├─────────────────────────────────────────────────────────────────┤
│  Sidebar │ Main Content Area                                  │
│  ┌─────┐ │ ┌─────────────────────────────────────────────────┐ │
│  │ 📊 │ │ │  Validation Interface                            │ │
│  │ 👤 │ │ │                                                 │ │
│  │ 🔍 │ │ │  ┌─────────────┐ ┌─────────────────────────────┐ │ │
│  │ 🏆 │ │ │  │ QR Scanner  │ │ Student Info                │ │
│  │ 📄 │ │ │  │ 📱          │ │ Name: María García          │ │
│  │ ⚙️ │ │ │  │ [Scan QR]   │ │ University: Universidad ABC │ │
│  └─────┘ │ │  └─────────────┘ │ Badges: 5/10               │ │ │
│          │ │                   └─────────────────────────────┘ │ │
│          │ └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Evidence Upload Section                        │ │
│          │  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│          │  │  │ 📷 Photo    │ │ 📁 Upload   │ │ 🎫 POAP     │ │
│          │  │  │ [Take]      │ │ [Browse]    │ │ [Add]       │ │
│          │  │  └─────────────┘ └─────────────┘ └─────────────┘ │
│          │  └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Action Type Selection                          │ │
│          │  │  ○ Ayudar ○ Enseñar ○ Reciclar ○ Organizar    │ │
│          │  │  ○ Mentorear ○ Participar ○ Colaborar ○ Innovar│ │
│          │  └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Confirmation Section                           │ │
│          │  │  [✅ Confirm Validation] [❌ Cancel]            │ │
│          │  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### **Pantalla 5: Ranking Institucional (`/ranking`)**
```
┌─────────────────────────────────────────────────────────────────┐
│  Header: [Wallet] [UserType] [Notifications]                 │
├─────────────────────────────────────────────────────────────────┤
│  Sidebar │ Main Content Area                                  │
│  ┌─────┐ │ ┌─────────────────────────────────────────────────┐ │
│  │ 📊 │ │ │  Ranking Title                                  │ │
│  │ 👤 │ │ │  "🏆 Ranking por Universidad"                   │ │
│  │ 🔍 │ │ └─────────────────────────────────────────────────┘ │
│  │ 🏆 │ │                                                     │
│  │ 📄 │ │  ┌─────────────────────────────────────────────────┐ │
│  │ ⚙️ │ │  │  Rankings Table (Full Width)                   │ │
│  └─────┘ │  │  ┌─────────────────────────────────────────────┐ │ │
│          │  │  │ 🥇 Universidad XYZ - 2,450 pts (245 acts)  │ │ │
│          │  │  │ 🥈 Universidad ABC - 1,890 pts (189 acts)  │ │ │
│          │  │  │ 🥉 Universidad DEF - 1,230 pts (123 acts)  │ │ │
│          │  │  │ 4. Universidad GHI - 890 pts (89 acts)     │ │ │
│          │  │  │ 5. Universidad JKL - 670 pts (67 acts)     │ │ │
│          │  │  └─────────────────────────────────────────────┘ │ │
│          │  └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Global Statistics (Grid)                       │ │
│          │  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│          │  │  │ 📊 Total    │ │ 👥 Active   │ │ 🏫 Univs    │ │
│          │  │  │ 7,140 acts  │ │ 45 Ambass.  │ │ 12 Particip.│ │
│          │  │  └─────────────┘ └─────────────┘ └─────────────┘ │
│          │  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### **Pantalla 6: Exportar PDF (`/export`)**
```
┌─────────────────────────────────────────────────────────────────┐
│  Header: [Wallet] [UserType] [Notifications]                 │
├─────────────────────────────────────────────────────────────────┤
│  Sidebar │ Main Content Area                                  │
│  ┌─────┐ │ ┌─────────────────────────────────────────────────┐ │
│  │ 📊 │ │ │  Export Title                                   │ │
│  │ 👤 │ │ │  "📄 Exportar Certificado de Reputación"        │ │
│  │ 🔍 │ │ └─────────────────────────────────────────────────┘ │
│  │ 🏆 │ │                                                     │
│  │ 📄 │ │  ┌─────────────────────────────────────────────────┐ │
│  │ ⚙️ │ │  │  PDF Preview (Centered)                        │ │
│  └─────┘ │  │  ┌─────────────────────────────────────────────┐ │ │
│          │  │  │  🌟 Certificado de Reputación              │ │ │
│          │  │  │  StellaNova                                │ │ │
│          │  │  │                                             │ │ │
│          │  │  │  Nombre: Juan Pérez                        │ │ │
│          │  │  │  Universidad: Universidad XYZ              │ │ │
│          │  │  │  Reputación: 85% (8/10 badges)            │ │ │
│          │  │  │  ⭐⭐⭐⭐⭐⭐⭐⭐○○                              │ │ │
│          │  │  │                                             │ │ │
│          │  │  │  Badges: Ayudé, Reciclé, Enseñé, Mentoré...│ │ │
│          │  │  │                                             │ │ │
│          │  │  │  "Stellar reconoce lo que nadie ve"        │ │ │
│          │  │  └─────────────────────────────────────────────┘ │ │
│          │  └─────────────────────────────────────────────────┘ │
│          │                                                     │
│          │  ┌─────────────────────────────────────────────────┐ │
│          │  │  Action Buttons (Centered)                     │ │
│          │  │  [📥 Download PDF] [📤 Share] [👤 My Profile] │ │
│          │  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 4. Elementos Clave Visuales

### **Header (Fixed Top)**
- **Logo**: 🌟 StellaNova (izquierda)
- **Wallet Info**: Dirección truncada + tipo de usuario
- **Notifications**: Icono de campana con badge
- **User Menu**: Dropdown con opciones de perfil

### **Sidebar (Collapsible Left)**
- **Navigation Icons**: 📊👤🔍🏆📄⚙️
- **Active State**: Highlight con color Stellar
- **Collapse Toggle**: Hamburger menu para mobile

### **Badges System**
- **Earned**: ⭐ con fondo amarillo y borde dorado
- **Locked**: ○ con fondo gris y borde gris
- **Grid Layout**: 2-3 columnas en desktop, responsive

### **Progress Bars**
- **Reputation**: Gradiente amarillo-naranja
- **Smooth Animation**: Transición de 300ms
- **Text Overlay**: Porcentaje y badges count

### **Cards & Containers**
- **White Background**: Sombra suave
- **Rounded Corners**: 8px border-radius
- **Hover Effects**: Elevación sutil

### **Buttons**
- **Primary**: Gradiente púrpura-azul
- **Secondary**: Gris con borde
- **Outline**: Borde púrpura, texto púrpura
- **States**: Hover, disabled, loading

### **Tables & Lists**
- **Striped Rows**: Alternating colors
- **Hover Effects**: Highlight on row hover
- **Responsive**: Horizontal scroll en mobile

---

## 💻 5. Tips para Maquetación con Tailwind/Next.js

### **Layout Structure**
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-lg">
            <nav className="p-4">
              {/* Navigation items */}
            </nav>
          </aside>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
              {/* Header content */}
            </header>
            
            {/* Page Content */}
            <main className="flex-1 p-6 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
```

### **Grid Systems**
```typescript
// Dashboard Grid
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
  <div className="card">Quick Stats</div>
  <div className="card">Recent Actions</div>
  <div className="card">Top Universities</div>
</div>

// Badges Grid
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {badges.map(badge => <Badge key={badge.id} {...badge} />)}
</div>
```

### **Responsive Breakpoints**
```typescript
// Desktop-first approach
<div className="
  w-full                    // Mobile: full width
  md:w-1/2                 // Tablet: half width
  lg:w-1/3                 // Desktop: third width
  xl:w-1/4                 // Large: quarter width
">
```

### **Component Classes**
```css
/* globals.css */
@layer components {
  .dashboard-card {
    @apply bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow;
  }
  
  .sidebar-nav-item {
    @apply flex items-center px-4 py-3 text-gray-700 hover:bg-nova-50 hover:text-nova-700 rounded-lg transition-colors;
  }
  
  .sidebar-nav-item.active {
    @apply bg-nova-100 text-nova-700 font-medium;
  }
  
  .table-row {
    @apply border-b border-gray-200 hover:bg-gray-50 transition-colors;
  }
  
  .badge-grid {
    @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4;
  }
}
```

### **Color Scheme**
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

### **State Management**
```typescript
// hooks/useWallet.ts
export function useWallet() {
  const [wallet, setWallet] = useState<string | null>(null)
  const [userType, setUserType] = useState<'Estudiante' | 'Embajador' | null>(null)
  
  const connectWallet = async () => {
    // Freighter integration
  }
  
  return { wallet, userType, connectWallet }
}
```

### **Navigation Structure**
```typescript
// components/Sidebar.tsx
const navigationItems = [
  { href: '/dashboard', icon: '📊', label: 'Dashboard' },
  { href: '/profile', icon: '👤', label: 'Mi Perfil' },
  { href: '/validate', icon: '🔍', label: 'Validar' },
  { href: '/ranking', icon: '🏆', label: 'Ranking' },
  { href: '/export', icon: '📄', label: 'Exportar' },
  { href: '/settings', icon: '⚙️', label: 'Configuración' },
]
```

### **Performance Optimizations**
```typescript
// Lazy loading for heavy components
const QRScanner = dynamic(() => import('./QRScanner'), {
  loading: () => <div className="card">Loading scanner...</div>
})

// Image optimization
<Image 
  src="/badge-icon.png" 
  alt="Badge" 
  width={32} 
  height={32}
  className="inline-block"
/>
```

Esta estructura proporciona una base sólida para un MVP web-responsive con experiencia desktop-first, manteniendo la funcionalidad en dispositivos móviles cuando sea necesario. 