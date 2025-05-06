// src/components/ui/card.tsx
import { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl shadow-lg bg-white p-4 ${className}`}>
      {children}
    </div>
  )
}
