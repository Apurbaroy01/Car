"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Blur */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-14 px-6 py-10 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-yellow-400 backdrop-blur-md">
            Premium Car Rental Platform
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
            Limousine &
            <span className="text-yellow-400"> Car Rental</span>
            <br />
            Landing Page
          </h1>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
            Modern luxury car rental platform with smooth booking experience,
            elegant UI design and premium vehicle showcase for your business.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-black transition hover:scale-105">
              Explore Demo
              <ArrowRight className="transition group-hover:translate-x-1" />
            </button>

            <button className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur-md transition hover:bg-white/10">
              Buy Theme
            </button>
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-yellow-400" size={18} />
              Trusted Platform
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck className="text-yellow-400" size={18} />
              Premium Cars
            </div>

            <div className="flex items-center gap-2">
              <Globe className="text-yellow-400" size={18} />
              Worldwide Service
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Main Image */}
          <div className="relative z-20 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop"
              alt="car"
              width={700}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Left Floating Card */}
          <div className="absolute -left-10 top-20 z-10 hidden w-44 overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl lg:block">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
              alt="car"
              width={300}
              height={200}
              className="h-52 object-cover"
            />

            <div className="p-4">
              <h4 className="font-semibold">Luxury Service</h4>
              <p className="mt-1 text-sm text-slate-300">
                Fast & secure booking
              </p>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="absolute -right-10 bottom-16 z-10 hidden w-44 overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl lg:block">
            <Image
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
              alt="car"
              width={300}
              height={200}
              className="h-52 object-cover"
            />

            <div className="p-4">
              <div className="flex items-center gap-2">
                <Car className="text-yellow-400" size={18} />
                <h4 className="font-semibold">150+ Cars</h4>
              </div>

              <p className="mt-1 text-sm text-slate-300">
                Premium collection
              </p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="absolute -bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-6 rounded-2xl border border-white/10 bg-black/70 px-8 py-5 backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">20K+</h3>
              <p className="text-sm text-slate-300">Customers</p>
            </div>

            <div className="h-12 w-[1px] bg-white/10" />

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">150+</h3>
              <p className="text-sm text-slate-300">Premium Cars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}