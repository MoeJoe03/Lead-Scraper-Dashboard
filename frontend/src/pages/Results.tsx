import { 
  FileSpreadsheet, 
  Download, 
  Search, 
  ChevronDown, 
  X,
  Instagram,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Mail,
  Copy,
  Bookmark,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Globe,
  Eye
} from 'lucide-react';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { Toggle } from '@/src/components/ui/Toggle';
import { cn } from '@/src/lib/utils';

export default function Results() {
  const leads = [
    {
      id: 1,
      name: 'Brew Haven',
      handle: '@brewhaven_sf',
      platform: 'instagram',
      bio: 'Artisanal coffee roasters in the heart of SF. Open daily 7am-4pm. ☕️✨',
      website: 'brewhavensf.com',
      followers: '12.4k',
      location: 'San Francisco, CA',
      status: 'New Lead',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr1-v_uxOFZ3pTKB3QD-zsxD9GJzlVx-HmQaW98bq7RvUwieOzRaUhFrBROmnRs6aUYLOzb4yuek-2ZIXWolTouZgykTVrQmNlYKXT060y_qAuL0fnrm0EUhpdy0GAozwr0Hcx6KOq9shMLsI6r5lf1QOiKQX1wD6PZlo2LKI2elLtxXny8gt9YomQDHwhQp_SkzzsSCeDA2kT_bN7UvEDBhCRMo5ICCIn8R3qVnAyRm7lD1Bdtkpy3T1lwGNYAj9JU8nuiSVhLJc'
    },
    {
      id: 2,
      name: 'Urban Plant Co',
      location: 'Portland, OR',
      platform: 'googlemaps',
      bio: 'Rare indoor plants, pots, and botanical design services.',
      website: 'urbanplantco.com',
      rating: '4.8',
      reviews: '312',
      status: 'Contacted',
    },
    {
      id: 3,
      name: 'Neon Designs',
      handle: '@neondesigns',
      platform: 'instagram',
      bio: 'Custom LED neon signs for businesses and events.',
      followers: '89k',
      status: 'Converted',
      emailFound: true,
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-violet-300 bg-clip-text text-transparent mb-2">Scraped Leads</h2>
          <p className="text-text-secondary">View, filter and export your collected business profiles.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="gap-2">
            <FileSpreadsheet className="w-4 h-4" />
            Export to Google Sheets
          </Button>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Download CSV
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <GlassCard className="p-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap items-center gap-4 flex-1">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-neon-blue transition-colors h-10"
              placeholder="Search leads..."
            />
          </div>

          <div className="flex gap-2">
            {['Platform: All', 'Location: Any', 'Followers: Any'].map((filter) => (
              <button key={filter} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition-all h-10">
                {filter}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-4">
            <Toggle label="Has website" className="scale-90" />
            <Toggle label="Has email" className="scale-90" />
          </div>
        </div>
        
        <button className="text-text-secondary hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors">
          <X className="w-3.5 h-3.5" />
          Clear filters
        </button>
      </GlassCard>

      {/* Main Grid */}
      <div className="flex flex-col xl:flex-row gap-6">
        {/* Table Area */}
        <GlassCard className="flex-1 p-0 overflow-hidden flex flex-col">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-widest whitespace-nowrap">Profile</th>
                  <th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-widest whitespace-nowrap">Bio Snippet</th>
                  <th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-widest whitespace-nowrap">Contact</th>
                  <th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-widest whitespace-nowrap">Stats</th>
                  <th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-widest whitespace-nowrap">Status</th>
                  <th className="py-4 px-6 text-xs font-bold text-text-secondary uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads.map((lead, i) => (
                  <tr key={lead.id} className={cn(
                    "group hover:bg-white/[0.03] transition-colors relative",
                    i === 0 && "bg-neon-blue/[0.03]"
                  )}>
                    {i === 0 && (
                      <td className="absolute left-0 top-0 bottom-0 w-[2px] bg-neon-blue shadow-[0_0_10px_rgba(77,163,255,0.6)]" />
                    )}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-shrink-0 flex items-center justify-center">
                          {lead.img ? (
                            <img src={lead.img} alt={lead.name} className="w-full h-full object-cover" />
                          ) : (
                            <Globe className="w-5 h-5 text-slate-500" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            {lead.name}
                            {lead.platform === 'instagram' ? <Instagram className="w-3 h-3 text-neon-blue" /> : <MapPin className="w-3 h-3 text-neon-purple" />}
                          </div>
                          <span className="text-[11px] text-text-secondary">{lead.handle || lead.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 max-w-[200px]">
                      <p className="text-[12px] text-text-secondary truncate">{lead.bio}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1">
                        {lead.website && (
                          <a href="#" className="text-[11px] text-text-secondary hover:text-neon-blue flex items-center gap-1 italic">
                            <Globe className="w-3 h-3" /> {lead.website}
                          </a>
                        )}
                        {(lead.emailFound || lead.id === 1) && (
                          <Badge variant="success" className="text-[9px] w-fit">
                            <CheckCircle2 className="w-2.5 h-2.5 mr-0.5 inline" /> Email found
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">{lead.followers || `${lead.rating} ★`}</span>
                        <span className="text-[10px] text-text-secondary">{lead.followers ? 'Followers' : `${lead.reviews} reviews`}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge variant={lead.status === 'Converted' ? 'success' : lead.status === 'Contacted' ? 'warning' : 'primary'}>
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 rounded-md hover:bg-white/10 text-text-secondary hover:text-white border border-transparent hover:border-white/5"><Eye className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded-md hover:bg-white/10 text-text-secondary hover:text-white border border-transparent hover:border-white/5"><Copy className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded-md hover:bg-white/10 text-text-secondary hover:text-white border border-transparent hover:border-white/5"><Bookmark className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-auto p-4 border-t border-white/10 flex items-center justify-between bg-white/[0.01]">
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-text-secondary">Rows per page:</span>
              <select className="bg-transparent border-none text-[12px] text-white focus:ring-0 cursor-pointer p-0 pr-6 font-bold">
                <option value="25" className="bg-surface-container-high">25</option>
                <option value="50" className="bg-surface-container-high">50</option>
              </select>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[12px] text-text-secondary">1-25 of 1,248</span>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-lg border border-white/5 text-text-secondary hover:text-white hover:bg-white/10 disabled:opacity-30"><ChevronLeft className="w-4 h-4" /></button>
                <button className="p-1.5 rounded-lg border border-white/5 text-text-secondary hover:text-white hover:bg-white/10"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Selected Lead Side Panel */}
        <aside className="w-full xl:w-85 flex-shrink-0">
          <GlassCard className="sticky top-24 flex flex-col gap-6">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(77,163,255,0.2)] bg-white/5">
                <img 
                  src={leads[0].img} 
                  alt="LargeLogo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Brew Haven</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <Instagram className="w-4 h-4 text-neon-blue" />
                  <a href="#" className="text-sm font-semibold text-neon-blue hover:underline">@brewhaven_sf</a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-sm text-text-secondary leading-relaxed italic">
                Artisanal coffee roasters in the heart of SF. Open daily 7am-4pm. We source ethically and roast locally. ☕️✨
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-slate-400 border border-white/10">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Website</span>
                  <a href="#" className="text-sm font-medium text-neon-blue hover:underline">brewhavensf.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center flex-shrink-0 text-neon-blue shadow-[0_0_15px_rgba(77,163,255,0.25)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Email</span>
                  <span className="text-sm font-semibold text-white">hello@brewhavensf.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-slate-400 border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Location</span>
                  <span className="text-sm font-medium text-white">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                <div className="text-xl font-bold text-white mb-1">12.4k</div>
                <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Followers</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                <div className="text-xl font-bold text-white mb-1">842</div>
                <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Following</div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-text-secondary uppercase tracking-widest font-bold ml-1">Internal Notes</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 resize-none h-24"
                placeholder="Add notes about this lead..."
              ></textarea>
            </div>

            <Button variant="secondary" className="w-full border-neon-blue/30 hover:border-neon-blue transition-colors">
              <CheckCircle2 className="w-4 h-4" />
              Mark as Contacted
            </Button>
          </GlassCard>
        </aside>
      </div>
    </div>
  );
}
