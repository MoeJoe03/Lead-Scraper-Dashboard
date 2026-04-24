import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Target, 
  BarChart3, 
  FileUp, 
  Users, 
  Settings,
  PlusCircle,
  Zap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/Button';

export function Sidebar() {
  const links = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/scraper', icon: Target, label: 'Scraper' },
    { to: '/results', icon: BarChart3, label: 'Results' },
    { to: '/exports', icon: FileUp, label: 'Exports' },
    { to: '/team', icon: Users, label: 'Team' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col p-6 shadow-[10px_0_30px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-3 mb-10 px-2 mt-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          <Zap className="w-5 h-5 text-white fill-current" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            LeadFlow
          </h1>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300",
              isActive 
                ? "text-cyan-400 bg-white/10 border border-white/10 font-medium" 
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <link.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{link.label}</span>
          </NavLink>
        ))}
      </nav>


      <Button className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-colors" size="md">
        <PlusCircle className="w-4 h-4" />
        New Job
      </Button>
    </aside>
  );
}
