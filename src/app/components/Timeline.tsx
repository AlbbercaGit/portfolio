"use client"

import React, { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

const timelineData = [
  {
    date: 'February 2022',
    title: 'Application UI code in Tailwind CSS',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    link: '#'
  },
  {
    date: 'March 2022',
    title: 'Marketing UI design in Figma',
    description: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
  },
  {
    date: 'April 2022',
    title: 'E-Commerce UI code in Tailwind CSS',
    description: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
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
      <h1 className="text-5xl font-black mb-8 text-purple-600 uppercase font-inter">Experiencia</h1>
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className={`relative transition-all duration-1000 ease-out ${
              visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={el => {
              itemRefs.current[index] = el;
            }}          >
            <div className="absolute left-0 top-0 w-1 h-full bg-black"></div>
            <div className="ml-8 p-4 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-lg font-bold text-black mb-1 font-inter">{item.date}</div>
              <h2 className="text-2xl font-black mb-2 text-black font-inter">{item.title}</h2>
              <p className="text-lg font-bold text-black font-inter mb-4">{item.description}</p>
              {item.link && (
                <a 
                  href={item.link} 
                  className="inline-flex font-inter items-center px-4 py-2 bg-purple-600 text-white font-bold uppercase tracking-wider hover:bg-purple-700 transition-colors"
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