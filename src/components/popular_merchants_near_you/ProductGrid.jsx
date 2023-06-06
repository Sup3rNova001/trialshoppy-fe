import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
	return (
    
		<div className="flex flex-row items-start gap-[59px] min-w-[958px] md:max-w-[1200px]">
			{products.map((product,key) => (
				<ProductCard key={key} productDetails={product} className="shrink-0" />
			))}
		</div>
	);
};

export default ProductGrid;
