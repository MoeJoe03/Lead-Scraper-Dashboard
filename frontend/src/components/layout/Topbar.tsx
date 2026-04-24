import { Search, Bell, History, HelpCircle } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export function Topbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 w-full sticky top-0 z-40 bg-black/10 backdrop-blur-md border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.1)] h-20">
      <div>
        <h1 className="text-2xl font-semibold text-white">Overview</h1>
        <p className="text-xs text-white/40">Manage your active pipelines and leads</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group focus-within:ring-1 focus-within:ring-cyan-500/50 transition-all rounded-full bg-white/5 border border-white/10 h-10 flex items-center px-4 w-64">
          <Search className="w-4 h-4 text-white/30 mr-2" />
          <input 
            type="text" 
            className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-white/20 text-sm"
            placeholder="Search leads, jobs..."
          />
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
          <div className="flex items-center gap-3 text-right">
            <div>
              <p className="text-xs font-bold text-white leading-tight">Alex Rivers</p>
              <p className="text-[10px] text-white/40">Admin Role</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 border-2 border-white/20 p-0.5 overflow-hidden cursor-pointer hover:border-white transition-colors">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2PP9AHf_HeWQHDgS-vNTX3Monc9AKTyacJchQ9oL3PTkFiv6zEjAz_X4oyhHcCxhPA0sUtDkU7Hcoc-HRZtqR_PiA4nYLSwCVYAszcR8KksyA4TSaETrxu-7MCP4of8DHpcCUFxK4K7142NLan93vDxnlvDQ59AqBPZCnfbptocWH_bvexxRDBsQXqXneVhGqdzjcl6LNEyDbr_FB4loY3McMh4uFTIZyemj8OgSFhep1rbWMz_ge-23bJ3wq-XV8TcqMLqgVKJc" 
                alt="UserProfile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
