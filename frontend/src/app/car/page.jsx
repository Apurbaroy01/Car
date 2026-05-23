import Link from "next/link";
import cars from "@/lib/cars";
import Image from "next/image";
import CarCard from "@/components/Car/CarCard";

const CarPage = () => {
    return (
        <section className="bg-slate-50 py-4">
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
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarPage;