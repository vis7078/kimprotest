import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="#profile" className="hover:text-blue-400 transition-colors">Profile</Link>
            <Link href="#introduce" className="hover:text-purple-400 transition-colors">Introduce</Link>
            <Link href="#skills" className="hover:text-pink-400 transition-colors">Skills</Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 