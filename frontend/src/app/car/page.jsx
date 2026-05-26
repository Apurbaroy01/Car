
import CarCard from "@/components/Car/CarCard";

export const metadata = {
    title: "Car Rentals | Rent a Car for Trips in Bangladesh",
    description: "Discover premium rental cars with full details, transparent pricing, and instant booking options. Find the perfect vehicle for business trips, family outings, and weekend escapes.",
    keywords: [
        "car rental",
        "rent a car",
        "Bangladesh car hire",
        "rental cars",
        "travel cars",
        "car booking"
    ],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Car Rentals | Rent a Car for Trips in Bangladesh",
        description: "Discover premium rental cars with full details, transparent pricing, and instant booking options.",
        type: "website",
        locale: "en_US",
        siteName: "Car Rental Service"
    }
};

const CarPage = async () => {
    let cars = [];

    try {
        const res = await fetch("http://localhost:5000/get-car",
            { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Failed to fetch cars");
        }

        const data = await res.json();
        cars = data;
        
    } catch (error) {
        console.error("Error fetching cars:", error);
    }

    return (
        <section className="bg-slate-50 py-4">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                        Fleet Showcase
                    </p>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
                        Rent the perfect car for every trip
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
                        Browse our rental cars with full details, clear pricing, and instant booking links.
                    </p>
                </div>

                {cars.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {cars.map((car) => (
                            <CarCard key={car._id} car={car} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
                        No cars available right now. Please try again later.
                    </div>
                )}
            </div>
        </section>
    );
};

export default CarPage;