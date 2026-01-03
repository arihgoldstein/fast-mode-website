import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Zap, Globe, Lock, Code, Cpu, Layout, FileText, Send, Search, ChevronDown, Settings, Database, MessageSquare, Plus, MoreHorizontal, MousePointer2, Briefcase, Users, Server, Layers, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                FastMode
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#features" className="hover:text-indigo-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                <Link href="/pricing" className="hover:text-indigo-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              </div>
            </div>
            <div>
              <Link
                href="https://app.fastmode.ai/login"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/10"
              >
                Log in
              </Link>
              <Link
                href="https://app.fastmode.ai/register"
                className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          {/* Background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="absolute top-40 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              The AI-Native CMS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
              Turn AI Websites into <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                Production-Ready CMS Sites
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              Stop manually rebuilding AI prototypes. Instantly generate a headless CMS, deploy to a global network, and enable visual editing for any AI-generated code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.fastmode.ai/register"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition-all shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                View Demo
              </Link>
            </div>

            {/* Visual Element Placeholder - App Interface */}
            <div className="mt-20 relative mx-auto max-w-[1200px] pointer-events-none select-none text-left">
              <div className="relative rounded-2xl border-2 border-indigo-500/40 bg-slate-950 overflow-hidden group" style={{boxShadow: '0 0 80px -10px rgba(99, 102, 241, 0.5), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
                <div className="flex h-[600px] md:h-[700px] rounded-2xl overflow-hidden">
                  
                  {/* Sidebar 1: Main Nav */}
                  <div className="w-64 bg-slate-950 border-r border-white/5 flex-col flex-shrink-0 hidden lg:flex">
                    <div className="p-4 flex items-center gap-2 border-b border-white/5 h-14">
                      <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-bold text-white tracking-tight">Fastmode</span>
                    </div>
                    
                    <div className="p-2">
                       <div className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-300 bg-white/5 rounded-lg mb-4">
                         <div className="flex items-center gap-2">
                           <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">E</div>
                           <span className="truncate max-w-[120px]">Elevate Digital</span>
                         </div>
                         <ChevronDown className="w-4 h-4 text-slate-500" />
                       </div>

                       <nav className="space-y-1">
                          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-[#1e1b4b] text-indigo-300 rounded-lg">
                            <Layout className="w-4 h-4" /> Editor
                          </button>
                          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-transparent text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Database className="w-4 h-4" /> CMS
                          </button>
                          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-transparent text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <MessageSquare className="w-4 h-4" /> Forms
                          </button>
                          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-transparent text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                            <Settings className="w-4 h-4" /> Settings
                          </button>
                       </nav>
                    </div>

                    <div className="mt-auto p-4 border-t border-white/5">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 border border-white/10">D</div>
                          <div className="flex flex-col">
                             <span className="text-sm text-white font-medium">Demo User</span>
                             <span className="text-xs text-slate-500">demo@fastmode.com</span>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Sidebar 2: Pages */}
                  <div className="w-64 bg-slate-900 border-r border-white/5 flex-col flex-shrink-0 hidden xl:flex">
                     <div className="p-4 border-b border-white/5 h-14 flex items-center justify-between">
                        <span className="text-sm font-medium text-white">Pages</span>
                        <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-slate-400">12</span>
                     </div>
                     <div className="p-3">
                        <div className="flex items-center gap-2 mb-4 bg-slate-950 border border-white/10 rounded-lg px-3 py-1.5">
                           <Search className="w-4 h-4 text-slate-500 shrink-0" />
                           <input type="text" placeholder="Search pages..." className="flex-1 bg-transparent text-sm text-slate-300 placeholder-slate-600 focus:outline-none" />
                        </div>
                        
                        <div className="space-y-0.5 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                           <div className="px-3 py-2 bg-[#1e1b4b] text-indigo-300 rounded-lg text-sm font-medium flex flex-col gap-0.5 group cursor-pointer">
                              <span>Home</span>
                              <span className="text-[10px] opacity-60">/</span>
                           </div>
                           {[
                             { name: 'About Us', path: '/about' },
                             { name: 'Authors', path: '/authors', badge: 'CMS' },
                             { name: 'Client Login', path: '/client-login' },
                             { name: 'Contact', path: '/contact' },
                             { name: 'Downloads', path: '/downloads', badge: 'CMS' },
                             { name: 'Managed Accounts', path: '/managed-accounts' },
                             { name: 'Blog', path: '/blog', badge: 'CMS' },
                           ].map((page) => (
                             <div key={page.name} className="px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer flex items-center justify-between group">
                                <div className="flex flex-col gap-0.5 flex-1">
                                   <span className="transition-colors text-slate-300 group-hover:text-white">{page.name}</span>
                                   <span className="text-[10px] text-slate-600">{page.path}</span>
                                </div>
                                {page.badge && <span className="text-[10px] bg-slate-800 border border-white/5 px-1.5 py-0.5 rounded text-slate-500 shrink-0 ml-2">{page.badge}</span>}
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Main Canvas Area */}
                  <div className="flex-1 bg-slate-100 flex flex-col relative min-w-0 overflow-hidden">
                     {/* Top Bar */}
                     <div className="h-14 bg-slate-950 border-b border-white/5 flex items-center justify-between px-4 z-10">
                        <div className="flex items-center gap-4">
                           <div className="flex items-center gap-2 text-sm text-slate-400">
                              <Globe className="w-4 h-4" />
                              <span>/</span>
                              <span className="text-white">Live</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <button className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded hover:bg-slate-700 transition-colors">SEO</button>
                           <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-md hover:bg-indigo-500 transition-colors flex items-center gap-1">
                              <ArrowRight className="w-3 h-3 -rotate-45" /> View Live
                           </button>
                        </div>
                     </div>

                     {/* Website Preview Iframe/Container - Static & Non-interactive */}
                     <div className="flex-1 bg-white relative overflow-hidden pointer-events-none select-none">
                        <div className="w-full h-full bg-white text-slate-900 flex flex-col">
                           {/* Website Nav */}
                           <div className="h-20 border-b border-slate-100 flex items-center justify-between px-8 bg-white/90 backdrop-blur shrink-0">
                              <div className="font-sans text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                 </div>
                                 Elevate
                              </div>
                              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                                 {['Services', 'Work', 'Agency', 'Meme Strategy'].map(link => (
                                    <span key={link} className="text-slate-600">{link}</span>
                                 ))}
                                 <div className="px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-full text-sm">
                                    Start Project
                                 </div>
                              </div>
                           </div>

                           {/* Website Hero - Centered Layout */}
                           <div className="relative flex-1 flex items-center justify-center p-4 lg:p-8 overflow-hidden">
                              {/* Background Decorations */}
                              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                              <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                                 <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] lg:text-xs text-blue-700 mb-8 font-bold uppercase tracking-wide">
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                                    Voted #1 Agency by my Mom
                                    
                                    {/* Editor UI Overlay - Floating Toolbar positioned over the badge */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/4 bg-slate-900 text-white rounded-lg shadow-xl flex items-center p-1 gap-0.5 z-20">
                                       <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer"><span className="font-bold text-xs">B</span></div>
                                       <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer"><span className="italic text-xs">/</span></div>
                                       <div className="w-px h-3 bg-white/20 mx-0.5"></div>
                                       <div className="flex items-center gap-1 px-1.5 py-1 hover:bg-white/10 rounded cursor-pointer text-white">
                                          <Zap className="w-3 h-3" />
                                          <span className="text-xs font-medium">AI Rewrite</span>
                                       </div>
                                    </div>
                                 </div>
                                 
                                 <div className="relative group mb-8">
                                    <h1 className="text-5xl lg:text-7xl font-sans font-bold leading-[1.1] tracking-tight text-slate-900">
                                       Digital Products <br/>
                                       <span className="relative inline-block mt-2">
                                          <span className="bg-blue-100 px-2 py-1">That Go Brrr.</span>
                                          {/* Cursor line at end of text */}
                                          <span className="absolute right-0 top-1 bottom-1 w-0.5 bg-blue-600"></span>
                                          {/* You label */}
                                          <div className="absolute right-0 translate-x-full top-1/2 -translate-y-1/2 ml-3">
                                             <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap">
                                                You
                                             </div>
                                          </div>
                                       </span>
                                    </h1>
                                 </div>
                                 
                                 <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
                                    We build pixel-perfect websites that convert visitors into fans. Zero fluff, 100% ROI, and occasional high-fives.
                                 </p>
                                 
                                 <div className="flex flex-wrap justify-center gap-3 mb-10">
                                    <div className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full shadow-xl shadow-blue-600/20 flex items-center gap-2 text-sm">
                                       View Our Work <ArrowRight className="w-4 h-4" />
                                    </div>
                                    <div className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full text-sm">
                                       Contact Sales
                                    </div>
                                 </div>
                                 
                                 <div className="flex items-center gap-4 pt-8 border-t border-slate-100 w-full max-w-xs justify-center">
                                    <div className="flex -space-x-3">
                                       {[1,2,3,4].map(i => (
                                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                             <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-blue-200 to-indigo-200' : i === 2 ? 'from-pink-200 to-rose-200' : i === 3 ? 'from-amber-200 to-orange-200' : 'from-emerald-200 to-teal-200'}`}></div>
                                          </div>
                                       ))}
                                    </div>
                                    <div className="text-xs font-medium text-slate-600">
                                       Trusted by <span className="text-slate-900 font-bold">2,000+</span> companies
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-sm text-slate-500 mb-6">More than 100+ companies partner</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {['Vision', 'Tracea', 'Cactusc', 'Nextmov', 'Greenish', 'Chainan', 'Huesue'].map((brand) => (
                  <span key={brand} className="text-lg font-semibold">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-900/50 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-12 md:mb-16">AI-built websites are hard to manage.</h2>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                 <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-red-500/30 transition-colors group">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                       <Code className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Stuck in Static Code</h3>
                    <p className="text-sm sm:text-base text-slate-400">Great for prototypes, but impossible to manage at scale. Every edit requires diving back into the code.</p>
                 </div>
                 <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-orange-500/30 transition-colors group">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                       <Database className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">No CMS Structure</h3>
                    <p className="text-sm sm:text-base text-slate-400">Content is hardcoded. Marketing teams can't update blogs, team pages, or pricing without developer help.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Solution Section Intro */}
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-indigo-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">Solution</span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">The bridge from AI to Production</h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
                 We automate the infrastructure so you can focus on shipping.
              </p>
           </div>
        </section>


        {/* Deep Dive 2: CMS */}
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-slate-900/20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                      <Layout className="w-4 h-4" /> Connect Once
                   </div>
                   <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                      Automatic CMS Generation
                   </h2>
                   <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                      We parse your content and create structured collections instantly. Generate your site using your favorite AI web development tools, and we'll handle the rest.
                   </p>
                   
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors">
                         <div className="text-2xl font-bold text-white mb-1">Auto</div>
                         <div className="text-sm text-slate-400">Schema Gen</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors">
                         <div className="text-2xl font-bold text-white mb-1">Zero</div>
                         <div className="text-sm text-slate-400">Setup Time</div>
                      </div>
                   </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                   {/* Product Screenshot: CMS Interface */}
                   <div className="relative w-full aspect-[4/3] rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden flex flex-col group select-none">
                      {/* Sidebar + Main */}
                      <div className="flex h-full">
                         {/* Mini Sidebar */}
                         <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-slate-900/50">
                            <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                               <Database className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-lg hover:bg-white/5 text-slate-500 flex items-center justify-center">
                               <FileText className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-lg hover:bg-white/5 text-slate-500 flex items-center justify-center">
                               <Users className="w-4 h-4" />
                            </div>
                         </div>

                         {/* Content Area */}
                         <div className="flex-1 flex flex-col">
                            {/* Header */}
                            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-slate-900/20">
                               <div className="flex items-center gap-3">
                                  <h3 className="font-bold text-white">Blog Posts</h3>
                                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-slate-400">128 items</span>
                               </div>
                               <button className="px-3 py-1.5 bg-pink-600 text-white text-xs font-bold rounded-lg hover:bg-pink-500 transition-colors flex items-center gap-2">
                                  <Plus className="w-3 h-3" /> New Post
                               </button>
                            </div>

                            {/* Table */}
                            <div className="p-4 space-y-1">
                               {/* Header Row */}
                               <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-slate-500 border-b border-white/5">
                                  <div className="col-span-5">Title</div>
                                  <div className="col-span-3">Status</div>
                                  <div className="col-span-3">Author</div>
                                  <div className="col-span-1"></div>
                               </div>
                               {/* Rows */}
                               {[
                                  { title: "The Future of Web Dev", status: "Published", author: "Arih G.", color: "emerald" },
                                  { title: "Why AI Matters", status: "Draft", author: "Sarah K.", color: "amber" },
                                  { title: "Scaling to 1M Users", status: "Published", author: "Mike R.", color: "emerald" },
                                  { title: "Design Systems 101", status: "Review", author: "Jessica T.", color: "blue" },
                               ].map((row, i) => (
                                  <div key={i} className="grid grid-cols-12 gap-4 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors items-center group/row cursor-default">
                                     <div className="col-span-5 font-medium text-slate-200 truncate">{row.title}</div>
                                     <div className="col-span-3">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${
                                           row.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                                           row.color === 'amber' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                           'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                        }`}>
                                           {row.status}
                                        </span>
                                     </div>
                                     <div className="col-span-3 text-sm text-slate-500 flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-slate-800 text-[10px] flex items-center justify-center border border-white/10">{row.author[0]}</div>
                                        {row.author}
                                     </div>
                                     <div className="col-span-1 text-right opacity-0 group-hover/row:opacity-100">
                                        <MoreHorizontal className="w-4 h-4 text-slate-500" />
                                     </div>
                                  </div>
                               ))}
                            </div>
                            
                            {/* Auto-Gen Notice */}
                            <div className="mt-auto m-4 p-3 bg-pink-500/5 border border-pink-500/10 rounded-lg flex items-center gap-3">
                               <div className="w-8 h-8 rounded bg-pink-500/10 flex items-center justify-center shrink-0">
                                  <Zap className="w-4 h-4 text-pink-400" />
                               </div>
                               <div>
                                  <div className="text-xs font-bold text-white">Auto-Schema Active</div>
                                  <div className="text-[10px] text-slate-400">Scanning codebase for new types...</div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* Deep Dive 3: Visual Editor */}
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                <div className="order-1 lg:order-1 relative">
                   {/* Product Screenshot: Visual Editor */}
                   <div className="relative w-full aspect-[4/3] rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden flex flex-col group cursor-text select-none">
                      {/* Editor Chrome */}
                      <div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-slate-900/50">
                         <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-slate-500 hover:text-white transition-colors cursor-pointer">
                               <ArrowRight className="w-4 h-4 rotate-180" />
                            </div>
                            <div className="h-4 w-px bg-white/10" />
                            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 cursor-pointer">
                               <span className="text-xs font-medium text-slate-300">Home Page</span>
                               <ChevronDown className="w-3 h-3 text-slate-500" />
                            </div>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Editing</div>
                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                         </div>
                      </div>

                      {/* Editor Canvas */}
                      <div className="flex-1 bg-[#0B0D13] relative overflow-hidden p-6 flex items-center justify-center">
                         {/* Website Preview (Scaled) */}
                         <div className="w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden relative">
                            {/* Hero Section of Edited Site */}
                            <div className="p-8 text-center bg-white text-slate-900">
                               <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600 mb-4">
                                  New Feature
                               </div>
                               
                               {/* Selected Element */}
                               <div className="relative group/edit cursor-text">
                                  <h2 className="text-3xl font-bold mb-4 leading-tight outline-none ring-2 ring-cyan-500/50 rounded px-2 -mx-2 bg-cyan-50/50">
                                     Ship Faster. <br/>
                                     <span className="text-cyan-600">Edit Visually.</span>
                                  </h2>
                                  
                                  {/* Floating Toolbar */}
                                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-lg shadow-xl flex items-center p-1.5 gap-1 z-20 scale-90 opacity-0 group-hover/edit:opacity-100 transition-all">
                                     <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer"><span className="font-bold text-xs">B</span></div>
                                     <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer"><span className="italic text-xs">I</span></div>
                                     <div className="w-px h-3 bg-white/20 mx-1"></div>
                                     <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-white/10 rounded cursor-pointer text-cyan-300">
                                        <Zap className="w-3 h-3" />
                                        <span className="text-xs font-medium">Rewrite</span>
                                     </div>
                                  </div>
                                  
                                  {/* User Cursor */}
                                  <div className="absolute -right-4 bottom-0 flex flex-col items-center">
                                     <MousePointer2 className="w-4 h-4 text-cyan-500 fill-cyan-500" />
                                     <div className="bg-cyan-500 text-white text-[8px] font-bold px-1.5 rounded-full mt-1">You</div>
                                  </div>
                               </div>

                               <p className="text-sm text-slate-500 mb-6">
                                  Stop wrestling with CMS schemas. Just point, click, and publish.
                               </p>
                               <div className="inline-block px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-full">
                                  Get Started
                               </div>
                            </div>
                         </div>
                         
                         {/* Properties Panel (Floating) */}
                         <div className="absolute right-4 top-4 w-48 bg-slate-900/90 backdrop-blur border border-white/10 rounded-lg p-3 shadow-2xl">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Typography</div>
                            <div className="space-y-2">
                               <div className="flex justify-between items-center text-xs text-slate-300">
                                  <span>Size</span>
                                  <span className="font-mono text-slate-500">32px</span>
                               </div>
                               <div className="flex justify-between items-center text-xs text-slate-300">
                                  <span>Weight</span>
                                  <span className="font-mono text-slate-500">Bold</span>
                               </div>
                               <div className="flex justify-between items-center text-xs text-slate-300">
                                  <span>Color</span>
                                  <div className="w-3 h-3 bg-slate-900 border border-slate-700 rounded" />
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="order-2 lg:order-2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                      <FileText className="w-4 h-4" /> Edit & Publish
                   </div>
                   <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                      Visual Page Editing
                   </h2>
                   <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                      Visually edit content and push to production instantly. Why ask an AI to "change the headline" when you can just click it?
                   </p>
                   
                   <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                         <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <span className="text-lg font-bold text-cyan-400">1</span>
                         </div>
                         <div>
                            <h4 className="text-white font-medium">Click to Edit</h4>
                            <p className="text-sm text-slate-400">Select any element directly on the page.</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                         <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <span className="text-lg font-bold text-cyan-400">2</span>
                         </div>
                         <div>
                            <h4 className="text-white font-medium">Type Your Changes</h4>
                            <p className="text-sm text-slate-400">What you see is exactly what you get.</p>
                         </div>
                      </div>
                       <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                         <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <span className="text-lg font-bold text-cyan-400">3</span>
                         </div>
                         <div>
                            <h4 className="text-white font-medium">Publish Instantly</h4>
                            <p className="text-sm text-slate-400">Push to production with a single click.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Deep Dive 1: Scale/Hosting */}
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                <div className="relative order-1 lg:order-1">
                   {/* Product Screenshot: Deployment Dashboard */}
                   <div className="relative w-full aspect-[4/3] rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden flex flex-col group select-none">
                      {/* Dashboard Header */}
                      <div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-slate-900/50">
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-slate-700" />
                            <span className="text-xs font-medium text-slate-400">elevate-digital / deployments</span>
                         </div>
                         <div className="flex gap-2">
                            <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                         </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-6 flex-1 bg-slate-950/80">
                         <div className="mb-6">
                            <h4 className="text-sm font-medium text-slate-400 mb-4">Latest Deployment</h4>
                            <div className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
                               <div className="flex justify-between items-start mb-3">
                                  <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                     </div>
                                     <div>
                                        <div className="text-sm font-bold text-white">Production Update</div>
                                        <div className="text-xs text-slate-500 font-mono">git commit 8a2f9c</div>
                                     </div>
                                  </div>
                                  <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                                     Live
                                  </span>
                               </div>
                               <div className="grid grid-cols-3 gap-4 pt-3 border-t border-white/5">
                                  <div>
                                     <div className="text-[10px] text-slate-500 mb-1">Duration</div>
                                     <div className="text-xs font-mono text-slate-300">1.2s</div>
                                  </div>
                                  <div>
                                     <div className="text-[10px] text-slate-500 mb-1">Branch</div>
                                     <div className="text-xs font-mono text-slate-300">main</div>
                                  </div>
                                  <div>
                                     <div className="text-[10px] text-slate-500 mb-1">Initiator</div>
                                     <div className="text-xs font-mono text-slate-300">FastMode AI</div>
                                  </div>
                               </div>
                            </div>
                         </div>

                         <div>
                            <h4 className="text-sm font-medium text-slate-400 mb-4">Edge Network Status</h4>
                            <div className="space-y-2">
                               <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                  <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                     <span className="text-sm text-slate-300">San Francisco, US</span>
                                  </div>
                                  <span className="font-mono text-xs text-emerald-400">12ms</span>
                               </div>
                               <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                  <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                     <span className="text-sm text-slate-300">London, UK</span>
                                  </div>
                                  <span className="font-mono text-xs text-emerald-400">24ms</span>
                               </div>
                               <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                  <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                     <span className="text-sm text-slate-300">Tokyo, JP</span>
                                  </div>
                                  <span className="font-mono text-xs text-emerald-400">85ms</span>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="order-2 lg:order-2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                      <Globe className="w-4 h-4" /> Global Network
                   </div>
                   <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                      Headless CMS + Hosting
                   </h2>
                   <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                      Link your project once. We automatically generate schemas and relationships, then deploy to a global edge network. Zero configuration, 100% peace of mind.
                   </p>
                   
                   <div className="space-y-4">
                      <div className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                            <Zap className="w-4 h-4 text-indigo-400" />
                         </div>
                         <div>
                            <h4 className="text-white font-semibold mb-1">Instant Propagation</h4>
                            <p className="text-slate-400 text-sm">Changes go live worldwide in under 100ms.</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 mt-1">
                            <Lock className="w-4 h-4 text-violet-400" />
                         </div>
                         <div>
                            <h4 className="text-white font-semibold mb-1">Enterprise Security</h4>
                            <p className="text-slate-400 text-sm">DDoS protection and SSL included by default.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Replacement Section: Developer Experience / Stack */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-900/30 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
                 <div className="order-2 lg:order-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                       Your stack, supercharged.
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8">
                       Don't change how you build. FastMode integrates directly with your GitHub repository and works with any modern frontend framework.
                    </p>
                    
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                             <Code className="w-5 h-5 text-indigo-400" />
                          </div>
                          <div>
                             <h4 className="text-white font-semibold mb-1">Type-Safe SDKs</h4>
                             <p className="text-slate-400 text-sm">Auto-generated TypeScript types for all your content collections.</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
                             <Zap className="w-5 h-5 text-violet-400" />
                          </div>
                          <div>
                             <h4 className="text-white font-semibold mb-1">Zero-Config Deployment</h4>
                             <p className="text-slate-400 text-sm">Push to GitHub, and we handle the build, cache, and edge distribution.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="relative order-1 lg:order-2">
                    {/* Code Window Visual */}
                    <div className="rounded-xl bg-[#0F1117] border border-white/10 overflow-hidden shadow-2xl">
                       <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                          <div className="flex gap-1.5">
                             <div className="w-3 h-3 rounded-full bg-red-500/50" />
                             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                             <div className="w-3 h-3 rounded-full bg-green-500/50" />
                          </div>
                          <div className="ml-4 text-xs text-slate-500 font-mono">page.tsx</div>
                       </div>
                       <div className="p-6 font-mono text-sm overflow-x-auto">
                          <div className="text-slate-400">import <span className="text-indigo-400">{`{ fastmode }`}</span> from <span className="text-emerald-400">'@fastmode/sdk'</span>;</div>
                          <div className="h-4" />
                          <div className="text-slate-400"><span className="text-violet-400">export default</span> async <span className="text-violet-400">function</span> <span className="text-yellow-200">Page</span>() {`{`}</div>
                          <div className="text-slate-400 pl-4">const <span className="text-blue-300">content</span> = await <span className="text-indigo-400">fastmode</span>.<span className="text-yellow-200">getPage</span>(<span className="text-emerald-400">'home'</span>);</div>
                          <div className="h-4" />
                          <div className="text-slate-400 pl-4">return (</div>
                          <div className="text-slate-400 pl-8">&lt;<span className="text-pink-400">Hero</span></div>
                          <div className="text-slate-400 pl-12"><span className="text-indigo-300">title</span>={'{'}<span className="text-blue-300">content</span>.title{'}'}</div>
                          <div className="text-slate-400 pl-12"><span className="text-indigo-300">description</span>={'{'}<span className="text-blue-300">content</span>.description{'}'}</div>
                          <div className="text-slate-400 pl-8">/&gt;</div>
                          <div className="text-slate-400 pl-4">);</div>
                          <div className="text-slate-400">}</div>
                       </div>
                    </div>
                    
                    {/* Floating Logos */}
                    <div className="absolute -right-6 -bottom-6 p-4 bg-slate-900 border border-white/10 rounded-xl shadow-xl flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        {/* Just using generic circles/icons for frameworks since I don't have SVGs handy, or I can use text */}
                       <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-white"></span> Next.js
                       </div>
                       <div className="text-xs font-bold text-slate-400 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span> React
                       </div>
                       <div className="text-xs font-bold text-slate-400 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-orange-400"></span> Svelte
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Features Grid (Key Features) */}
        <section id="features" className="py-12 sm:py-16 md:py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <span className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">Everything You Need</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Battery Included
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                From simple landing pages to complex web applications, we've got you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors group">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automatic CMS Generation</h3>
                <p className="text-slate-400 text-sm">We parse your content and create structured collections instantly.</p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors group">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Visual Page Editing</h3>
                <p className="text-slate-400 text-sm">Click-to-edit interface. No form filling required for simple changes.</p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group">
                <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Headless CMS + Hosting</h3>
                <p className="text-slate-400 text-sm">Built-in global hosting with a powerful API-first backend.</p>
              </div>
              
               <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors group">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Instant Publishing</h3>
                <p className="text-slate-400 text-sm">Updates go live in seconds. No rebuilds or redeploys needed.</p>
              </div>

               <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors group">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Full API Access</h3>
                <p className="text-slate-400 text-sm">Consume your content from any frontend framework or mobile app.</p>
              </div>

               <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">SEO & Script Manager</h3>
                <p className="text-slate-400 text-sm">Manage meta tags and global scripts (Analytics, Pixel) without code.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20" />
           <div className="relative max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Ready to ship?</h2>
             <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
               Turn your AI concepts into living, breathing websites today.
             </p>
             <Link
                href="https://app.fastmode.ai/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-950 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg shadow-white/10"
              >
                Start for Free
              </Link>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">
                    FastMode
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Turn AI Websites into Production-Ready CMS Sites.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                   <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                   <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                   <li><Link href="#" className="hover:text-white transition-colors">Showcase</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                   <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                   <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                   <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                   <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                   <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                </ul>
              </div>
           </div>
           <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">© 2024 FastMode Inc. All rights reserved.</p>
              <div className="flex gap-4">
                 {/* Social icons placeholders */}
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                 </div>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
