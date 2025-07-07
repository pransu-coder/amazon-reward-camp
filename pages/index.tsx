// Binance gradient background with auto-horizontal scrolling rewards inside a single card

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Icon } from '@iconify/react';

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [emailStep, setEmailStep] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null!);

  const allRewards = [
    { name: "Amazon ₹1000 Voucher", icon: "mdi:amazon" },
    { name: "Flipkart ₹50 Gift Card", icon: "simple-icons:flipkart" },
    { name: "Swiggy ₹100 Coupon", icon: "simple-icons:swiggy" },
    { name: "Zomato ₹100 Deal", icon: "simple-icons:zomato" },
    { name: "PhonePe ₹100 Cashback", icon: "simple-icons:phonepe" }
  ];

  const affiliateLink = "https://www.amazon.in/your-affiliate-link";

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !scrollContainer.scrollWidth) return;
    let scrollAmount = 0;
    const scrollStep = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };
    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.cdnfonts.com/css/binance-plex" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Binance PLEX Light', sans-serif;
            background: linear-gradient(145deg, #1e3c72, #2a5298, #1e3c72);
            background-size: 600% 600%;
            animation: animateBG 30s ease infinite;
            color: #fff;
          }

          @keyframes animateBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-indigo-700/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 max-w-3xl w-full text-center"
        >
          <div className="flex flex-col items-center gap-4 mb-6">
            <Icon icon="mdi:amazon" className="text-yellow-400 text-6xl animate-bounce" />
            <h1 className="text-4xl font-bold text-yellow-300">Amazon Sale Special</h1>
            <p className="text-white/80 text-sm max-w-md">Win mystery rewards like Amazon, Flipkart, Zomato, Swiggy, PhonePe — just buy a ₹1 trial subscription!</p>
          </div>

          {!submitted ? (
            <div className="mt-4">
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/70 border border-yellow-400 p-4 rounded-xl shadow-md shadow-yellow-500/40 w-full max-w-md mx-auto overflow-hidden">
                <div ref={scrollRef} className="flex space-x-4 overflow-x-scroll scroll-smooth no-scrollbar">
                  {allRewards.concat(allRewards).map((reward, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-48 h-48 flex flex-col justify-center items-center bg-black/40 rounded-xl border border-gray-600 shadow-inner"
                    >
                      <Icon icon={reward.icon} className="text-5xl text-white/90 mb-2" />
                      <p className="text-xs text-center mt-2 font-semibold text-white/90">{reward.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <button className="mt-6 w-full bg-blue-700 text-white py-3 font-bold rounded-xl hover:bg-blue-800">
                  🛒 Buy ₹1 Trial Subscription
                </button>
              </a>
              <button
                onClick={() => setEmailStep(true)}
                className="mt-4 w-full bg-green-700 text-white py-2 rounded-xl hover:bg-green-800"
              >
                ✅ I Have Purchased
              </button>
            </div>
          ) : confirmed ? (
            <div className="mt-8">
              <Icon icon="mdi:check-decagram" className="text-green-400 text-4xl mx-auto mb-2 animate-bounce" />
              <h3 className="text-xl font-bold text-green-300">Success!</h3>
              <p className="text-sm text-white/80">Your selected reward will be delivered to <strong>{email}</strong> within 48 hours.</p>
            </div>
          ) : null}

          {emailStep && !confirmed && (
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 mt-6">
              <input
                type="email"
                required
                placeholder="Enter your email to receive reward"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-600 rounded-xl bg-black/50 text-white placeholder:text-white/60 focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="bg-purple-700 text-white font-bold py-3 rounded-xl hover:bg-purple-800"
              >
                🎉 Reveal My Mystery Reward
              </button>
            </form>
          )}

          <div className="mt-10 text-left text-xs text-white/70">
            <h4 className="font-bold mb-2">📜 Terms & Notes:</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Offer valid only via our ₹1 referral link.</li>
              <li>Email must be correct to receive reward.</li>
              <li>Rewards are randomly selected from pool.</li>
              <li>This site is not affiliated with Amazon, Flipkart, etc.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}