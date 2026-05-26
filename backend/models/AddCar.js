const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		owner: { type: String, required: true },
		brand: { type: String, required: true},
		model: { type: String, required: true },
		category: { type: String },
		pricePerDay: { type: Number, required: true},
		seats: { type: Number },
		fuel: { type: String },
		transmission: { type: String },
		location: { type: String,  },
		image: { type: String },
		description: { type: String },
		availability: { type: String, default: 'Available now',  },
		features: { type: [String], default: [] },
		rating: { type: Number, min: 0, max: 5, default: 0 },
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Text index for search across brand, model, description and features
CarSchema.index({ brand: 'text', model: 'text' });

// Common single-field indexes for faster queries
CarSchema.index({ pricePerDay: 1 });
CarSchema.index({ category: 1 });
CarSchema.index({ location: 1 });


CarSchema.index({ email: 1 });

module.exports = mongoose.model('Cars', CarSchema);
