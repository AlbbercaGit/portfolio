"use client";
import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Portfolio Diego Escriche',
    description: 'Portfolio personal de Diego Escriche productor musical.',
    image: 'https://github.com/AlbbercaGit/videos/blob/main/portfolio/diego.png?raw=true',
    color: 'bg-purple-600',
  },
  {
    title: 'Pagina restaurante LeRomer',
    description: 'Pagina de reservas y informaciond del restaurante LeRomer.',
    image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/portfolio/romer.png',
    color: 'bg-blue-500',
  },
  {
    title: 'Pagina tienda de parquet',
    description: 'Pagina para informacion sobre la tienda de parquet valenciana.',
    image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/portfolio/lucia2.jpeg',
    color: 'bg-yellow-500',
  },
  {
    title: 'Portfolio Beatriz Dominguez',
    description: 'Portfolio personal de la fotografa Beatriz Dominguez.',
    image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/portfolio/bea.png',
    color: 'bg-green-500',
  },
]

export default function Component() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(projects.length + 1).fill(false))
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1) {
              setVisibleItems(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6 flex items-center justify-center font-mono">
      <div className="w-full max-w-6xl">
        <h1 
          className={`text-5xl font-black mb-8 text-purple-600 uppercase font-inter transition-all duration-1000 ease-out ${
            visibleItems[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          ref={el => {itemRefs.current[0] = el}}
        >
          Proyectos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden border-4 border-black transition-all duration-1000 ease-out ${project.color} cursor-pointer ${
                visibleItems[index + 1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                height: '300px',
                transform: hoveredProject === index ? 'translate(8px, 8px)' : 'translate(0, 0)',
                boxShadow: hoveredProject === index ? 'none' : '8px 8px 0 0 #000',
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              ref={el => {itemRefs.current[index + 1] = el}}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-black p-4">
                <h3 className="text-2xl font-black mb-2 text-black uppercase">{project.title}</h3>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: hoveredProject === index ? '100px' : '0',
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                >
                  <p className="text-lg font-bold text-black">{project.description}</p>
                </div>
              </div>
              <div 
                className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 ease-in-out"
                style={{
                  // opacity: hoveredProject === index ? 0.3 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}