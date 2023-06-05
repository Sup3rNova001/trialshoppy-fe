import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
	return (
    
		<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 h-full">
			{products.map((product,key) => (
				<ProductCard key={key} productDetails={product} />
			))}
		</div>
	);
};

export default ProductGrid;
