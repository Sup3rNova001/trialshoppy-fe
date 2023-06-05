const img_fashion = '/images/img_fashion.jpeg';
const img_electronic = '/images/img_electronic.png';
const img_jewellery = '/images/img_jewellery.png';
const img_furniture = '/images/img_furniture.png';

export function getProducts(activeTab) {
	switch (activeTab) {
		case 'fashion':
			return [
				{
					id: 1,
					name: 'Product 1 - Fashion',
					description: 'Sample Description of Product 1 - Fashion',
					rating: 4.5,
					image: img_fashion,
					numberOfRatings: 107,
					price: 329.99,
				},
				{
					id: 2,
					name: 'Product 2 - Fashion',
					description: 'Sample Description of Product 2 - Fashion',
					rating: 3.8,
					image: img_fashion,
					numberOfRatings: 75,
					price: 119.99,
				},
				{
					id: 3,
					name: 'Product 3 - Fashion',
					description: 'Sample Description of Product 3 - Fashion',
					rating: 4.2,
					image: img_fashion,
					numberOfRatings: 238,
					price: 939.99,
				},
			];
		case 'jewellery':
			return [
				{
					id: 4,
					name: 'Product 1 - Jewellery',
					description: 'Sample Description of Product 1 - Jewellery',
					rating: 4.9,
					image: img_jewellery,
					numberOfRatings: 15,
					price: 99.99,
				},
				{
					id: 5,
					name: 'Product 2 - Jewellery',
					description: 'Sample Description of Product 2 - Jewellery',
					rating: 4.6,
					image: img_jewellery,
					numberOfRatings: 12,
					price: 79.99,
				},
				{
					id: 6,
					name: 'Product 3 - Jewellery',
					description: 'Sample Description of Product 3 - Jewellery',
					rating: 4.7,
					image: img_jewellery,
					numberOfRatings: 9,
					price: 89.99,
				},
			];
		case 'electronics':
			return [
				{
					id: 7,
					name: 'Product 1 - Electronics',
					description: 'Sample Description of Product 1 - Electronics',
					rating: 4.2,
					image: img_electronic,
					numberOfRatings: 20,
					price: 199.99,
				},
				{
					id: 8,
					name: 'Product 2 - Electronics',
					description: 'Sample Description of Product 2 - Electronics',
					rating: 4.5,
					image: img_electronic,
					numberOfRatings: 18,
					price: 149.99,
				},
				{
					id: 9,
					name: 'Product 3 - Electronics',
					description: 'Sample Description of Product 3 - Electronics',
					rating: 4.8,
					image: img_electronic,
					numberOfRatings: 25,
					price: 249.99,
				},
			];
		case 'furniture':
			return [
				{
					id: 10,
					name: 'Product 1 - Furniture',
					description: 'Sample Description of Product 1 - Furniture',
					rating: 4.3,
					image: img_furniture,
					numberOfRatings: 15,
					price: 399.99,
				},
				{
					id: 11,
					name: 'Product 2 - Furniture',
					description: 'Sample Description of Product 2 - Furniture',
					rating: 4.6,
					image: img_furniture,
					numberOfRatings: 10,
					price: 299.99,
				},
				{
					id: 12,
					name: 'Product 3 - Furniture',
					description: 'Sample Description of Product 3 - Furniture',
					rating: 4.4,
					image: img_furniture,
					numberOfRatings: 12,
					price: 349.99,
				},
			];
		default:
			return [];
	}
}
