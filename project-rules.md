# 📘 project-rules.md – Reglas internas del proyecto StellaImpact

Este archivo define los principios técnicos, éticos y de escalabilidad para el desarrollo y mantenimiento de StellaImpact.

---

## 🧠 Propósito

Transformar acciones simbólicas en reputación visible y verificable sobre Stellar, especialmente en contextos educativos.

---

## 📦 Estructura del proyecto

- Frontend: Next.js + TailwindCSS
- Backend: API `/api` en Vercel
- Onchain: Stellar testnet + Freighter
- Validación: QR + input manual + foto/POAP

---

## 🔁 Reglas de modularidad

- Cada validación debe ser un módulo independiente (`/api/validate`)
- La lógica de reputación debe estar desacoplada del frontend
- El dashboard simbólico debe poder escalar por institución

---

## 🧪 Reglas de testeo

- Todo lo simbólico debe ser simulado en testnet
- Usar wallets dummy para pruebas
- Validaciones deben poder verse en el UI incluso si son mock

---

## ⚠️ Advertencias clave

- No convertir el MVP en un sistema de becas reales (no estamos en compliance financiero)
- Evitar ambigüedades en los roles (ej. embajador no es organizador)
- Siempre mostrar reputación visible para evitar sensación de vacío

---

## 🌍 Futuro y expansión

- Escalabilidad a más instituciones
- Integración con credenciales DID o Gitcoin Passport
- Posible conexión con DAO simbólica para votaciones reputacionales

---
