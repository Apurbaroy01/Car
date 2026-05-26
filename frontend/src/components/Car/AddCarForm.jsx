"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Camera, DollarSign, Users, MapPin, List, Settings, Mail } from "lucide-react";


const buildFeatures = (features = "") =>
    features
        .split(",")
        .map((feature) => feature.trim())
        .filter(Boolean);

const AddCarForm = ({token}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async (values) => {
        setError("");

        const payload = {
            ...values,
            features: buildFeatures(values.features),
        };

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/add-car", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to add car");
            }

            reset();
            alert("Car added successfully!");
        } catch (submitError) {
            setError(submitError.message || "Unable to add car");
            console.error(submitError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-5xl bg-linear-to-b from-white/70 to-white/90 p-8 rounded-3xl shadow-xl border border-slate-100">
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
                            <input
                                {...register("brand", { required: "Brand is required" })}
                                placeholder="e.g. Tesla"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-200"
                            />
                            {errors.brand && <span className="mt-1 text-sm text-rose-600">{errors.brand.message}</span>}
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Model <span className="text-rose-600">*</span></span>
                            <input
                                {...register("model", { required: "Model is required" })}
                                placeholder="e.g. Model S"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-200"
                            />
                            {errors.model && <span className="mt-1 text-sm text-rose-600">{errors.model.message}</span>}
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Category</span>
                            <input
                                {...register("category")}
                                placeholder="SUV / Sedan / Electric"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3"
                            />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Price per day</span>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-slate-400"><DollarSign size={16} /></span>
                                <input
                                    {...register("pricePerDay")}
                                    type="number"
                                    placeholder="75"
                                    className="w-full rounded-lg border border-slate-200 px-10 py-3"
                                />
                            </div>
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Seats</span>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-slate-400"><Users size={16} /></span>
                                <input
                                    {...register("seats")}
                                    type="number"
                                    placeholder="5"
                                    className="w-full rounded-lg border border-slate-200 px-10 py-3"
                                />
                            </div>
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Fuel</span>
                            <input
                                {...register("fuel")}
                                placeholder="Petrol / Diesel / Electric"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3"
                            />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Transmission</span>
                            <input
                                {...register("transmission")}
                                placeholder="Automatic"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3"
                            />
                        </label>

                        <label className="flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Location</span>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-slate-400"><MapPin size={16} /></span>
                                <input
                                    {...register("location")}
                                    placeholder="City or branch"
                                    className="w-full rounded-lg border border-slate-200 px-10 py-3"
                                />
                            </div>
                        </label>

                        <label className="col-span-2 flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Image URL</span>
                            <input
                                {...register("image")}
                                placeholder="https://"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3"
                            />
                        </label>

                        <label className="col-span-2 flex w-full flex-col">
                            <span className="mb-2 text-sm font-medium text-slate-700">Features</span>
                            <input
                                {...register("features")}
                                placeholder="e.g. Heated seats, Navigation"
                                className="w-full rounded-lg border border-slate-200 px-4 py-3"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <span className="mb-2 text-sm font-medium text-slate-700">Description</span>
                        <textarea
                            {...register("description")}
                            placeholder="Short description about the car"
                            rows={5}
                            className="w-full rounded-lg border border-slate-200 px-4 py-3"
                        />
                    </label>

                    {error && <div className="text-sm text-rose-600">{error}</div>}

                    <div className="flex items-center justify-end">
                        <button type="submit" disabled={loading} className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-sky-600 to-blue-600 px-6 py-3 text-white shadow-lg hover:scale-105 transition disabled:opacity-60">
                            <span className="font-semibold">{loading ? "Saving..." : "Add Car"}</span>
                            <Settings size={16} className="opacity-90" />
                        </button>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                        <div className="h-48 w-full overflow-hidden rounded-lg bg-slate-50">
                            <div className="flex h-full items-center justify-center text-slate-400">
                                <Camera size={40} />
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-slate-900">Brand Model</h3>
                            <p className="mt-1 text-sm text-slate-500">Category • Location</p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700">$0/day</span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-sm text-slate-700">- seats</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                        <h4 className="text-sm font-medium text-slate-700">Quick info</h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            <li className="flex items-center gap-2"><List size={16} className="text-sky-500" /> No features added</li>
                            <li className="flex items-center gap-2"><MapPin size={16} className="text-sky-500" /> Location</li>
                            <li className="flex items-center gap-2"><Mail size={16} className="text-sky-500" /> {"Email"}</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </form>
    );
}
export default AddCarForm;