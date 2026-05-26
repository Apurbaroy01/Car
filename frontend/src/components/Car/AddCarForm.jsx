"use client";

import { useState } from "react";

import { Camera, DollarSign, Users, MapPin, List, Settings, Mail } from "lucide-react";


export default function AddCarForm({ token }) {

    const [form, setForm] = useState({
        brand: "",
        model: "",
        category: "",
        pricePerDay: "",
        seats: "",
        fuel: "",
        transmission: "",
        location: "",
        image: "",
        description: "",
        availability: "Available now",
        features: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function onChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        setError("");

        const payload = {
            ...form,
            features: form.features.split(",").map((f) => f.trim()).filter(Boolean),
        };

        console.log("Submitting form with payload:", payload);

        try {
            setLoading(true);
            const res = await fetch("http://localhost:5000/add-car", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            console.log("Response from server:", data);
            setLoading(false);

            if (res.status === 201) {
                setForm({
                    brand: "",
                    model: "",
                    category: "",
                    pricePerDay: "",
                    seats: "",
                    fuel: "",
                    transmission: "",
                    location: "",
                    image: "",
                    description: "",
                    availability: "Available now",
                    features: "",
                });
                alert("Car added successfully!");
            } else {
                setError(data.message || "Failed to add car");
                console.error("Error adding car:", data);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }

    }

    return (
        <form onSubmit={onSubmit} className="mx-auto max-w-5xl bg-gradient-to-b from-white/70 to-white/90 p-8 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex items-start justify-between gap-6">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Admin</p>
                    <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Add a new vehicle</h2>
                    <p className="mt-1 text-sm text-slate-600">Provide full details to add a premium car to your fleet.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">Preview</div>
                </div>
            </div>

            <div className="mt-4 grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Brand <span className="text-rose-600">*</span></span>
                            <input name="brand" value={form.brand} onChange={onChange} required placeholder="e.g. Tesla" className="rounded-lg border border-slate-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-200" />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Model <span className="text-rose-600">*</span></span>
                            <input name="model" value={form.model} onChange={onChange} required placeholder="e.g. Model S" className="rounded-lg border border-slate-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-200" />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Category</span>
                            <input name="category" value={form.category} onChange={onChange} placeholder="SUV / Sedan / Electric" className="rounded-lg border border-slate-200 px-4 py-3" />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Price per day</span>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-slate-400"><DollarSign size={16} /></span>
                                <input name="pricePerDay" value={form.pricePerDay} onChange={onChange} type="number" placeholder="75" className="w-full rounded-lg border border-slate-200 px-10 py-3" />
                            </div>
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Seats</span>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-slate-400"><Users size={16} /></span>
                                <input name="seats" value={form.seats} onChange={onChange} type="number" placeholder="5" className="w-full rounded-lg border border-slate-200 px-10 py-3" />
                            </div>
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Fuel</span>
                            <input name="fuel" value={form.fuel} onChange={onChange} placeholder="Petrol / Diesel / Electric" className="rounded-lg border border-slate-200 px-4 py-3" />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Transmission</span>
                            <input name="transmission" value={form.transmission} onChange={onChange} placeholder="Automatic" className="rounded-lg border border-slate-200 px-4 py-3" />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Location</span>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-slate-400"><MapPin size={16} /></span>
                                <input name="location" value={form.location} onChange={onChange} placeholder="City or branch" className="w-full rounded-lg border border-slate-200 px-10 py-3" />
                            </div>
                        </label>

                        <label className="col-span-2 flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Image URL</span>
                            <input name="image" value={form.image} onChange={onChange} placeholder="https://" className="rounded-lg border border-slate-200 px-4 py-3" />
                        </label>

                        <label className="col-span-2 flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Features</span>
                            <input name="features" value={form.features} onChange={onChange} placeholder="e.g. Heated seats, Navigation" className="rounded-lg border border-slate-200 px-4 py-3" />
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <span className="mb-2 text-sm font-medium text-slate-700">Description</span>
                        <textarea name="description" value={form.description} onChange={onChange} placeholder="Short description about the car" className="w-full rounded-lg border border-slate-200 px-4 py-3" rows={5} />
                    </label>

                    {error && <div className="text-sm text-rose-600">{error}</div>}

                    <div className="flex items-center justify-end">
                        <button type="submit" disabled={loading} className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-3 text-white shadow-lg hover:scale-105 transition disabled:opacity-60">
                            <span className="font-semibold">{loading ? "Saving..." : "Add Car"}</span>
                            <Settings size={16} className="opacity-90" />
                        </button>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                        <div className="h-48 w-full overflow-hidden rounded-lg bg-slate-50">
                            {form.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={form.image} alt="preview" className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex h-full items-center justify-center text-slate-400">
                                    <Camera size={40} />
                                </div>
                            )}
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-slate-900">{form.brand || "Brand"} {form.model || "Model"}</h3>
                            <p className="mt-1 text-sm text-slate-500">{form.category || "Category"} • {form.location || "Location"}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700">${form.pricePerDay || "0"}/day</span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-sm text-slate-700">{form.seats || "-"} seats</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                        <h4 className="text-sm font-medium text-slate-700">Quick info</h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            <li className="flex items-center gap-2"><List size={16} className="text-sky-500" /> {form.features || "No features added"}</li>
                            <li className="flex items-center gap-2"><MapPin size={16} className="text-sky-500" /> {form.location || "Location"}</li>
                            <li className="flex items-center gap-2"><Mail size={16} className="text-sky-500" /> {"Email"}</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </form>
    );
}