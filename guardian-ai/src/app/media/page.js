import Sidebar from "../../components/Sidebar";

export const metadata = {
  title: "Media Assets | GuardianAI",
};

export default function MediaPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 flex flex-col gap-8">
        <header className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold m-0 flex items-center gap-3">
              Media Asset Library
            </h1>
            <p className="text-slate-400 mt-1">Manage and review your hashed official digital assets.</p>
          </div>
          <button className="bg-gradient-to-br from-cyan-400 to-blue-500 text-black font-bold px-6 py-2 rounded-lg cursor-pointer transition-all hover:shadow-[0_4px_15px_rgba(34,211,238,0.3)]">
            Upload New Asset
          </button>
        </header>

        <div className="flex-1 bg-[#0f172a]/60 backdrop-blur-[12px] border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="w-20 h-20 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center mb-6 border border-cyan-400/20">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Media Library Pipeline</h2>
          <p className="text-slate-400 max-w-md">
            This module is currently connected to the GuardianAI backend pipeline. Official assets will be populated here as they are processed through the computer vision hashing system.
          </p>
        </div>
      </main>
    </div>
  );
}
