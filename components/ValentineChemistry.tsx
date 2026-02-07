import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ValentineChemistry() {
  const [stage, setStage] = useState(1);
  const [approach, setApproach] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [heartFill, setHeartFill] = useState(0);
  const [lockProton, setLockProton] = useState(false);
  const [filledTubes, setFilledTubes] = useState<number[]>([]);
  const [finalAnswer, setFinalAnswer] = useState(false);

  const beat = () => {
    setPulse(true);
    setTimeout(() => setPulse(false), 260);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#3a0a2a,_#120014,_#050008)] flex items-center justify-center text-white font-light tracking-wide">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0.7)_100%)]" />

      {stage === 1 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <p className="absolute top-8 sm:top-16 px-4 text-center text-base sm:text-xl italic text-pink-200">"Every reaction begins when two elements choose to move closer"</p>
          <div className="relative w-full h-64">
            <AnimatePresence>
              {approach && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 2.4, opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  className="absolute left-1/2 top-1/2 w-36 h-36 rounded-full border border-pink-400 -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </AnimatePresence>
            <motion.div animate={{ x: approach ? '20vw' : '0vw' }} transition={{ duration: 4, ease: "easeInOut" }} className="absolute left-[10%] top-[55%] sm:top-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-700 shadow-2xl flex items-center justify-center text-sm sm:text-base">Shivam</motion.div>
            <motion.div animate={{ x: approach ? '-20vw' : '0vw' }} transition={{ duration: 4, ease: "easeInOut" }} className="absolute right-[10%] top-[55%] sm:top-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-600 shadow-2xl flex items-center justify-center text-sm sm:text-base">Shruti</motion.div>
          </div>
          <button onClick={() => { setApproach(true); setTimeout(() => setStage(2), 4200); }} className="mt-16 px-6 py-3 bg-gradient-to-r from-pink-600 to-fuchsia-600 rounded-full shadow-xl">Bring us a little closer ❤️</button>
        </div>
      )}

      {stage === 2 && (
        <div className="flex flex-col items-center gap-6">
          <p className="italic text-pink-200">"Love fills the heart one beat at a time"</p>
          <motion.div onClick={() => { beat(); setHeartFill(v => { const n = Math.min(v + 1, 5); if (n === 5) setStage(3); return n; }); }} animate={{ scale: pulse ? 1.18 : 1 }} transition={{ type: "spring", stiffness: 220 }} className="cursor-pointer">
            <svg width="200" height="180" viewBox="0 0 32 29.6" className="drop-shadow-[0_0_40px_rgba(255,120,180,1)]">
              <defs><clipPath id="heart-fill"><path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.5,16,21.2,16,21.2s16-11.7,16-21.2C32,3.8,28.2,0,23.6,0z" /></clipPath></defs>
              <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.5,16,21.2,16,21.2s16-11.7,16-21.2C32,3.8,28.2,0,23.6,0z" fill="#4a0f2c" />
              <motion.rect clipPath="url(#heart-fill)" x="0" width="32" animate={{ height: heartFill * 5.9, y: 29.6 - heartFill * 5.9 }} transition={{ duration: 0.5, ease: "easeOut" }} fill="#ff6aa2" />
            </svg>
          </motion.div>
          <p className="text-sm opacity-70">Each click is a heartbeat of love</p>
        </div>
      )}

      {stage === 3 && (
        <div className="flex flex-col items-center gap-6">
          <p className="absolute top-8 sm:top-16 px-4 text-center text-base sm:text-xl italic text-pink-200">"Love becomes stable when every part finds its place"</p>
          <div className="relative w-[480px] h-[480px]">
            <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ scale: lockProton ? [1, 1.35, 1] : [1, 1.15, 1], filter: lockProton ? "drop-shadow(0 0 70px rgba(255,120,180,1))" : "drop-shadow(0 0 35px rgba(255,120,180,0.6))" }} transition={{ duration: lockProton ? 1.2 : 1.8, repeat: Infinity, ease: "easeInOut" }}>
              <svg viewBox="0 0 32 29.6" className="w-20 h-20"><path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.5,16,21.2,16,21.2s16-11.7,16-21.2C32,3.8,28.2,0,23.6,0z" fill="#ff5f9e" /></svg>
            </motion.div>

            {["Trust", "Efforts", "Time" ].map((word, i) => (
              <motion.div key={word} className="absolute inset-0 flex items-center justify-center" animate={{ rotate: 360 }} transition={{ duration: 24 + i * 10, repeat: Infinity, ease: "linear" }}>
                <motion.div className="absolute rounded-full" style={{ width: `${220 + i * 60}px`, height: `${220 + i * 60}px`, border: "1px solid rgba(255,120,180,0.35)" }} animate={{ boxShadow: lockProton ? "0 0 55px rgba(255,120,180,1)" : "0 0 18px rgba(255,120,180,0.45)" }} transition={{ duration: 1.4, ease: "easeInOut" }} />
                <div className="absolute px-4 py-2 rounded-full bg-gradient-to-r from-rose-700 to-pink-600 shadow-[0_0_30px_rgba(255,120,180,0.85)]" style={{ transform: `translate(${110 + i * 30}px, 0)` }}>{word}</div>
              </motion.div>
            ))}

            <motion.div animate={lockProton ? { x: 240, y: 240, scale: 1.5 } : { x: [60, 380, 220, 100], y: [380, 160, 60, 300] }} transition={{ duration: lockProton ? 4.6 : 14, repeat: lockProton ? 0 : Infinity, ease: "easeInOut" }} onClick={() => { beat(); setLockProton(true); setTimeout(() => setStage(4), 4600); }} className="absolute cursor-pointer">
              <motion.div animate={{ scale: pulse ? 1.35 : 1 }} transition={{ type: "spring", stiffness: 240 }} className="relative w-16 h-16 rounded-full bg-gradient-to-br from-indigo-300 via-indigo-500 to-indigo-700 shadow-[0_0_40px_rgba(120,160,255,1)] flex items-center justify-center text-sm font-semibold">Shivam</motion.div>
            </motion.div>

            <AnimatePresence>{lockProton && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute left-1/2 top-[64%] -translate-x-1/2 italic text-pink-200">Nucleus stabilized ✨</motion.div>)}</AnimatePresence>
          </div>
        </div>
      )}

      {stage === 4 && (
        <div className="flex flex-col items-center gap-8">
          <p className="italic text-pink-200">"Love is tested gently, never harshly"</p>

          <div className="relative w-[360px] h-[360px] flex items-center justify-center">
            <motion.svg viewBox="0 0 32 29.6" className="w-36 h-36" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <defs>
                <clipPath id="heart-beaker">
                  <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.5,16,21.2,16,21.2s16-11.7,16-21.2C32,3.8,28.2,0,23.6,0z" />
                </clipPath>
              </defs>
              <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.5,16,21.2,16,21.2s16-11.7,16-21.2C32,3.8,28.2,0,23.6,0z" fill="#14000b" stroke="#ff7ab6" strokeWidth="1" />
              <AnimatePresence>
                {filledTubes.map((i) => (
                  <motion.rect key={i} clipPath="url(#heart-beaker)" x="0" width="32" initial={{ height: 0, y: 29.6 }} animate={{ height: (i + 1) * 9.8, y: 29.6 - (i + 1) * 9.8 }} transition={{ duration: 2.2, ease: "easeInOut" }} fill={["#ff6aa2", "#b983ff", "#ffb347"][i]} style={{ mixBlendMode: "screen" }} />
                ))}
              </AnimatePresence>
            </motion.svg>
          </div>

          <div className="flex gap-12">
            {["Distance", "Silence", "Time"].map((item, i) => (
              <motion.div key={item} onClick={() => { if (filledTubes.includes(i)) return; beat(); setFilledTubes((v) => { const next = [...v, i]; if (next.length === 3) setTimeout(() => setStage(5), 4200); return next; }); }} whileHover={{ scale: 1.15 }} className="cursor-pointer flex flex-col items-center">
                <div className="relative w-12 h-32 rounded-b-full border border-white/20 overflow-hidden bg-black/40 shadow-[0_0_25px_rgba(255,150,220,0.6)]">
                  <motion.div animate={{ height: filledTubes.includes(i) ? 0 : "100%" }} transition={{ duration: 1.8, ease: "easeInOut" }} className="absolute bottom-0 w-full" style={{ background: `linear-gradient(to top, ${["#ff6aa2", "#b983ff", "#ffb347"][i]}, transparent)` }} />
                </div>
                <span className="mt-3 text-sm italic text-pink-200">{item}</span>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {filledTubes.length === 3 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="text-center text-lg italic text-pink-100 max-w-md">
                "Every test blends into something stronger — a love that holds, heals, and stays"
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}

      {stage === 5 && (
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="flex flex-col items-center gap-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="text-3xl text-center text-pink-100">
            "Across reactions, across time, across every universe — I choose you, Shruti"
          </motion.h1>

          {!finalAnswer && (
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setFinalAnswer(true)} className="px-10 py-3 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-600 shadow-[0_0_40px_rgba(255,120,180,0.9)]">
              Will you be my forever Valentine? ❤️
            </motion.button>
          )}

          {finalAnswer && (
            <>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="italic text-pink-200 text-center whitespace-pre-line">
                — Shivam{"\n"}
                This reaction is permanent, uncontrollable, and joyfully irreversible
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 6 }} className="fixed inset-0 bg-black pointer-events-none" />

              {Array.from({ length: 18 }).map((_, i) => (
                <motion.div key={`final-heart-${i}`} initial={{ opacity: 0, y: 40 }} animate={{ opacity: [0, 0.6, 0], y: -120 }} transition={{ delay: 2 + i * 0.4, duration: 8 }} className="fixed w-6 h-6 bg-pink-500/30 rotate-45 rounded-sm" style={{ left: `${(i * 13) % 100}%`, bottom: "-10%" }} />
              ))}

              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 6, duration: 3 }} className="fixed bottom-6 right-6 text-xs italic text-pink-300">
                crafted with love by Shivam
              </motion.span>
            </>
          )}
        </motion.div>
      )}
    </main>
  );
}
