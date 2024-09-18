"use client"

import React, { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { FaJava, FaJs, FaAngular } from 'react-icons/fa'
import { SiMysql, SiApache, SiMulesoft, SiTypescript } from 'react-icons/si'

const timelineData = [
  {
    date: 'Mayo 2024 - Actualidad',
    title: 'Backend Developer en Sopra Steria',
    description: (<>
      Actualmente, trabajo con tecnologías como <span className="text-orange-600">Java</span>, <span className="text-yellow-500">JavaScript</span> y <span className="text-blue-700">MySQL</span>, desarrollando soluciones tanto en <span className="text-green-400">front-end</span> como en <span className="text-green-400">back-end</span>. Además, gestiono servidores utilizando herramientas como <span className="text-orange-500">Apache</span> y <span className="text-blue-500">Mule</span>, enfocándome en optimizar su rendimiento y garantizar su funcionamiento eficiente.
    </>),
    link: 'https://www.soprasteria.com',
    icons: [
      <FaJava key="java" className="w-5 h-5 mr-2" style={{ fill: '#007396' }} />,       
      <FaJs key="js" className="w-5 h-5 mr-2" style={{ fill: '#F7DF1E' }} />,           
      <SiMysql key="mysql" className="w-5 h-5 mr-2" style={{ fill: '#00758F' }} />,    
      <SiApache key="apache" className="w-5 h-5 mr-2" style={{ fill: '#D22128' }} />,  
      <SiMulesoft key="mule" className="w-5 h-5 mr-2" style={{ fill: '#008080' }} />   
    ]
      },
  {
    date: 'Mayo 2021 - Mayo 2024',
    title: 'Backend Developer en Praxya',
    description: (<>
      Trabajé con tecnologías como <span className="text-blue-500">Ekon</span>, <span className="text-orange-600">Java</span>, <span className="text-yellow-500">JavaScript</span>, <span className="text-red-600">Angular</span>, <span className="text-blue-700">MySQL Server</span> y <span className="text-pink-500">microservicios</span>, además de gestionar el soporte para proyectos de clientes y toma de requisitos.
    </>),
    link: 'https://www.linkedin.com/company/praxya-group/posts/?feedView=all',
    icons: [
      <SiTypescript key="ts" className="w-5 h-5 mr-2" style={{ fill: '#2563EB' }} />,  
      <FaJava key="java" className="w-5 h-5 mr-2" style={{ fill: '#007396' }} />,       
      <FaJs key="js" className="w-5 h-5 mr-2" style={{ fill: '#F7DF1E' }} />,           
      <FaAngular key="angular" className="w-5 h-5 mr-2" style={{ fill: '#DD0031' }} />,
      <SiMysql key="mysql" className="w-5 h-5 mr-2" style={{ fill: '#00758F' }} />      
    ]  },
  {
    date: 'Septiembre 2019 - Mayo 2021',
    title: 'Estudios en Desarrollo de Aplicaciones Web',
    description: 'Realicé los estudios de DAW en el instituto Camp de Morvedre del Puerto de Sagunto.',
    icons: []
  }
]

export default function Component() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(timelineData.length).fill(false))
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
      { threshold: 0.75 }
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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl md:text-5xl font-black mb-8 text-blue-700 uppercase font-vcr">Experiencia</h1>
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className={`relative transition-all duration-1000 ease-out ${
              visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={el => {
              itemRefs.current[index] = el;
            }}
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-black"></div>
            <div className="ml-8 p-4 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-lg font-bold text-black mb-1 font-inter">{item.date}</div>
              <h2 className="text-2xl font-black mb-2 text-black font-inter">{item.title}</h2>
              <p className="text-lg font-bold text-black font-inter mb-4 text-wrap w-[95%]">{item.description}</p>
              {item.icons.length > 0 && (
                <div className="flex space-x-2 mb-4">
                  {item.icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl">
                      {React.cloneElement(icon, { className: "w-6 h-6" })}
                    </div>
                  ))}
                </div>
              )}
              {item.link && (
                <a 
                  href={item.link} 
                  className="inline-flex font-inter items-center px-4 py-2 bg-blue-700 text-white font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
                >
                  Learn more
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}