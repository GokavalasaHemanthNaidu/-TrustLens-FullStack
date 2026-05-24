"use client";

import Link from "next/link";
import { Shield, Fingerprint, Cpu, ArrowRight, Activity, FileCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#060913] text-white overflow-x-hidden selection:bg-teal-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#060913]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-teal-400" />
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              TrustLens
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/auth"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth"
              className="text-sm font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-[#060913] to-[#060913] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-teal-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            TrustLens API v2 is now live
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]"
          >
            Cryptographic Document <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Verification Engine
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Detect deepfakes, block forged IDs, and securely anchor digital truth on an immutable cryptographic ledger instantly with zero-shot AI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              href="/auth"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:scale-105"
            >
              Anchor Your First Document <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="#features"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            >
              Explore Technology
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 border-t border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Enterprise-Grade Forensics</h2>
            <p className="text-slate-400 text-sm md:text-base">
              Built for high-security environments, combining visual heuristics with immutable blockchain-inspired cryptography.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
                <Cpu className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero-Shot AI Extraction</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automatically extract names, document IDs, and dates from unstructured documents without pre-training models using advanced NLP.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6">
                <Activity className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Deepfake Forensics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Detects digital tampering, screen recaptures (Moiré patterns), and Error Level Analysis (ELA) anomalies to block fraudulent uploads instantly.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="h-12 w-12 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-6">
                <Fingerprint className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">ECDSA Cryptography</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every verified document is digitally signed and anchored to an immutable ledger using SHA-256 and Elliptic Curve Digital Signatures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to secure your data?</h2>
          <p className="text-slate-400 text-lg">Join the platform that defines digital truth.</p>
          <Link 
            href="/auth"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 shadow-xl shadow-white/5"
          >
            Start Anchoring Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 TrustLens Forensic Chain. All rights reserved.</p>
      </footer>
    </div>
  );
}
