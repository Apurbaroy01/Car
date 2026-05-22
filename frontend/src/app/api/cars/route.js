import { NextResponse } from "next/server";
import cars from "@/lib/cars";

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data.brand || !data.model) {
      return NextResponse.json({ error: "brand and model required" }, { status: 400 });
    }

    const sanitize = (s) =>
      String(s)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

    const id = `${sanitize(data.brand)}-${sanitize(data.model)}-${Date.now()}`;
    const newCar = {
      id,
      brand: data.brand,
      model: data.model,
      category: data.category || "Sedan",
      pricePerDay: Number(data.pricePerDay) || 0,
      seats: Number(data.seats) || 4,
      fuel: data.fuel || "Petrol",
      transmission: data.transmission || "Automatic",
      location: data.location || "Unknown",
      image: data.image || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
      description: data.description || "",
      availability: data.availability || "Available now",
      features: Array.isArray(data.features) ? data.features : (typeof data.features === 'string' ? data.features.split(',').map(s=>s.trim()).filter(Boolean) : []),
      rating: Number(data.rating) || 4.5,
    };

    // mutate in-memory cars list so newly added car is visible immediately
    try {
      cars.push(newCar);
    } catch (e) {
      // ignore if lib/cars is not mutable in some environments
    }

    return NextResponse.json({ ok: true, car: newCar });
  } catch (err) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
