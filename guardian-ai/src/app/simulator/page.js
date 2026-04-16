"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const platforms = {

  chirp: {
    name: "Chirp",
    themePrimary: "bg-blue-500",
    themeText: "text-blue-500",
    themeRing: "focus:ring-blue-500",
    themeHover: "hover:bg-blue-600",
    themeLight: "bg-blue-50",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
  },
  nexus: {
    name: "Nexus",
    themePrimary: "bg-indigo-600",
    themeText: "text-indigo-600",
    themeRing: "focus:ring-indigo-600",
    themeHover: "hover:bg-indigo-700",
    themeLight: "bg-indigo-50",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  },
  prism: {
    name: "Prism",
    themePrimary: "bg-pink-500",
    themeText: "text-pink-500",
    themeRing: "focus:ring-pink-500",
    themeHover: "hover:bg-pink-600",
    themeLight: "bg-pink-50",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  }
};

const DUMMY_USERS = [
  { name: "Alex Mercer", handle: "@amercer44", color: "bg-teal-500" },
  { name: "Sarah Jenkins", handle: "@s_jenkins", color: "bg-rose-500" },
  { name: "SportsFanatic99", handle: "@sports_fanatic99", color: "bg-cyan-500" },
  { name: "Dave Highlights", handle: "@dave_clips", color: "bg-amber-500" }
];

