import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
	return (
    
		<div className="flex flex-row items-start md:flex-wrap gap-[59px] min-w-[958px] p-0">
			{products.map((product,key) => (
				<ProductCard key={key} productDetails={product} />
			))}
		</div>
	);
};

export default ProductGrid;
