"use client";
import { useState } from 'react'

const projects = [
  {
    title: 'Portfolio Diego Escriche',
    description: 'Portfolio personal de Diego Escriche productor musical.',
    image: 'https://github.com/AlbbercaGit/videos/blob/main/portfolio/diego.png?raw=true    ',
    color: 'bg-purple-900',
  },
  {
    title: 'Pagina restaurante LeRomer',
    description: 'Pagina de reservas y informaciond del restaurante LeRomer.',
    image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/portfolio/romer.png',
    color: 'bg-blue-700',
  },
  {
    title: 'Pagina tienda de parquet',
    description: 'Pagina para informacion sobre la tienda de parquet valenciana.',
    image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/portfolio/lucia2.jpeg',
    color: 'bg-yellow-600',
  },
  {
    title: 'Portfolio Beatriz Dominguez',
    description: 'Portfolio personal de la fotografa Beatriz Dominguez.',
    image: 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/portfolio/bea.png',
    color: 'bg-green-700',
  },


//   {
//     title: 'Social Media Dashboard',
//     description: 'Centralized management for all your social media accounts with powerful analytics tools.',
//     image: '/placeholder.svg?height=400&width=300',
//     color: 'bg-red-700',
//   },
//   {
//     title: 'Smart Home Controller',
//     description: 'Take control of your entire home with our advanced IoT-based smart home solution.',
//     image: '/placeholder.svg?height=400&width=300',
//     color: 'bg-indigo-700',
//   },
]

export default function Component() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen p-6 flex items-center justify-center font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out ${project.color}  cursor-pointer`}
            style={{
              height: '300px',
              transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-black opacity-50" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute w-full bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-light mb-2 text-white font-lora">{project.title}</h3>
              <div className="w-full  h-0.5 bg-white mb-2"></div>

              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: hoveredProject === index ? '100px' : '0',
                  opacity: hoveredProject === index ? 1 : 0,
                }}
              >
                <p className="text-sm text-white opacity-80">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}