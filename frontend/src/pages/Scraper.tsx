import { 
  PlusCircle, 
  Instagram, 
  MapPin, 
  Linkedin, 
  Search, 
  Settings2, 
  Cpu,
  Play,
  Eye,
  Download,
  Lightbulb,
  Users2,
  CheckCircle2
} from 'lucide-react';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Button } from '@/src/components/ui/Button';
import { ProgressBar } from '@/src/components/ui/ProgressBar';
import { Toggle } from '@/src/components/ui/Toggle';
import { Badge } from '@/src/components/ui/Badge';

// Mock material-symbols-outlined with lucide for consistency if needed, 
// but I'll use Lucide icons for a more modern React feel.

export default function Scraper() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-white mb-2">Scraper Command</h2>
        <p className="text-text-secondary">Configure and launch high-volume data extraction jobs.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Form */}
        <div className="lg:col-span-8 space-y-6">
          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-neon-blue" />
              Create New Scraper Job
            </h3>

            {/* Platform Selector */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">Target Platform</label>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" className="gap-2 px-6">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </Button>
                <Button variant="secondary" className="gap-2 px-6">
                  <MapPin className="w-4 h-4" />
                  Google Maps
                </Button>
                <Button variant="secondary" className="gap-2 px-6">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Query Input */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">What do you want to scrape?</label>
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all shadow-inner"
                  placeholder="e.g., 'digital marketing agencies in london'"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {['Digital Marketing Agencies', 'SaaS Founders', 'Real Estate Agents'].map(chip => (
                  <span key={chip} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-medium cursor-pointer hover:bg-white/10 transition-colors">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-text-secondary" />
                Instagram Extraction Filters
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-neon-blue text-sm"
                      placeholder="City or Country"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2">Min. Followers</label>
                  <div className="relative">
                    <Users2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                      type="number" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-neon-blue text-sm"
                      placeholder="1000"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center gap-8 mt-2">
                  <Toggle label="Require Website Link" defaultChecked />
                  <Toggle label="Require Public Email" defaultChecked />
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <Toggle label="Run in background" defaultChecked className="opacity-80 scale-90 -ml-2" />
                <Toggle label="Auto export to CSV" defaultChecked className="opacity-80 scale-90 -ml-2" />
              </div>
              <Button size="lg" className="min-w-[220px]">
                <Play className="w-5 h-5 fill-current" />
                Run Scraper
              </Button>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Active Jobs */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-neon-purple" />
                Active Scraping Jobs
              </h3>
              <Badge variant="neutral" className="text-[9px]">3 Running</Badge>
            </div>

            <div className="space-y-4 flex-1">
              {/* Job 1 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all border-l-4 border-l-neon-blue group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-white truncate max-w-[120px]">#NYC Restaurants</span>
                  </div>
                  <Badge variant="primary" className="text-[9px] px-1.5 py-0.5">Extracting</Badge>
                </div>
                <ProgressBar value={68} variant="primary" showLabels labelLeft="Progress" labelRight="68%" />
                <Button variant="secondary" size="sm" className="w-full mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <Eye className="w-3 h-3" />
                  View Live
                </Button>
              </div>

              {/* Job 2 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-white truncate max-w-[120px]">Plumbers Texas</span>
                  </div>
                  <Badge variant="neutral" className="text-[9px] px-1.5 py-0.5">Queued</Badge>
                </div>
                <ProgressBar value={0} />
              </div>

              {/* Job 3 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-white truncate max-w-[120px]">SaaS CTOs</span>
                  </div>
                  <Badge variant="success" className="text-[9px] px-1.5 py-0.5">Complete</Badge>
                </div>
                <div className="flex justify-between text-[10px] text-text-secondary mb-1">
                  <span>Found: 4,201 leads</span>
                  <span className="text-success font-bold">100%</span>
                </div>
                <ProgressBar value={100} variant="success" />
                <Button variant="secondary" size="sm" className="w-full mt-4 border-neon-blue/20">
                  <Download className="w-3 h-3" />
                  Export Results
                </Button>
              </div>
            </div>

            <button className="w-full mt-6 text-center text-neon-blue text-xs font-semibold hover:text-white transition-colors">
              View All History →
            </button>
          </GlassCard>

          {/* Tips */}
          <GlassCard className="p-6 bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-warning" />
              Pro Tips
            </h3>
            <ul className="space-y-3">
              {[
                "Use specific locations in queries to improve match rates.",
                "Enable 'Run in background' for large jobs (>1k).",
                "Filtering by 'Min Followers' reduces spam bots."
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neon-blue mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-slate-300 leading-snug">{tip}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
