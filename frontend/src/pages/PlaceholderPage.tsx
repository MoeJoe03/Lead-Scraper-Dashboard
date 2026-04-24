import { GlassCard } from '@/src/components/ui/GlassCard';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-text-secondary">This page is under development.</p>
      </div>
      <GlassCard className="p-20 flex items-center justify-center border-dashed">
        <p className="text-slate-500 font-medium italic">Feature coming soon...</p>
      </GlassCard>
    </div>
  );
}
