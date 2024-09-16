'use client'

import { useState, useEffect, useRef } from 'react'

const sections = [
  { id: 'hero', name: 'INICIO' },
  { id: 'Experiencia', name: 'EXPERIENCIA' },
  { id: 'proyectos', name: 'PROYECTOS' },
  { id: 'tecnologias', name: 'TECNOLOGÍAS' },
]

export default function DynamicNavBar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            setIsAnimating(true)
            
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
            
            timeoutRef.current = setTimeout(() => {
              setIsAnimating(false)
            }, 1000) // La animación dura 2 segundos
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => {
      observer.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div 
        className={`
          bg-blue-700 text-yellow-300 font-vcr p-4 font-bold text-xl
          transform transition-all duration-300 ease-in-out
          ${isAnimating ? 'translate-x-0' : 'translate-x-full'}
          shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black
        `}
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
        <div className="text-center">
          <span className="inline-block transition-all duration-300 ease-in-out" key={activeSection}>
            {sections.find((section) => section.id === activeSection)?.name || 'NAVEGACIÓN'}
          </span>
        </div>
      </div>
    </nav>
  )
}