import AddCarForm from "@/components/Car/AddCarForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function NewCarPage() {
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  console.log("Token in NewCarPage:", token);
  return (
    <main className="min-h-screen bg-slate-50 py-4">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Admin</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Add new car</h1>
          <p className="mt-2 text-slate-600">Fill the form below to add a car to the rental fleet.</p>
        </div>

        <AddCarForm token={token} />
      </div>
    </main>
  );
}
