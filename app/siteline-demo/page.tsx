import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Plus, MoreHorizontal, Bell, HelpCircle, User, TrendingUp } from "lucide-react";

export default function SitelineDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a2332] text-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#ff6b4a] flex items-center justify-center text-white font-bold text-sm">S</div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Billing</span>
              <span className="text-gray-400">/</span>
              <span>Harmony Heights Mall</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <HelpCircle className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
            <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded cursor-pointer hover:bg-white/20">
              <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-xs font-bold">P</div>
              <span className="text-sm">Precision Masonry</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <button className="px-4 py-4 text-sm font-medium text-gray-900 border-b-2 border-[#ff6b4a]">
              Pay Apps
            </button>
            <button className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
              SOV
            </button>
            <button className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
              Forecast
            </button>
            <button className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
              Change Order Log
            </button>
            <button className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
              Settings
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded">
            <Plus className="w-4 h-4" />
            Add new pay app
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 p-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Chart Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">4% billed</h2>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                Project forecast <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Simple Chart */}
            <div className="relative h-48">
              <svg className="w-full h-full" viewBox="0 0 700 200">
                {/* Grid lines */}
                <line x1="0" y1="40" x2="700" y2="40" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="90" x2="700" y2="90" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="140" x2="700" y2="140" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="190" x2="700" y2="190" stroke="#e5e7eb" strokeWidth="1" />
                
                {/* Chart line - solid then dotted */}
                <polyline
                  points="50,150 150,110 250,105 350,115 450,120"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <polyline
                  points="450,120 550,125 650,130"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                
                {/* Data points */}
                <circle cx="50" cy="150" r="4" fill="#3b82f6" />
                <circle cx="150" cy="110" r="4" fill="#3b82f6" />
                <circle cx="250" cy="105" r="4" fill="#3b82f6" />
                <circle cx="350" cy="115" r="4" fill="#3b82f6" />
                <circle cx="450" cy="120" r="4" fill="#3b82f6" />
                <circle cx="550" cy="125" r="4" fill="#3b82f6" />
                <circle cx="650" cy="130" r="4" fill="#3b82f6" />
                
                {/* Labels */}
                <text x="50" y="200" fontSize="11" fill="#6b7280" textAnchor="middle">Nov</text>
                <text x="250" y="200" fontSize="11" fill="#6b7280" textAnchor="middle">Oct</text>
                <text x="350" y="200" fontSize="11" fill="#6b7280" textAnchor="middle">Dec</text>
                <text x="450" y="200" fontSize="11" fill="#6b7280" textAnchor="middle">Jan</text>
                <text x="550" y="200" fontSize="11" fill="#6b7280" textAnchor="middle">Feb</text>
                <text x="650" y="200" fontSize="11" fill="#6b7280" textAnchor="middle">Mar (proj. end)</text>
                
                <text x="0" y="45" fontSize="11" fill="#6b7280">100%</text>
                <text x="0" y="95" fontSize="11" fill="#6b7280">50%</text>
                <text x="0" y="195" fontSize="11" fill="#6b7280">0</text>
              </svg>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-semibold text-gray-900 mb-1">$19,000.00</div>
              <div className="text-xs text-gray-500">Billed to date</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-semibold text-gray-900 mb-1">$480,000.00</div>
              <div className="text-xs text-gray-500">Contract value</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-semibold text-gray-900 mb-1">$461,000.00</div>
              <div className="text-xs text-gray-500">Left to bill</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-semibold text-gray-900 mb-1">$1,801.00</div>
              <div className="text-xs text-gray-500">Retention held</div>
            </div>
          </div>

          {/* Pay Apps List */}
          <div className="bg-white rounded-lg border border-gray-200">
            {/* NOV */}
            <div className="flex items-center gap-4 p-6 border-b border-gray-200 hover:bg-gray-50">
              <div className="text-sm font-medium text-gray-500 w-12">NOV</div>
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium text-gray-900">Pay App #5</div>
                  <div className="text-sm text-gray-600">$100,350.00</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm font-medium text-purple-600">Signed</span>
                  </div>
                  <span className="text-xs text-gray-500">Due Nov 21</span>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>

            {/* OCT */}
            <div className="flex items-center gap-4 p-6 border-b border-gray-200 hover:bg-gray-50">
              <div className="text-sm font-medium text-gray-500 w-12">OCT</div>
              <div className="flex-1 flex items-center justify-between">
                <div className="text-sm italic text-gray-500">Not billing this month</div>
                <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>

            {/* SEP */}
            <div className="flex items-center gap-4 p-6 hover:bg-gray-50">
              <div className="text-sm font-medium text-gray-500 w-12">SEP</div>
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium text-gray-900">Pay App #4</div>
                  <div className="text-sm text-gray-600">$12,100.00</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium text-blue-600">Submitted</span>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 space-y-6">
          {/* Bulletin Board */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">Bulletin board</h3>
              <button className="text-xs text-gray-600 hover:text-gray-900">Edit</button>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Project forms must be signed in Textura after submission. GC requires Excel backup.
            </p>
          </div>

          {/* Project Team */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <button className="flex items-center justify-between w-full">
              <h3 className="text-sm font-semibold text-gray-900">Project team</h3>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Project Info */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <button className="flex items-center justify-between w-full">
              <h3 className="text-sm font-semibold text-gray-900">Project info</h3>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Activity</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 mb-0.5">
                    <span className="font-medium">Malik Patel</span>
                  </p>
                  <p className="text-xs text-gray-600">signed pay app</p>
                </div>
                <span className="text-xs text-gray-500">Nov 17</span>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 mb-0.5">
                    <span className="font-medium">Malik Patel</span>
                  </p>
                  <p className="text-xs text-gray-600">submitted pay app draft</p>
                  <p className="text-xs text-gray-500 mt-1">
                    To: Andrew Cameron, Therese Ng, & 3 others
                  </p>
                </div>
                <span className="text-xs text-gray-500">Nov 17</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="fixed bottom-6 left-6">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to FastMode
        </Link>
      </div>
    </div>
  );
}

