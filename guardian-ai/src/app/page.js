"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopStats from "../components/TopStats";
import UploadPanel from "../components/UploadPanel";
import AlertsFeed from "../components/AlertsFeed";

export default function Home() {
  const [data, setData] = useState({
    recentUploads: [
      { id: 1, name: "Premier_League_Match_Still.jpg", meta: "4.2 MB • pHash generated", gradient: "from-rose-500 to-purple-500" },
      { id: 2, name: "Lakers_Dunk_Shot1.png", meta: "2.4 MB • pHash generated", gradient: "from-cyan-400 to-blue-500" }
    ],
    alerts: [] // Starting empty to showcase the new Empty State UI
  });

  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  // Dynamic Threat Logic
  const totalAlerts = data.alerts.length;
  let threatLevel = "LOW";
  let threatColor = "text-emerald-400";
  let threatBg = "bg-emerald-400/10 border-emerald-400";

  if (totalAlerts >= 5) {
    threatLevel = "HIGH";
    threatColor = "text-rose-500";
    threatBg = "bg-rose-500/10 border-rose-500";
  } else if (totalAlerts >= 2) {
    threatLevel = "MEDIUM";
    threatColor = "text-yellow-400";
    threatBg = "bg-yellow-400/10 border-yellow-400";
  }

  const generatedStats = {
    monitoredMedia: 24, // Base static count
    activeViolations: totalAlerts,
    confidenceScore: "92%",
    threatLevel,
    threatColor,
    threatBg
  };


  //------------------
  // REAL-TIME ALERT LISTENER & POLLING
  // ----------------


  // useEffect(() => {
  //   // Set initial client-side time to prevent hydration mismatch
  //   setLastUpdated(new Date().toLocaleTimeString());


  //   const handleNewAlert = () => {
      

  //     setLastUpdated(new Date().toLocaleTimeString());

  //     // Generate a dynamic mock alert
  //     const randScore = (80 + Math.random() * 19).toFixed(1) + "%";
  //     const newId = "VIO-" + Math.floor(Math.random() * 10000);
  //     const platforms = [
  //       { plt: "𝕏", name: "@unknown_user", col: "cyan-400", bg: "bg-white text-black" },
  //       { plt: "R", name: "r/sports", col: "rose-500", bg: "bg-[#FF4500] text-white" },
  //       { plt: "Ig", name: "meme_page22", col: "purple-500", bg: "bg-pink-500 text-white" }
  //     ];
  //     const p = platforms[Math.floor(Math.random() * platforms.length)];

  //     const newAlert = {
  //       id: newId, 
  //       user: p.name, 
  //       platform: p.plt, 
  //       // time: "Just now", 
  //       score: randScore, 
  //       rawScore: parseFloat(randScore),
  //       type: "VISUAL SIMILARITY", 
  //       textColor: `text-` + p.col,
  //       hoverBorder: `hover:border-` + p.col + `/40`,
  //       platformColor: p.bg,
  //       baseColor: p.col
  //     };

  //     setData(prev => ({
  //       ...prev,
  //       alerts: [newAlert, ...prev.alerts]
  //     }));
  //   };

  //   // 1. Subscribe to global browser event perfectly connecting external dispatches
  //   window.addEventListener("NEW_ALERT", handleNewAlert);

  //   // 2. Poll every 15 seconds as a simulated background detection engine
  //   const poller = setInterval(() => {
  //     window.dispatchEvent(new CustomEvent("NEW_ALERT"));
  //   }, 15000);

  //   return () => {
  //     window.removeEventListener("NEW_ALERT", handleNewAlert);
  //     clearInterval(poller);
  //   };
  // }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 flex flex-col gap-8">
        
        <header className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold m-0 flex items-center gap-3">
              Command Center
              <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-2 transition-colors duration-500 ${threatBg} ${threatColor}`}>
                <div className={`w-2 h-2 rounded-full bg-current ${threatLevel === 'HIGH' ? 'animate-ping' : ''}`}></div>
                THREAT LEVEL: {threatLevel}
              </span>
            </h1>
            <p className="text-slate-400 mt-1">Overview of your digital asset protection pipeline.</p>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            {/* <button className="bg-transparent text-white border border-white/10 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5">Export All</button> */}
          </div>
        </header>

        <TopStats stats={generatedStats} />

        <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-[400px]">
          <div className="w-full lg:w-1/3 min-w-0">
            <UploadPanel recentUploads={data.recentUploads} />
          </div>
          <div className="w-full lg:w-2/3 min-w-0 h-full max-h-[800px]">
            <AlertsFeed alerts={data.alerts} lastUpdated={lastUpdated} />
          </div>
        </div>

      </main>
    </div>
  );
}
