import { 
  Play, 
  Users2, 
  CheckCircle2, 
  Instagram, 
  MapPin, 
  AlertTriangle,
  TrendingUp,
  Users,
  Check
} from 'lucide-react';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Button } from '@/src/components/ui/Button';
import { ProgressBar } from '@/src/components/ui/ProgressBar';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="p-6" hoverEffect>
          <p className="text-xs text-white/50 mb-1">Total Leads</p>
          <p className="text-3xl font-bold text-white">42,891</p>
          <div className="mt-3 flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
            <TrendingUp className="w-3 h-3" />
            <span>+12.4% this week</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6" hoverEffect>
          <p className="text-xs text-white/50 mb-1">Active Jobs</p>
          <p className="text-3xl font-bold text-white">12</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-4 h-4 rounded-full bg-cyan-500 border border-white/20"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500 border border-white/20"></div>
              <div className="w-4 h-4 rounded-full bg-indigo-500 border border-white/20"></div>
            </div>
            <span className="text-[10px] text-white/40">Across 3 sources</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6" hoverEffect>
          <p className="text-xs text-white/50 mb-1">Success Rate</p>
          <p className="text-3xl font-bold text-white">98.4%</p>
          <div className="mt-3 flex items-center gap-1 text-[10px] text-white/30">
            <span>Healthy performance</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6" hoverEffect>
          <p className="text-xs text-white/50 mb-1">Team Members</p>
          <p className="text-3xl font-bold text-white">8</p>
          <div className="mt-3 flex items-center gap-1 text-[10px] text-cyan-400 font-bold">
            <span>2 members online</span>
          </div>
        </GlassCard>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Jobs Table Card */}
        <GlassCard className="lg:col-span-2 p-0 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <h3 className="font-bold text-lg text-white">Running Scrapers</h3>
            <Button size="sm" className="bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              + New Job
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5 text-[10px] uppercase tracking-wider text-white/40">
                <tr>
                  <th className="px-6 py-3 font-medium">Job Name</th>
                  <th className="px-6 py-3 font-medium">Source</th>
                  <th className="px-6 py-3 font-medium">Progress</th>
                  <th className="px-6 py-3 font-medium">Leads</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-white/5 text-white/80">
                {[
                  { name: 'SF Tech Founders', source: 'Google Maps', progress: 75, leads: '1,244', statusColor: 'cyan' },
                  { name: 'UK Retail Leads', source: 'Instagram', progress: 100, leads: '8,902', statusColor: 'emerald' },
                  { name: 'Real Estate NY', source: 'Zillow API', progress: 33, leads: '451', statusColor: 'amber' },
                  { name: 'SaaS Investors', source: 'LinkedIn', progress: 92, leads: '2,110', statusColor: 'cyan' }
                ].map((job, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4 font-medium text-white">{job.name}</td>
                    <td className="px-6 py-4 text-white/60 italic">{job.source}</td>
                    <td className="px-6 py-4 w-40">
                      <ProgressBar value={job.progress} variant={job.progress === 100 ? 'success' : job.progress < 50 ? 'warning' : 'primary'} />
                    </td>
                    <td className="px-6 py-4 font-mono">{job.leads}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-bold border capitalize",
                        job.progress === 100 ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                        job.progress < 50 ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
                        "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                      )}>
                        {job.progress === 100 ? 'Completed' : job.progress < 50 ? 'Paused' : 'Running'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Activity Card */}
        <GlassCard className="p-6">
          <h3 className="font-bold text-lg text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Sarah Miller <span className="font-normal text-white/40">exported</span></p>
                <p className="text-[10px] text-cyan-400 font-bold">SF Tech Founders.csv</p>
                <p className="text-[9px] text-white/20 mt-1 uppercase tracking-tighter">2 mins ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">David Chen <span className="font-normal text-white/40">created job</span></p>
                <p className="text-[10px] text-cyan-400 font-bold">European VCs Pipeline</p>
                <p className="text-[9px] text-white/20 mt-1 uppercase tracking-tighter">15 mins ago</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-[10px] text-white/40 mb-4 uppercase tracking-widest font-bold">Live Sources</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                <p className="text-xs font-bold text-white">Google</p>
                <p className="text-[10px] text-emerald-400">99ms ping</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10 opacity-50">
                <p className="text-xs font-bold text-white">Instagram</p>
                <p className="text-[10px] text-red-400 font-bold italic">Auth req.</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
