import Link from "next/link";
import cars from "@/lib/cars";
import Image from "next/image";

const CarDetailsPage = async ({ params }) => {
    const { id: carId } = await params;
    const car = cars.find((item) => item.id === carId);

    if (!car) {
        return (
            <main className="min-h-screen bg-slate-50 py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <p>id: {carId}</p>
                    <h1 className="text-3xl font-semibold text-slate-900">Car not found</h1>
                    <p className="mt-4 text-slate-600">The car you are looking for is not available in our rental collection.</p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex rounded-full bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700"
                    >
                        Return home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-slate-50 py-4">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-4 flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Car detail</p>
                        <h1 className="mt-2 text-2xl font-bold text-slate-900">
                            {car.brand} {car.model}
                        </h1>
                        <p className="mt-2 text-slate-600">{car.category} rental with full details and booking info.</p>
                    </div>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                    >
                        Back to cars
                    </Link>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <Image
                            src={car.image}
                            alt={`${car.brand} ${car.model}`}
                            className="h-96 w-full object-cover"
                            width={500}
                            height={300}
                        />
                        <div className="p-4">
                            <p className="text-sm text-slate-500">{car.availability}</p>
                            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                                {car.brand} {car.model}
                            </h2>
                            <p className="mt-4 text-slate-600 leading-7">{car.description}</p>

                            <div className="mt-8 grid gap-2 sm:grid-cols-2">
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Seats</p>
                                    <p className="mt-2 text-xl font-semibold text-slate-900">{car.seats}</p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Fuel</p>
                                    <p className="mt-2 text-xl font-semibold text-slate-900">{car.fuel}</p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Transmission</p>
                                    <p className="mt-2 text-xl font-semibold text-slate-900">{car.transmission}</p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
                                    <p className="mt-2 text-xl font-semibold text-slate-900">{car.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="rounded-3xl bg-white p-4 shadow-sm">
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Pricing</p>
                            <p className="mt-4 text-4xl font-bold text-slate-900">${car.pricePerDay}</p>
                            <p className="mt-2 text-slate-600">per day rental</p>

                            <div className="mt-8 space-y-2 text-slate-700">
                                <p>
                                    <span className="font-semibold">Category:</span> {car.category}
                                </p>
                                <p>
                                    <span className="font-semibold">Rating:</span> {car.rating} / 5
                                </p>
                                <p>
                                    <span className="font-semibold">Availability:</span> {car.availability}
                                </p>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-slate-900">Top features</h3>
                                <ul className="mt-2 space-y-3 text-slate-600">
                                    {car.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                                                ✓
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-4 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900">Ready to rent?</h3>
                            <p className="mt-3 text-slate-600">Contact us to reserve this car and get instant confirmation for your trip.</p>
                            <div className="mt-3 space-y-2">
                                <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Phone: +880 1711 000 000</p>
                                <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">Email: support@carrental.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CarDetailsPage;