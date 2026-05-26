import Link from "next/link";
import Image from "next/image";
import { Eye, FileText, TrendingUp, Plus } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function PostsPage() {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  });
  const userId = session?.user?.id;

  const { token } = await auth.api.getToken({
    headers: await headers()
  })

  let cars = [];
  let totalViews = 0;
  let totalPosts = 0;

  try {
    const res = await fetch(`http://localhost:5000/my-posts/${userId}`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    const data = await res.json();
    cars = data.cars;
    totalViews = data.totalViews;
    totalPosts = data.totalPosts;

    console.log("Fetched posts data:",  data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 py-4">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Dashboard</p>
            <h1 className="mt-3 text-4xl font-extrabold text-slate-900">Your Posts</h1>
            <p className="mt-2 text-slate-600">Manage and track all your rental car listings.</p>
          </div>

          <Link
            href="/car/new"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-600 to-blue-600 px-6 py-3 text-white shadow-lg hover:scale-105 transition"
          >
            <Plus size={18} />
            <span className="font-semibold">Add Car</span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Posts</p>
                <p className="mt-2 text-3xl font-extrabold text-slate-900">{totalPosts}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <FileText className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Published</p>
                <p className="mt-2 text-3xl font-extrabold text-slate-900">{0}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <TrendingUp className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Views</p>
                <p className="mt-2 text-3xl font-extrabold text-slate-900">{totalViews}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Eye className="text-amber-600" size={24} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Bookings</p>
                <p className="mt-2 text-3xl font-extrabold text-slate-900">{0}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <TrendingUp className="text-rose-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Posts Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">All listings</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Car</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Price</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Views</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Bookings</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Action</th>
                </tr>
              </thead>

              <tbody>
                {cars.map((post) => (
                  <tr key={post._id} className="border-b border-slate-100 transition hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.image}
                          alt={`${post.brand} ${post.model}`}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium text-slate-900">
                            {post.brand} {post.model}
                          </p>
                          <p className="text-xs text-slate-500">{post.carId}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-slate-900">${post.pricePerDay}/day</span>
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{post.location}</span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${post.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                          }`}
                      >
                        {post.status === "Available" ? "✓" : "–"} {post.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Eye size={16} className="text-amber-500" />
                        {post.views}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-900">{post.bookings}</span>
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{formatDate(post.createdAt)}</span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/car/${post.carId}`}
                          className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-sky-100 hover:text-sky-700"
                        >
                          View
                        </Link>
                        <button className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-amber-100 hover:text-amber-700">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
