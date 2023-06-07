import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
	return (
		<div className="flex flex-row justify-start items-start gap-14">
			{products.map((product, key) => (
				<ProductCard key={key} productDetails={product}  />
			))}
		</div>
	);
};

export default ProductGrid;
