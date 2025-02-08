'use client';

import { useState } from 'react';
import { Shield, Brain, Lock, Bell, Settings, LogOut, ChevronRight, MessageSquare, Activity, Users, AlertTriangle, BookOpen, Edit3 } from 'lucide-react';
import dynamic from 'next/dynamic';

const LandingAnimation = dynamic(() => import('./components/LandingAnimation'), { ssr: false });

export default function Page() {
  const [view, setView] = useState<'landing' | 'selection' | 'dashboard'>('landing');

  const LandingPage = () => (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <LandingAnimation />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Secure Your Digital Future
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Empowering individuals and organizations with cutting-edge cybersecurity knowledge, tools, and community support.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button 
              onClick={() => setView('selection')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
            <button 
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SelectionView = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 overflow-hidden">
      {/* Background Particles Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-100 to-purple-200 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200/30 via-purple-200/20 to-transparent opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <nav className="border-b border-white/10 backdrop-blur-xl bg-white/60 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-indigo-600" />
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Saksham</span>
              </div>
            </div>
        </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 relative z-20">
            <div 
              onClick={() => setView('dashboard')}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-indigo-500 transition-all duration-300 cursor-pointer shadow-2xl transform hover:-translate-y-2 hover:shadow-indigo-500/50"
            >
              <div className="mb-4">
                <div className="h-20 w-20 bg-indigo-500/10 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Users className="h-10 w-10 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">User Portal</h2>
                <p className="text-gray-600">Personalized cybersecurity learning and insights</p>
              </div>
              <ChevronRight className="h-6 w-6 text-indigo-600 mt-4" />
            </div>

            <div 
              onClick={() => setView('dashboard')}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-purple-500 transition-all duration-300 cursor-pointer shadow-2xl transform hover:-translate-y-2 hover:shadow-purple-500/50"
            >
              <div className="mb-4">
                <div className="h-20 w-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Shield className="h-10 w-10 text-purple-600" />
                </div>
                <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">Organization Hub</h2>
                <p className="text-gray-600">Advanced security management and training</p>
              </div>
              <ChevronRight className="h-6 w-6 text-purple-600 mt-4" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 text-black">
      <div className="relative z-10">
        <nav className="border-b border-white/10 backdrop-blur-xl bg-white/60 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-indigo-600" />
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Saksham: The Future of Cybersecurity</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors">
                  <Bell className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setView('landing')}
                  className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Header Section */}
          <section className="text-center mb-16 bg-white/80 backdrop-blur-xl rounded-2xl p-16 shadow-2xl">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              Saksham: The Future of Cybersecurity
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Empowering individuals and organizations with cutting-edge cybersecurity knowledge, tools, and community support.
            </p>
            
            <div className="flex justify-center space-x-6">
              <button 
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Learning Paths</span>
              </button>
              
              <button 
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 flex items-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Join Community</span>
              </button>
              
              <button 
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-300 flex items-center space-x-2"
              >
                <Edit3 className="h-5 w-5" />
                <span>Blogs & Insights</span>
              </button>
            </div>
          </section>

          {/* Learning Blogs Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Learning Hub
              </h2>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Zero Trust Architecture",
                  excerpt: "Comprehensive guide to implementing zero trust security models",
                  author: "Alex Johnson",
                  date: "Feb 15, 2024"
                },
                {
                  title: "AI in Cybersecurity",
                  excerpt: "How artificial intelligence is revolutionizing threat detection",
                  author: "Sarah Martinez",
                  date: "Jan 22, 2024"
                },
                {
                  title: "Blockchain Security",
                  excerpt: "Exploring the potential of blockchain in cybersecurity",
                  author: "Michael Chen",
                  date: "Mar 5, 2024"
                }
              ].map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                >
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Blocks Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 text-center">
              Trending Cybersecurity Topics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Shield className="h-10 w-10 text-indigo-600" />,
                  title: "Cloud Security",
                  trend: "+45% Interest"
                },
                {
                  icon: <Lock className="h-10 w-10 text-purple-600" />,
                  title: "Zero Trust",
                  trend: "+38% Growth"
                },
                {
                  icon: <Activity className="h-10 w-10 text-blue-600" />,
                  title: "AI Defense",
                  trend: "+52% Adoption"
                },
                {
                  icon: <Users className="h-10 w-10 text-green-600" />,
                  title: "Community Security",
                  trend: "+33% Engagement"
                }
              ].map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30 hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                >
                  <div className="mb-4 flex justify-center">{topic.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{topic.title}</h3>
                  <p className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    {topic.trend}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Community Section */}
          <section className="bg-white/80 backdrop-blur-xl rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              Join Our Cybersecurity Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with cybersecurity professionals, share insights, and stay ahead of emerging threats.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Join Community
              </button>
              <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );

  return (
    <div>
      {view === 'landing' && <LandingPage />}
      {view === 'selection' && <SelectionView />}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}