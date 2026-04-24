import { 
  Instagram, 
  MapPin, 
  Download, 
  Users, 
  AlertTriangle,
  Save,
  RefreshCw,
  Search,
  MoreVertical,
  Plus,
  ShieldCheck,
  Zap,
  MoreHorizontal
} from 'lucide-react';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Button } from '@/src/components/ui/Button';
import { Toggle } from '@/src/components/ui/Toggle';
import { Badge } from '@/src/components/ui/Badge';
import { cn } from '@/src/lib/utils';

export default function Settings() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-white mb-2 neon-blue-glow inline-block">Workspace Settings</h2>
        <p className="text-text-secondary">Manage scraper access, integrations and team members.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Instagram Session */}
        <GlassCard className="p-8 relative">
          <div className="absolute top-0 right-0 p-8 flex items-center gap-2">
             <Badge variant="success" className="px-3 py-1 bg-success/10 border-success/30 neon-blue-glow">
              <div className="w-2 h-2 rounded-full bg-success mr-2 inline-block animate-pulse" />
              Connected
            </Badge>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <Instagram className="w-6 h-6 text-neon-purple" />
              Instagram Session
            </h3>
            <p className="text-sm text-text-secondary mt-1">Connect an Instagram session to allow scraping of public business profiles.</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-3">Session Cookie</label>
              <input 
                type="password" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all"
                value="sessionid=1234567890:abcdefghijklmn:01;"
                readOnly
              />
              <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5 opacity-70 italic">
                <AlertTriangle className="w-3.5 h-3.5" />
                Sessions may expire periodically. Replace when scraping stops working.
              </p>
            </div>

            <div className="flex items-center justify-between py-4 border-y border-white/5">
              <span className="text-sm font-semibold text-slate-200">Auto refresh session</span>
              <Toggle defaultChecked />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="px-8">Save Session</Button>
              <Button variant="secondary" className="px-8 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Test Connection
              </Button>
            </div>
          </div>
        </GlassCard>

        {/* 2 Column Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Maps API */}
          <GlassCard className="p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <MapPin className="w-6 h-6 text-neon-blue" />
                Google Maps API
              </h3>
              <p className="text-sm text-text-secondary mt-1">Required for accurate location-based scraping.</p>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-3">API Key</label>
                <input 
                  type="password" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-neon-blue"
                  placeholder="AIzaSyA..."
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">Enable Maps scraping</span>
                <Toggle />
              </div>
            </div>

            <div className="flex gap-3 pt-8 mt-auto">
              <Button size="sm" className="flex-1">Save Key</Button>
              <Button variant="secondary" size="sm" className="flex-1">Test API</Button>
            </div>
          </GlassCard>

          {/* Export Preferences */}
          <GlassCard className="p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Download className="w-6 h-6 text-emerald-400" />
                Export Preferences
              </h3>
              <p className="text-sm text-text-secondary mt-1">Configure how your leads are delivered.</p>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-3">Default Format</label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="bg-white/5 border border-white/10 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors">CSV</button>
                  <button className="bg-white/5 border border-white/10 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors">Sheets</button>
                  <button className="bg-neon-blue/20 border border-neon-blue/50 py-2 rounded-xl text-xs font-bold text-neon-blue shadow-[0_0_10px_rgba(77,163,255,0.1)]">Both</button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-200">Auto export after job</span>
                  <Toggle defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-200">Notify team</span>
                  <Toggle />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Team Access */}
        <GlassCard className="p-0 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Users className="w-6 h-6 text-neon-blue" />
                Team Access
              </h3>
              <p className="text-sm text-text-secondary mt-1">Manage who has access to this workspace.</p>
            </div>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Invite Member
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.02]">
                  <th className="px-8 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">User</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Role</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Sarah Jenkins (You)', email: 'sarah@leadflow.ai', role: 'Admin', online: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt2Q1Fo516iLYZAxJGB2E7GBf4Tbf34wpVCTioMGASD73tiTKLdSD48sraaopQSClfE4Q1BdPePSnVA6bfp15PyzAoHaYnTmri1_YtcxH3ug5V9TN6KU15Ona4LVfen6XrWa68rXFzSv-k54BiX2PSKSbNsf5-KAuaWD3F8anQ_NaMKn8JWuHLOBHWNyWd8SiXRRZAz1zVYbPorbMI2V1pB8kjEwNPmAD4OX0WXdXDZEM4TaEzYk60QXuStOMDGrmfsoEAoCeSpOQ' },
                  { name: 'Michael Ross', email: 'mike@leadflow.ai', role: 'Member', online: false, initials: 'MR' }
                ].map((user) => (
                  <tr key={user.email} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                          {user.img ? (
                            <img src={user.img} alt="Avatar" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-xs font-bold text-slate-400">{user.initials}</span>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{user.name}</p>
                          <p className="text-xs text-text-secondary">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <Badge variant={user.role === 'Admin' ? 'primary' : 'neutral'} className="text-[10px]">
                        {user.role}
                      </Badge>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className={cn("w-1.5 h-1.5 rounded-full", user.online ? "bg-success shadow-[0_0_8px_#2ED47A]" : "bg-slate-500")} />
                        <span className="text-xs font-medium text-slate-300">{user.online ? 'Online' : 'Offline'}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-slate-400 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Danger Zone */}
        <GlassCard className="p-8 border-red-500/20 bg-red-500/[0.02] mt-4">
          <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6" />
            Danger Zone
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-red-500/10">
              <div>
                <p className="text-sm font-bold text-white">Clear all leads</p>
                <p className="text-xs text-text-secondary mt-1">Permanently remove all scraped data. This cannot be undone.</p>
              </div>
              <Button variant="danger" size="sm">Clear Data</Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
              <div>
                <p className="text-sm font-bold text-white">Delete workspace</p>
                <p className="text-xs text-text-secondary mt-1">Delete this workspace and all its data.</p>
              </div>
              <Button variant="danger" size="sm" className="bg-red-500/20 border-red-500/40 text-red-400 neon-purple-glow">
                Delete Workspace
              </Button>
            </div>
          </div>
        </GlassCard>

        {/* Upgrade Card Overlay or bottom */}
        <GlassCard className="p-8 mt-8 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-neon-blue/20 flex flex-col items-center text-center">
            <Zap className="w-12 h-12 text-neon-blue mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold text-white mb-2">Unlock Pro Features</h2>
            <p className="text-sm text-text-secondary max-w-md mb-8">
              Get unlimited scraping jobs, multi-seat team access, and priority cloud execution with LeadFlow Pro.
            </p>
            <Button size="lg" className="min-w-[200px]">Upgrade to Pro</Button>
        </GlassCard>
      </div>
    </div>
  );
}
