import { ArrowRight, ShieldCheck, Heart, Clock3, Globe } from "lucide-react";

const Aboutpage = () => {
  return (
    <main className="space-y-24 px-6 py-6 text-slate-900">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/50 backdrop-blur-md">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              আমাদের গল্প
            </span>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              CarRental: শান্ত, নির্ভরযোগ্য এবং স্মার্ট কার ভাড়া অভিজ্ঞতা
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              আমরা একটি আধুনিক গাড়ি ভাড়া প্ল্যাটফর্ম, যেখানে আপনার ভ্রমণ শুরু হয় সহজ, দ্রুত এবং নিরাপদভাবে। উচ্চমানের গাড়ি, দ্রুত বুকিং এবং ব্যক্তিগত সহায়তার মাধ্যমে আমরা প্রতিদিন নতুন পারফেক্ট রাইড তৈরি করি।
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">নিরাপত্তা প্রথম</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  আমাদের সব গাড়ি নিয়মিত পরীক্ষা ও পরিষ্কার করা হয়। নিরাপদ ভ্রমণের জন্য গাইডলাইন মেনে চলা আমাদের অগ্রাধিকার।
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">সুগম বুকিং</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  কয়েকটি ক্লিকে আপনার প্রিয় গাড়ি বুক করুন। ফ্লেক্সিবল সময়, ছাড় এবং অবিরাম কাস্টমার সাপোর্ট আমাদের শক্তি।
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-sky-500 to-blue-700 p-8 text-white shadow-2xl shadow-slate-900/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_45%)]" />
            <div className="relative space-y-6">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-100">বিশ্বস্ত সেবা</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">প্রিমিয়াম ক্যারিয়ার ক্যার</h3>
                <p className="mt-3 text-sm leading-6 text-slate-100/90">
                  লাক্সারি ও সাধারণ সব ধরনের গাড়ির ভাড়া এখন আরও সহজ ও সুবিধাজনক।
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm text-slate-100/80">৪.৯/৫ গ্রাহক রেটিং</p>
                  <p className="mt-3 text-2xl font-semibold">তারকা সেবার প্রতিশ্রুতি</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm text-slate-100/80">২৪/৭ সাপোর্ট</p>
                  <p className="mt-3 text-2xl font-semibold">যেকোনো সময় পাশে</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-sky-600">
              <ShieldCheck size={28} />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-slate-900">নিরাপত্তা ও বিশ্বাস</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              প্রতিটি গাড়ি সঠিকভাবে সার্ভিস করা হয়। আমাদের ড্রাইভাররা প্রশিক্ষিত এবং প্রতিটি রাইড নিরাপদ।
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-emerald-600">
              <Clock3 size={28} />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-slate-900">সময়মত পরিষেবা</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              দ্রুত বুকিং ও সময়মত ডেলিভারি নিশ্চিত করে আমরা আপনার যাত্রাকে স্ট্রেস-ফ্রি করি।
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-fuchsia-600">
              <Heart size={28} />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-slate-900">গ্রাহক সন্তুষ্টি</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              আমরা গ্রাহকের মতামত শুনি ও দ্রুত ফিডব্যাক নিয়ে সেবা উন্নত করি।
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-10 text-slate-50 shadow-2xl shadow-slate-900/20 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                বিশ্বস্ত সুবিধা</span>
              <h2 className="text-3xl font-semibold leading-tight">আপনার যাত্রা আমাদের কাছে গুরুত্বপুর্ণ</h2>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                অভিজ্ঞতার প্রতিটি মুহূর্তকে আমরা স্বপ্নের মতো করে তুলতে চাই — যাত্রা হোক ব্যবসা কিংবা ছুটির ভ্রমণ, আমরা নিশ্চিত করছি আরাম, গতি ও নিরাপত্তা।
              </p>
              <button className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300">
                আমাদের প্ল্যান দেখুন <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-slate-300">বিশ্বব্যাপী রুট</p>
                <p className="mt-4 text-3xl font-semibold text-white">১৫০+</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-slate-300">খুশি গ্রাহক</p>
                <p className="mt-4 text-3xl font-semibold text-white">২০,০০০+</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-slate-300">সরাসরি ড্রাইভার</p>
                <p className="mt-4 text-3xl font-semibold text-white">৫০০+</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm text-slate-300">২৪/৭ সাপোর্ট</p>
                <p className="mt-4 text-3xl font-semibold text-white">হ্যাঁ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/40">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">কিভাবে আমরা কাজ করি</span>
            <h2 className="text-3xl font-bold leading-tight text-slate-900">সহজ ধাপে আপনার গাড়ি ভাড়া</h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              আমাদের পরিকল্পনা স্বচ্ছ, দ্রুত এবং ব্যবহারকারী বান্ধব। একবারে বুক করুন, নিশ্চিত হন, আর আরামদায়ক যাত্রা উপভোগ করুন।
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">1. গাড়ি নির্বাচন</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">আপনার প্রয়োজন অনুযায়ী পারফেক্ট গাড়ি বেছে নিন।</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">2. সুবিধা নির্ধারণ</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">ঠিক সময়, টার্মস এবং অতিরিক্ত সুবিধা চয়ন করুন।</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">3. সহজ বুকিং</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">মাঠে লেনদেন ছাড়া অনলাইনে সুরক্ষিত বুকিং সম্পন্ন করুন।</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aboutpage;