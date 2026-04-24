import { 
  FileDown, 
  Search, 
  ExternalLink, 
  Download, 
  Trash2, 
  FileSpreadsheet, 
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { cn } from '@/src/lib/utils';

export default function Exports() {
  const exportHistory = [
    {
      id: 1,
      filename: 'sf-tech-founders-leads.csv',
      jobType: 'Google Maps Scrape',
      date: 'Apr 24, 2026 10:45 AM',
      format: 'CSV',
      size: '1.2 MB',
      status: 'Completed',
    },
    {
      id: 2,
      filename: 'uk-retail-influencers.xlsx',
      jobType: 'Instagram Scrape',
      date: 'Apr 23, 2026 04:20 PM',
      format: 'Sheets',
      size: '4.8 MB',
      status: 'Completed',
    },
    {
      id: 3,
      filename: 'real-estate-ny-agents.csv',
      jobType: 'Zillow API Scrape',
      date: 'Apr 22, 2026 11:15 AM',
      format: 'CSV',
      size: '850 KB',
      status: 'Expired',
    },
    {
      id: 4,
      filename: 'saas-investors-list.csv',
      jobType: 'LinkedIn Scrape',
      date: 'Apr 21, 2026 09:30 AM',
      format: 'CSV',
      size: '2.1 MB',
      status: 'Processing',
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-white mb-2">Export Management</h2>
        <p className="text-text-secondary">View and download your generated lead lists.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6" hoverEffect>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
              <FileDown className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Total Exports</p>
              <p className="text-2xl font-bold text-white">142</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6" hoverEffect>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Last 7 Days</p>
              <p className="text-2xl font-bold text-white">18</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6" hoverEffect>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <Download className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Storage Used</p>
              <p className="text-2xl font-bold text-white">245 MB</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Export Table */}
      <GlassCard className="p-0 overflow-hidden flex flex-col">
        <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/[0.02]">
          <h3 className="font-bold text-lg text-white">Export History</h3>
          <div className="relative group w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder-white/20"
              placeholder="Search files..."
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5 text-[10px] uppercase tracking-wider text-white/40">
              <tr>
                <th className="px-8 py-4 font-medium">File Name</th>
                <th className="px-8 py-4 font-medium">Job Source</th>
                <th className="px-8 py-4 font-medium">Date Generated</th>
                <th className="px-8 py-4 font-medium">Format</th>
                <th className="px-8 py-4 font-medium">Status</th>
                <th className="px-8 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {exportHistory.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      {item.format === 'CSV' ? (
                        <FileText className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                      )}
                      <div>
                        <p className="font-semibold text-white">{item.filename}</p>
                        <p className="text-xs text-white/40">{item.size}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-white/60">
                    {item.jobType}
                  </td>
                  <td className="px-8 py-5 text-white/60 font-mono text-xs">
                    {item.date}
                  </td>
                  <td className="px-8 py-5">
                    <Badge variant={item.format === 'CSV' ? 'primary' : 'success'}>
                      {item.format}
                    </Badge>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        item.status === 'Completed' ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" :
                        item.status === 'Processing' ? "bg-cyan-500 animate-pulse shadow-[0_0_8px_#06b6d4]" :
                        "bg-red-500"
                      )} />
                      <span className={cn(
                        "text-xs font-medium",
                        item.status === 'Completed' ? "text-emerald-400" :
                        item.status === 'Processing' ? "text-cyan-400" :
                        "text-red-400"
                      )}>{item.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.status === 'Completed' && (
                        <>
                          <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all" title="View">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all" title="Download">
                            <Download className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-red-500/60 hover:text-red-500 hover:bg-red-500/10 transition-all" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Note about expiration */}
      <div className="flex items-center gap-3 p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
        <p className="text-xs text-amber-500/80 leading-relaxed italic">
          Exported files are automatically removed after 30 days to free up storage. Please download your leads or export them to Google Sheets if you need to keep them permanently.
        </p>
      </div>
    </div>
  );
}
