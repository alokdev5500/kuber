"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Share2, Users, Check, ArrowRight } from "lucide-react";

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "mykuber.in/join/AK789";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="referral" className="py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[48px] shadow-apple border border-border overflow-hidden lg:flex items-stretch">
          
          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Users className="text-primary w-8 h-8" />
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-7xl font-black tracking-apple text-foreground leading-tight"
              >
                Invite Friends, <br />
                Earn Faster.
              </motion.h2>
              <p className="text-xl text-muted font-medium leading-relaxed">
                Growth is better together. Share the magic of My Kuber and unlock a passive income stream.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8 bg-secondary rounded-[32px] border border-border">
              <p className="text-2xl font-black text-foreground">
                You get <span className="text-primary italic">10%</span> of every ad your friend watches.
              </p>
              <p className="text-muted font-bold text-sm uppercase tracking-widest">Lifetime Earnings • No Cap</p>
            </div>
          </div>

          {/* Action Side */}
          <div className="lg:w-1/2 bg-zinc-50 p-12 lg:p-20 border-l border-border flex flex-col justify-center gap-12">
            <div className="flex flex-col gap-6">
              <label className="text-sm font-black uppercase tracking-[0.2em] text-muted ml-2">Your Invitation Link</label>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-[24px] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-white border-2 border-border p-2 pl-6 rounded-[24px] shadow-sm">
                  <span className="flex-grow font-bold text-foreground overflow-hidden text-ellipsis whitespace-nowrap mr-4">
                    {referralLink}
                  </span>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-foreground text-background px-6 py-4 rounded-[18px] font-black text-sm hover:scale-105 transition-all shadow-lg active:scale-95"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border">
                   <Share2 size={20} className="text-primary" />
                 </div>
                 <p className="font-bold text-foreground">Share instantly on WhatsApp, Telegram, or Twitter</p>
              </div>
              
              <button className="w-full bg-primary text-white py-6 rounded-[24px] font-black text-xl shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                Send Invitation
                <ArrowRight size={24} />
              </button>
            </div>

            <div className="flex justify-center gap-4 mt-4">
               {[1,2,3].map(i => (
                 <div key={i} className="w-2 h-2 rounded-full bg-border" />
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
