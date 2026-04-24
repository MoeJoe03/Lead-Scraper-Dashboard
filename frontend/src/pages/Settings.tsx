import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export default function Settings() {
  const [uploadStatus, setUploadStatus] = useState("");

  const handleCookieUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadStatus("Uploading...");
    const formData = new FormData();
    formData.append("file", file);

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/settings/cookies`, {
        method: 'POST',
        body: formData
      });
      setUploadStatus("Success! Cookies updated.");
    } catch (error) {
      setUploadStatus("Failed to upload cookies. Is backend running?");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Workspace Settings</h1>
        <p className="text-slate-400">Manage integrations and scraper configurations.</p>
      </div>

      <GlassCard className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5 text-cyan-400" />
          Instagram Session (Cookies)
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Upload your cookies.json file to authenticate the scraper.
        </p>

        <div className="space-y-4">
          <input
            type="file"
            accept=".json"
            onChange={handleCookieUpload}
            className="block w-full text-sm text-slate-400
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-cyan-500/10 file:text-cyan-400
              hover:file:bg-cyan-500/20
              cursor-pointer"
          />
          {uploadStatus && (
            <p className={`text-sm ${uploadStatus.includes("Success") ? "text-emerald-400" : "text-amber-400"} flex items-center gap-2`}>
              {uploadStatus.includes("Success") && <CheckCircle className="w-4 h-4" />}
              {uploadStatus}
            </p>
          )}
        </div>
      </GlassCard>
    </div>
  );
}