export default function SocialSimulator() {
  const router = useRouter();
  const [activePlatform, setActivePlatform] = useState("chirp");
  const [feed, setFeed] = useState([]);
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  
  const current = platforms[activePlatform];

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(true);
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!postText && !selectedImage) return;

    setLoading(true);

    // ==========================================
    // TO-DO: BACKEND NODE.JS POST UPLOAD
    // Replace simulation with API POST
    // ==========================================

    setTimeout(() => {
      setLoading(false);
      
      const newPost = {
        id: Date.now(),
        user: DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)],
        time: "Just now",
        text: postText || (selectedImage ? "Check out this visual!" : "Just updating my status."),
        hasImage: selectedImage,
        stats: {
          replies: Math.floor(Math.random() * 20) + 1,
          reposts: Math.floor(Math.random() * 50) + 1,
          likes: Math.floor(Math.random() * 900) + 10
        }
      };

      setFeed(prev => [newPost, ...prev]);
      setPostText("");
      setSelectedImage(false);

      if (selectedImage) {
        // Dispatch EVENT to GuardianAI Admin Dashboard to trigger detection logic!
        window.dispatchEvent(new CustomEvent("NEW_ALERT"));
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 transition-colors duration-500 flex flex-col font-sans">
      
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <div className={`flex items-center gap-2 font-bold text-xl ${current.themeText} transition-colors`}>
            {current.icon}
            {current.name} Web
          </div>

          <div className="flex bg-slate-100/80 rounded-lg p-1 border border-slate-200/50">
            {Object.keys(platforms).map(key => (
              <button 
                type="button"
                key={key}
                onClick={() => setActivePlatform(key)}
                className={`px-5 py-1.5 text-sm font-bold rounded-md transition-all duration-300 ${activePlatform === key ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
              >
                {platforms[key].name}
              </button>
            ))}
          </div>

          <button type="button" className="text-sm font-bold text-slate-500 hover:text-rose-500 transition-colors uppercase tracking-wide" onClick={() => router.push("/login")}>
            Exit Sim
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        {/* Left Column - User Profile & Upload */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
            <div className={`h-28 ${current.themePrimary} transition-colors`}></div>
            <div className="px-6 pb-6 relative">
              <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white -mt-10 mx-auto shadow-sm overflow-hidden flex items-center justify-center relative z-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="text-center mt-3">
                <h2 className="font-bold text-xl text-slate-800">Test User</h2>
                <p className="text-slate-500 text-sm font-medium">@demo_account_01</p>
              </div>
              <div className="mt-4 flex justify-around text-center border-t border-slate-100 pt-4">
                <div><div className={`font-bold ${current.themeText}`}>124</div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Posts</div></div>
                <div><div className={`font-bold ${current.themeText}`}>8.2k</div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Followers</div></div>
              </div>
            </div>
          </div>

          {/* Create Post Interface */}
          <form className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4" onSubmit={handleUploadSubmit}>
            <div className="flex items-center gap-3 mb-1">
              <div className={`w-8 h-8 rounded-full ${current.themeLight} flex items-center justify-center ${current.themeText}`}>
                 {current.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Create Post</h3>
            </div>
            
            <textarea 
              placeholder={`What's happening on ${current.name}?`}
              value={postText}
              onChange={e => setPostText(e.target.value)}
              className={`w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-base focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${current.themeRing}`}
              rows={3}
            ></textarea>

            <div onClick={() => document.getElementById('post-image').click()} className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${selectedImage ? `border-emerald-400 bg-emerald-50 text-emerald-600` : `border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-500`}`}>
               {selectedImage ? (
                  <>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="text-sm font-bold">Image Attached</span>
                  </>
               ) : (
                  <>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    <span className="text-sm font-bold">Attach Image</span>
                  </>
               )}
              <input type="file" id="post-image" className="hidden" accept="image/*" onChange={handleFileSelect} />
            </div>

            <button 
              type="submit" 
              disabled={loading || (!postText && !selectedImage)}
              className={`w-full text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md ${current.themePrimary} ${current.themeHover} disabled:opacity-50 disabled:shadow-none hover:-translate-y-0.5`}
            >
              {loading ? "Publishing..." : "Simulate Public Post"}
            </button>
          </form>

        </div>

        {/* Right Column - Feed */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-slate-200 p-4">
            <h2 className="font-bold text-xl flex items-center gap-2 text-slate-800">
               Timeline
            </h2>
            <div className={`text-xs font-bold px-3 py-1 rounded-full ${current.themeLight} ${current.themeText}`}>
               {current.name} Engine
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {feed.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-16 flex flex-col items-center justify-center text-center gap-4">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${current.themeLight} ${current.themeText}`}>
                  {current.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl">No posts yet</h3>
                  <p className="text-slate-500 text-base mt-2 max-w-sm mx-auto leading-relaxed">
                    Upload an image using the panel to simulate spreading content across the web. GuardianAI will catch it instantly.
                  </p>
                </div>
              </div>
            ) : (
              feed.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 flex gap-4">
                    <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-sm ${post.user.color}`}>
                       {post.user.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-slate-900 text-[15px] hover:underline cursor-pointer">{post.user.name}</span>
                        <span className="text-sm font-medium text-slate-500">{post.user.handle}</span>
                        <span className="text-sm text-slate-400">· {post.time}</span>
                      </div>
                      <p className="text-slate-800 text-[15px] leading-relaxed mt-1 whitespace-pre-wrap">{post.text}</p>
                      
                      {post.hasImage && (
                        <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-video relative flex-1 cursor-pointer">
                          <span className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-bold uppercase tracking-widest bg-gradient-to-br from-slate-50 to-slate-100">
                             Simulated Media Asset
                          </span>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-slate-500 mt-4 max-w-md pr-10">
                        <button className={`flex items-center gap-2 group transition-colors`}>
                          <div className={`p-2 rounded-full group-hover:${current.themeLight} transition-colors`}>
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`group-hover:${current.themeText}`}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                          </div>
                          <span className={`text-xs font-semibold group-hover:${current.themeText}`}>{post.stats.replies}</span>
                        </button>
                        <button className="flex items-center gap-2 group transition-colors">
                          <div className="p-2 rounded-full group-hover:bg-emerald-50 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-emerald-500"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                          </div>
                          <span className="text-xs font-semibold group-hover:text-emerald-500">{post.stats.reposts}</span>
                        </button>
                        <button className="flex items-center gap-2 group transition-colors">
                          <div className="p-2 rounded-full group-hover:bg-rose-50 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-rose-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                          </div>
                          <span className="text-xs font-semibold group-hover:text-rose-500">{post.stats.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
