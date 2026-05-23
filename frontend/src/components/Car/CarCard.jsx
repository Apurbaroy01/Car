import Image from "next/image";
import Link from "next/link";


const CarCard = ({ car }) => {
    return (
        <div
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


                <div className="flex flex-wrap items-center justify-between gap-3 pt-">
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
        </div>

    );
};

export default CarCard;