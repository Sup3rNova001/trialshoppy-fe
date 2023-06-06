import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
	return (
    
		<div className="grid grid-cols-3 gap-10">
			{products.map((product,key) => (
				<ProductCard key={key} productDetails={product} />
			))}
		</div>
	);
};

export default ProductGrid;
