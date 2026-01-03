import Link from "next/link";
import { Zap } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
       <div className="w-full max-w-md bg-slate-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-2">
              <svg className="h-8" viewBox="0 0 253 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M182.377 141.045H70.5226C31.5732 141.045 0 109.472 0 70.5226C0 31.5732 31.5732 0 70.5226 0H182.377C221.327 0 252.9 31.5732 252.9 70.5226C252.9 109.472 221.327 141.045 182.377 141.045Z" fill="#6062EE"/>
                <path d="M182.377 120.816C210.154 120.816 232.671 98.2992 232.671 70.5224C232.671 42.7455 210.154 20.229 182.377 20.229C154.601 20.229 132.084 42.7455 132.084 70.5224C132.084 98.2992 154.601 120.816 182.377 120.816Z" fill="#F9F9F9"/>
              </svg>
              <span className="text-2xl font-bold text-white">FastMode</span>
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-2">Welcome back</h2>
          <p className="text-slate-400 text-center mb-8">Enter your credentials to access your account</p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email address</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
              <input 
                type="password" 
                id="password"
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
              Sign in
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-slate-400">
            Don't have an account? <Link href="/start" className="text-indigo-400 hover:text-indigo-300">Sign up</Link>
          </div>
       </div>
    </div>
  );
}

