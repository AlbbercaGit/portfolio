import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaPhp, FaNodeJs, FaLaravel, FaDocker, FaGitAlt, FaGithub, FaNpm, FaWordpress } from 'react-icons/fa'
import { SiTailwindcss, SiFigma, SiMysql,SiApache , SiMongodb, SiNextdotjs, SiNginx, SiTypescript, SiAstro } from 'react-icons/si'
import { VscTerminalBash,VscVscode  } from 'react-icons/vsc'

const technologies = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'SASS', 'Figma'],
  Backend: ['PHP', 'Node.js', 'Laravel', 'Express.js', 'MySQL', 'MongoDB', 'Next.js', 'Nginx', 'Apache'],
  Learning: [ 'Astro', 'Docker', 'TypeScript'],
  Tools: ['Git', 'GitHub', 'Terminal', 'VS Code', 'npm', 'WordPress']
}

// Mapeo de íconos por tecnología usando react-icons
const techIcons: { [key: string]: JSX.Element | null } = {
  HTML: <FaHtml5 className="w-5 h-5 mr-2 text-orange-600" />,  // Color naranja
  CSS: <FaCss3Alt className="w-5 h-5 mr-2 text-blue-600" />,   // Color azul
  JavaScript: <FaJsSquare className="w-5 h-5 mr-2 text-yellow-500" />,  // Color amarillo
  React: <FaReact className="w-5 h-5 mr-2 text-cyan-500" />,  // Color cyan
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5 mr-2 text-teal-400" />,  // Color teal
  SASS: <FaSass className="w-5 h-5 mr-2 text-pink-500" />,  // Color rosado
  Figma: <SiFigma className="w-5 h-5 mr-2 text-indigo-500" />,  // Color indigo
  PHP: <FaPhp className="w-5 h-5 mr-2 text-indigo-600" />,  // Color azul oscuro
  'Node.js': <FaNodeJs className="w-5 h-5 mr-2 text-green-600" />,  // Color verde
  Laravel: <FaLaravel className="w-5 h-5 mr-2 text-red-500" />,  // Color rojo
  'Express.js': <FaNodeJs className="w-5 h-5 mr-2 text-green-600" />,
  MySQL: <SiMysql className="w-5 h-5 mr-2 text-blue-700" />,
  MongoDB: <SiMongodb className="w-5 h-5 mr-2 text-green-500" />,
  'Next.js': <SiNextdotjs className="w-5 h-5 mr-2 text-black" />,
  Nginx: <SiNginx className="w-5 h-5 mr-2 text-green-500" />,
  Docker: <FaDocker className="w-5 h-5 mr-2 text-blue-500" />,
  Git: <FaGitAlt className="w-5 h-5 mr-2 text-red-600" />,
  GitHub: <FaGithub className="w-5 h-5 mr-2 text-gray-800" />,
  Terminal: <VscTerminalBash className="w-5 h-5 mr-2 text-gray-500" />,
  'VS Code': <VscVscode  className="w-5 h-5 mr-2 text-blue-500" />,
  'Apache': <SiApache  className="w-5 h-5 mr-2 text-orange-500" />,
  npm: <FaNpm className="w-5 h-5 mr-2 text-red-600" />,
  WordPress: <FaWordpress className="w-5 h-5 mr-2 text-blue-600" />,
  Astro: <SiAstro className="w-5 h-5 mr-2 text-yellow-500" />,
  TypeScript: <SiTypescript className="w-5 h-5 mr-2 text-blue-500" />
}

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Frontend':
      return <FaReact className="w-8 h-8 text-blue-600" />
    case 'Backend':
      return <FaNodeJs className="w-8 h-8 text-red-600" />
    case 'Learning':
      return <FaDocker className="w-8 h-8 text-yellow-300" />
    case 'Tools':
      return <FaGitAlt className="w-8 h-8 text-purple-600" />
    default:
      return null
  }
}

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-black font-inter">
      <h1 className="text-4xl md:text-5xl font-black mb-8 text-purple-600 uppercase font-inter">Tecnologías</h1>
      <p className="text-xl mb-8 font-bold">
        En mi viaje por el <span className="text-red-500">mundo del desarrollo web</span>, he cultivado{' '}
        <span className="text-yellow-300">experiencia y habilidades</span> en una variedad de tecnologías.{' '}
        <span className="text-blue-600">Mi stack tecnológico incluye:</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center mb-4">
              <CategoryIcon category={category} />
              <h2 className="text-3xl font-black ml-2">{category}</h2>
            </div>
            <ul className="space-y-2">
              {techs.map((tech) => (
                <li key={tech} className="flex items-center">
                  {techIcons[tech] || <span className="w-3 h-3 bg-purple-600 mr-2"></span>} {/* Ícono o fallback */}
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
