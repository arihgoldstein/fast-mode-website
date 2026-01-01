import Link from "next/link";
import { ArrowRight, Check, Zap, Globe, Lock, Code, Cpu, Layout, FileText, Send, Search, ChevronDown, Settings, Database, MessageSquare, Plus, MoreHorizontal, MousePointer2, Briefcase, Users, Server, Layers, BarChart } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                FastMode
              </span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/#features" className="hover:text-indigo-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                <Link href="/pricing" className="text-indigo-400 bg-white/5 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
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
        <section className="relative overflow-hidden py-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="absolute top-40 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
              Pricing that stays <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                out of your way
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              Launch on a Fastmode subdomain for free in minutes. Upgrade when you want your own domain, white-label hosting, and CDN delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.fastmode.ai/register"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition-all shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2"
              >
                Start free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#plans"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                View plans
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section id="plans" className="py-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-white mb-4">Simple plans for serious speed</h2>
                 <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to host, edit, and publish CMS-driven sites — without the usual maintenance.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 {/* Free Plan */}
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col relative overflow-hidden">
                    <div className="mb-8">
                       <h3 className="text-xl font-bold text-white mb-2">Free</h3>
                       <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-bold text-white">$0</span>
                       </div>
                       <p className="text-sm text-slate-400">Fast hosting on a Fastmode subdomain</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                       <li className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                          <span>Hosted on a fastmode.site subdomain</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                          <span>CMS: Blogs, Authors, Team, Downloads</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                          <span>Visual editor for page copy</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                          <span>Page-level SEO controls</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                          <span>Global head code injection (pixels, scripts)</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-slate-300">
                          <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                          <span>API access for CMS + forms</span>
                       </li>
                    </ul>
                    
                    <div className="mt-auto">
                       <p className="text-xs text-slate-500 mb-4 text-center">Includes Fastmode branding.</p>
                       <Link href="https://app.fastmode.ai/register" className="block w-full py-3 text-center bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/10">
                          Start free
                       </Link>
                    </div>
                 </div>

                 {/* Pro Plan */}
                 <div className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/50 flex flex-col relative overflow-hidden shadow-2xl shadow-indigo-500/10">
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                       Most popular
                    </div>
                    <div className="mb-8">
                       <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                       <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl font-bold text-white">$29</span>
                          <span className="text-slate-400">/ month</span>
                       </div>
                       <p className="text-sm text-slate-400">Your domain, no branding, delivered via CDN</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                       <li className="flex items-start gap-3 text-sm text-white">
                          <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                             <Check className="w-3 h-3 text-indigo-400" />
                          </div>
                          <span>Connect and host on your custom domain</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-white">
                          <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                             <Check className="w-3 h-3 text-indigo-400" />
                          </div>
                          <span>Removes Fastmode branding (white-label)</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-white">
                          <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                             <Check className="w-3 h-3 text-indigo-400" />
                          </div>
                          <span>CDN delivery for faster global performance</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-white">
                          <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                             <Check className="w-3 h-3 text-indigo-400" />
                          </div>
                          <span>Everything in Free, plus priority support</span>
                       </li>
                    </ul>
                    
                    <div className="mt-auto">
                       <p className="text-xs text-slate-500 mb-4 text-center">Upgrade anytime. Downgrade whenever.</p>
                       <Link href="https://app.fastmode.ai/register" className="block w-full py-3 text-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25">
                          Go Pro
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-slate-900/30 border-y border-white/5">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-12 text-center">Compare plans</h2>
              
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="border-b border-white/10">
                          <th className="py-4 px-6 text-sm font-medium text-slate-400 w-1/2">Features</th>
                          <th className="py-4 px-6 text-sm font-bold text-white w-1/4 text-center">Free</th>
                          <th className="py-4 px-6 text-sm font-bold text-indigo-400 w-1/4 text-center">Pro</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm">
                       {[
                          { feature: "Fastmode subdomain hosting", free: true, pro: true },
                          { feature: "Custom domain + CDN", free: false, pro: true },
                          { feature: "Remove Fastmode branding", free: false, pro: true },
                          { feature: "CMS collections", free: true, pro: true },
                          { feature: "Visual copy editor", free: true, pro: true },
                          { feature: "SEO per page", free: true, pro: true },
                          { feature: "Head code injection", free: true, pro: true },
                          { feature: "CMS + Forms API", free: true, pro: true },
                          { feature: "Priority support", free: false, pro: true },
                       ].map((row, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                             <td className="py-4 px-6 text-slate-300">{row.feature}</td>
                             <td className="py-4 px-6 text-center">
                                {row.free ? <Check className="w-5 h-5 text-white mx-auto" /> : <span className="text-slate-600">—</span>}
                             </td>
                             <td className="py-4 px-6 text-center">
                                {row.pro ? <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto"><Check className="w-4 h-4 text-indigo-400" /></div> : <span className="text-slate-600">—</span>}
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Questions, answered</h2>
              <div className="space-y-8">
                 {[
                    { q: "What do I get on the Free plan?", a: "You can host a full site on a Fastmode subdomain, publish CMS content, edit page copy visually, and manage SEO — all for $0." },
                    { q: "Can I connect my own domain?", a: "Yep — that’s included on Pro. Point your DNS, and we handle hosting + CDN delivery." },
                    { q: "What happens when I upgrade?", a: "Your existing site stays exactly the same. We remove branding and switch you to custom domain + CDN." },
                    { q: "Can I downgrade later?", a: "Totally. You can downgrade anytime — we’ll keep your site live on a Fastmode subdomain." },
                    { q: "Do you support tracking pixels and scripts?", a: "Yes. Add anything you need once, and we inject it into the head of every page." },
                    { q: "Is the CMS included in both plans?", a: "Yes — Blogs, Authors, Team Members, and Downloads are included in every plan." },
                 ].map((faq, i) => (
                    <div key={i} className="border-b border-white/10 pb-8 last:border-0">
                       <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                       <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20" />
           <div className="relative max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ship faster. Worry less.</h2>
             <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
               Start free on a Fastmode subdomain, then go Pro when you’re ready for your own domain and white-label hosting.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                   href="https://app.fastmode.ai/register"
                   className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-indigo-500/25"
                >
                   Start free
                </Link>
                <Link
                   href="/start?plan=pro"
                   className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all"
                >
                   Go Pro
                </Link>
             </div>
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
                   <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                   <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
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

