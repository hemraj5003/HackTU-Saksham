import React, { useState } from 'react';
import { Shield, Brain, Lock, Bell, Settings, LogOut, ChevronRight, MessageSquare, Activity, Users, AlertTriangle } from 'lucide-react';

function App() {
  const [view, setView] = useState<'landing' | 'selection' | 'dashboard'>('landing');

  const LandingPage = () => (
    <div className="min-h-screen bg-[#0a0a0f]">
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Saksham</span>
            </div>
            <button 
              onClick={() => setView('selection')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Empower Your Cybersecurity Skills
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Level up your cybersecurity awareness and education with Saksham.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-500" />,
                title: "AI-Powered Learning",
                description: "Adaptive learning paths tailored to your skill level"
              },
              {
                icon: <Activity className="h-12 w-12 text-blue-500" />,
                title: "Real-time Monitoring",
                description: "Stay updated with the latest security threats"
              },
              {
                icon: <Lock className="h-12 w-12 text-blue-500" />,
                title: "Secure Platform",
                description: "End-to-end encryption and advanced authentication"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "ZK Login",
                  description: "Secure authentication with zero-knowledge proofs"
                },
                {
                  title: "Privacy Protection",
                  description: "Advanced encryption for your sensitive data"
                },
                {
                  title: "Realtime Integration",
                  description: "Seamless integration with security tools"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const SelectionPage = () => (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Select Your Option</h2>
        <div className="space-y-4">
          <button
            onClick={() => setView('dashboard')}
            className="w-full bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors text-left group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">User</h3>
                <p className="text-gray-400">Access personal cybersecurity training and tools</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
            </div>
          </button>

          <button className="w-full bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors text-left group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Organization</h3>
                <p className="text-gray-400">Manage team security and compliance</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 min-h-screen p-4">
          <div className="flex items-center space-x-2 mb-8">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">Saksham</span>
          </div>
          
          <nav className="space-y-2">
            {[
              { icon: <Activity className="h-5 w-5" />, label: "Overview" },
              { icon: <Brain className="h-5 w-5" />, label: "Learning" },
              { icon: <AlertTriangle className="h-5 w-5" />, label: "Threats" },
              { icon: <MessageSquare className="h-5 w-5" />, label: "Chat" },
              { icon: <Users className="h-5 w-5" />, label: "Community" },
              { icon: <Settings className="h-5 w-5" />, label: "Settings" }
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-gray-900 border-b border-gray-800">
            <div className="flex justify-between items-center px-8 h-16">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-white">
                  <Bell className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setView('landing')}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          <main className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Latest Cybersecurity Activities</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                          <Shield className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">Security Alert #{index + 1}</h3>
                          <p className="text-sm text-gray-400">2 minutes ago</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">View</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
                <div className="space-y-4">
                  {['Basic Security', 'Network Defense', 'Threat Analysis'].map((course, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{course}</span>
                        <span className="text-gray-400">{(index + 1) * 25}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(index + 1) * 25}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {view === 'landing' && <LandingPage />}
      {view === 'selection' && <SelectionPage />}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;