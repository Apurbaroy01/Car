import { MapPin, Phone, Mail, Clock3, Map, Heart } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="space-y-16 px-6 py-6 text-slate-900">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/40 backdrop-blur-md">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              যোগাযোগ করুন
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              সাহায্য দরকার? আমাদের সাথে সহজেই যোগাযোগ করুন
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              CarRental-এ আপনার যাত্রাকে আরও আরামদায়ক ও নিরাপদ করা আমাদের লক্ষ্য। কোনো প্রশ্ন, রিজার্ভেশন বা বিশেষ অনুরোধ থাকলে ঠিক এখানেই আমাদের বার্তা দিন।
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">ফোন নাম্বার</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">+৮৮ ০১২৩৪৫৬৭৮৯</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">ইমেল</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">support@carrental.com</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-linear-to-br from-sky-600 to-blue-700 p-8 text-white shadow-2xl shadow-slate-900/10">
            <div className="space-y-6">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-100">সীমাহীন সহায়তা</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">আপনার যাত্রা আমাদের অগ্রাধিকার</h3>
                <p className="mt-3 text-sm leading-7 text-slate-100/90">
                  আমরা দ্রুত সাড়া দিয়ে আপনার ভাড়া অভিজ্ঞতাকে সহজ, সুবিধাজনক ও আনন্দদায়ক করি।
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm text-slate-100/80">২৪/৭ সহায়তা</p>
                  <p className="mt-3 text-2xl font-semibold">হ্যাঁ</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm text-slate-100/80">রিজার্ভেশন</p>
                  <p className="mt-3 text-2xl font-semibold">দ্রুত</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">সহজেই আমাদের পৌঁছান</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                প্রয়োজনীয় তথ্য, ঠিকানা এবং সাপোর্ট কাস্টম সার্ভিস — সবকিছু একই জায়গায়।
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">
              এখনই যোগাযোগ করুন
            </button>
          </div>

          <div className="grid gap-4">
            <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-600 text-white">
                <Phone size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">কল করুণ</h3>
                <p className="mt-2 text-sm text-slate-600">+৮৮ ০১২৩৪৫৬৭৮৯</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white">
                <Mail size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">ইমেল লিখুন</h3>
                <p className="mt-2 text-sm text-slate-600">support@carrental.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-600 text-white">
                <MapPin size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">অফিসে আসুন</h3>
                <p className="mt-2 text-sm text-slate-600">ঢাকা, বাংলাদেশ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
          <h2 className="text-3xl font-bold text-slate-900">মেসেজ পাঠান</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            আপনার নাম, ইমেল এবং বার্তা লিখুন। আমরা দ্রুত সাড়া দেব।
          </p>

          <form className="mt-8 space-y-6">
            <label className="block text-sm font-medium text-slate-900">
              নাম
              <input
                type="text"
                placeholder="আপনার নাম"
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </label>

            <label className="block text-sm font-medium text-slate-900">
              ইমেল
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </label>

            <label className="block text-sm font-medium text-slate-900">
              বার্তা
              <textarea
                rows={5}
                placeholder="আপনার প্রশ্ন বা অনুরোধ লিখুন..."
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </label>

            <button className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
              মেসেজ পাঠান
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/40">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky-600 text-white">
              <Map size={28} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">সহযোগী ঠিকানা</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              ঢাকা, বাংলাদেশ
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Clock3 size={28} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">কার্যালয় সময়</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              সোম-শুক্র: ৯:০০ - ১৯:০০
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-fuchsia-600 text-white">
              <Heart size={28} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">বিশ্বাসযোগ্য সেবা</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              দ্রুত প্রতিক্রিয়া, সাবলীল সমাধান এবং গ্রাহকপ্রিয় সহযোগিতা।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;