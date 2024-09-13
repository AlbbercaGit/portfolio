import React from 'react'
import { Code, Server, BookOpen,Wrench  } from 'lucide-react'

const technologies = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'SASS', 'Figma'],
  Backend: ['PHP', 'Node.js', 'Laravel', 'Express.js', 'MySQL', 'MongoDB', 'Next.js', 'Nginx', 'Apache'],
  Learning: ['Python', 'Astro', 'Docker', 'TypeScript'],
  Tools: ['Git', 'GitHub', 'Terminal', 'VS Code', 'npm', 'WordPress']
}

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Frontend':
      return <Code className="w-8 h-8" />
    case 'Backend':
      return <Server className="w-8 h-8" />
    case 'Learning':
      return <BookOpen className="w-8 h-8" />
    case 'Tools':
      return <Wrench className="w-8 h-8" />
    default:
      return null
  }
}

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-8   text-black font-inter">
      <h1 className="text-5xl font-black mb-8 text-purple-600 uppercase font-inter">Tecnologías</h1>
      <p className="text-xl mb-8 font-bold">
        En mi viaje por el <span className="text-red-500">mundo del desarrollo web</span>, he cultivado{' '}
        <span className="text-yellow-300">experiencia y habilidades</span> en una variedad de tecnologías.{' '}
        <span className="text-blue-600">Mi stack tecnológico incluye:</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center mb-4">
              <CategoryIcon category={category}  />
              <h2 className="text-3xl font-black ml-2 ">{category}</h2>
            </div>
            <ul className="space-y-2">
              {techs.map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 mr-2"></span>
                  <span className="text-lg font-bold">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}