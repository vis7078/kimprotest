import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  const techSkills = [
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-500' },
    { name: 'React', color: 'from-cyan-400 to-cyan-500' },
    { name: 'Tailwind', color: 'from-teal-400 to-teal-500' },
    { name: 'Premierepro', color: 'from-purple-400 to-purple-500' }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Profile Card */}
      <section id="profile" className="max-w-4xl mx-auto mt-8 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-8 w-full border-b border-slate-700 pb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Profile : Title
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="w-48 h-48 relative">
              <Image
                src="/profile.png"
                alt="Profile"
                width={192}
                height={192}
                className="rounded-full border-2 border-slate-700 ring-2 ring-blue-500/50"
              />
            </div>

            <div className="flex-1 space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="font-bold mb-2 text-blue-400">_I AM</h3>
                <p>이름: 이프로</p>
                <p>포지션: PM 서비스 기획 / FE Developer(jr)</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="font-bold mb-2 text-purple-400">_Contact</h3>
                <p>Email: leepro@naver.com</p>
                <p>Phone: +082-1234-5678</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="font-bold mb-2 text-pink-400">_Channel</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-20">SNS:</span>
                    <input type="text" className="flex-1 h-8 bg-slate-700/50 rounded-md border border-slate-600 px-3" />
                  </div>
                  <div className="flex items-center">
                    <span className="w-20">GitHub:</span>
                    <input type="text" className="flex-1 h-8 bg-slate-700/50 rounded-md border border-slate-600 px-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduce Section */}
      <section id="introduce" className="max-w-4xl mx-auto mt-8 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-slate-700 pb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Introduce
        </h2>
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <p>간단한 자기소개 및 인사말</p>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto mt-8 mb-8 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-slate-700 pb-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          Tech Skill
        </h2>
        <div className="flex flex-wrap gap-4">
          {techSkills.map((skill) => (
            <div 
              key={skill.name} 
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium shadow-lg hover:scale-105 transition-transform cursor-default`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}