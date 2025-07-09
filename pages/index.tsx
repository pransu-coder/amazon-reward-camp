// ✅ ULTRA MODERN UI VERSION — Hyper-Detailed, High-End Icons, Updated Voucher List

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Icon } from "@iconify/react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const scrollRef = useRef(null);

  const rewards = [
    { name: "Amazon ₹1000 Voucher", icon: "mdi:amazon" },
    { name: "Flipkart ₹500 Voucher", icon: "simple-icons:flipkart" },
    { name: "PhonePe ₹250 Voucher", icon: "simple-icons:phonepe" },
    { name: "Zomato ₹100 Voucher", icon: "simple-icons:zomato" },
    { name: "Swiggy ₹100 Voucher", icon: "mdi:food" },
    { name: "Google Play ₹50 Voucher", icon: "logos:google-play-icon" },
    { name: "Amazon Pay ₹25 Voucher", icon: "simple-icons:amazonpay" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
    };
    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    setShowModal(true);
  };

  return (
    <>
      <Head>
        <title>⚡ Ultra Reward Blitz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen font-['Outfit'] text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-[gradientShift_15s_ease-in-out_infinite] text-[10px] md:text-[12px]">
        <header className="px-6 py-4 border-b border-white/20 bg-black/50 backdrop-blur-2xl flex items-center justify-between shadow-2xl">
          <h1 className="text-white/60 font-semibold text-[10px] md:text-sm flex items-center gap-2">
            <Icon icon="solar:clock-circle-bold" className="text-base animate-pulse" />
            <span>Limited Drop</span>
          </h1>
          <div className="text-[10px] text-white/60 flex items-center gap-2">
            <Icon icon="solar:clock-circle-bold" className="text-base animate-pulse" />
            <span>Next Drop in 5h 21m</span>
          </div>
        </header>

        <section className="px-4 md:px-10 py-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-widest drop-shadow-xl flex justify-center items-center gap-2">
              <Icon icon="mdi:parachute" className="text-2xl text-pink-300 animate-bounce" />
              Exclusive Drop
            </h2>
            <p className="mt-4 text-white/70 text-[10px] md:text-xs max-w-2xl mx-auto">
              Buy trial subscription & unlock surprise gift rewards!
            </p>
          </motion.div>

          <div className="mt-10 overflow-hidden border border-indigo-800 bg-black/30 rounded-3xl p-5 shadow-2xl">
            <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar py-3">
              {rewards.concat(rewards).map((reward, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="min-w-[130px] bg-gradient-to-br from-[#6a11cb] to-[#2575fc] border border-white/20 rounded-xl p-4 shadow-lg hover:shadow-pink-500/30 transition-all flex flex-col items-center"
                >
                  <Icon icon={reward.icon} className="text-3xl mb-2 text-white" />
                  <p className="text-[10px] text-center font-semibold text-white/90">
                    {reward.name}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-green-300 text-xs font-medium bg-black/40 inline-block px-4 py-1 rounded-full border border-green-500 shadow-sm">
  🎯 Out of all vouchers shown above, at least one is guaranteed just for you — no luck involved!
</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
  href="#"
  className="flex items-center justify-center gap-1 bg-gradient-to-tr from-yellow-300 to-yellow-500 text-black px-2.5 py-1 rounded-full font-semibold text-[9px] shadow-sm hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300 border border-yellow-300 ring-1 ring-yellow-100 md:px-4 md:py-1.5">
  <Icon icon="fluent:lightbulb-20-filled" className="text-sm animate-bounce text-yellow-800" />
  Buy Trial Subscription
</a>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-br from-green-400 to-green-600 text-black px-6 py-2 rounded-full font-bold text-xs shadow-xl hover:brightness-110"
            >
              ✅ Bought
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 shadow-xl">
              <h3 className="text-teal-300 font-semibold mb-2 text-sm">✨ Features</h3>
              <ul className="list-disc ml-5 space-y-1 text-xs text-white/80">
                <li>Email in 48h</li>
                <li>New drops 12h</li>
                <li>1-click verify</li>
                <li>Dashboard soon</li>
              </ul>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 shadow-xl">
              <h3 className="text-fuchsia-300 font-semibold mb-2 text-sm">💡 Tips</h3>
              <ul className="list-disc ml-5 space-y-1 text-xs text-white/80">
                <li>Use real email</li>
                <li>Watch limited drops</li>
                <li>Don't refresh after verify</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-xs italic">
              Made for offer lovers • UI v3.1
            </p>
          </div>
        </section>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-[#1e1e2f] border border-fuchsia-700 rounded-3xl p-8 max-w-md w-full text-white text-xs shadow-xl"
              >
                <h2 className="text-lg font-bold text-pink-300 text-center mb-4">
                  🎁 Reward Awaits
                </h2>
                {!confirmed ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 bg-black/30 border border-white/20 rounded placeholder-white/60"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-br from-fuchsia-500 to-pink-600 py-2 rounded font-bold shadow-md hover:brightness-110"
                    >
                      🚀 Reveal
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="block text-center text-[10px] text-white/50 hover:underline mt-2"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <Icon
                      icon="mdi:check-circle"
                      className="text-green-400 text-3xl mx-auto animate-pulse"
                    />
                    <p className="mt-4 text-xs">
                      Sent to <strong>{email}</strong>
                    </p>
                    <button
                      onClick={() => setShowModal(false)}
                      className="mt-5 w-full bg-green-600 hover:bg-green-500 py-2 rounded font-bold"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx global>{`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </main>
    </>
  );
}
