import Link from "next/link";
import cars from "@/lib/cars";
import Image from "next/image";

export default function CarList() {
    return (
        <section className="bg-slate-50 py-14">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                        Fleet Showcase
                    </p>
                    <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
                        Rent the perfect car for every trip
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
                        Browse our rental cars with full details, clear pricing, and instant booking links.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {cars.map((car) => (
                        <article
                            key={car.id}
                            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="relative h-56 overflow-hidden bg-slate-100">
                                <Image
                                    src={car.image}
                                    alt={`${car.brand} ${car.model}`}
                                    className="h-full w-full object-cover"
                                    width={500}
                                    height={300}
                                />
                            </div>

                            <div className="space-y-4 p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-sky-600">
                                            {car.category}
                                        </p>
                                        <h3 className="mt-2 text-xl font-semibold text-slate-900">
                                            {car.brand} {car.model}
                                        </h3>
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                                        {car.rating} ⭐
                                    </span>
                                </div>

                                <p className="text-sm leading-6 text-slate-600">{car.description}</p>

                                <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="font-semibold text-slate-900">Seats</p>
                                        <p>{car.seats}</p>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="font-semibold text-slate-900">Fuel</p>
                                        <p>{car.fuel}</p>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="font-semibold text-slate-900">Transmission</p>
                                        <p>{car.transmission}</p>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="font-semibold text-slate-900">Location</p>
                                        <p>{car.location}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                                    <div>
                                        <p className="text-sm text-slate-500">Price per day</p>
                                        <p className="text-2xl font-bold text-slate-900">${car.pricePerDay}</p>
                                    </div>
                                    <Link
                                        href={`/car/${car.id}`}
                                        className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
