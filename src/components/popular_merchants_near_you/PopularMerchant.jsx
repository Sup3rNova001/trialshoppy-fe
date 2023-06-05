import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import { getProducts } from './getProducts';

const activeTabClass = 'pb-2 font-bold border-b-2 border-black';
const PopularMerchant = () => {
	const [activeTab, setActiveTab] = useState('fashion');
	const [productList, setProductList] = useState(getProducts('fashion'));

	const handleTabClick = (tab) => {
		setActiveTab(tab);
		const products = getProducts(tab);
		console.log(products);
		setProductList(products);
	};

	return (
		<div className="w-4/5 m-auto ">
			<p className="text-lg font-bold mb-8 border-b-2 border-red-700 inline-block">
				POPULAR MERCHANTS NEAR YOU
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-4">
				<div className="col-span-1">
					<ul className="flex flex-col">
						<li
							className={`lg:mb-14 `}
							onClick={() => handleTabClick('fashion')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'fashion' ? activeTabClass : ''
								}`}>
								Popular in Fashion
							</p>
						</li>

						<li
							className={`lg:mb-14 `}
							onClick={() => handleTabClick('jewellery')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'jewellery' ? activeTabClass : ''
								}`}>
								{' '}
								Popular in Jewellery
							</p>
						</li>
						<li
							className={`lg:mb-14 `}
							onClick={() => handleTabClick('electronics')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'electronics' ? activeTabClass : ''
								}`}>
								{' '}
								Popular in Electronics
							</p>
						</li>
						<li
							className={`lg:mb-14`}
							onClick={() => handleTabClick('furniture')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'furniture' ? activeTabClass : ''
								}`}>
								Popular in Furniture
							</p>
						</li>
					</ul>
				</div>
				<div className="h-full col-span-3 ">
					<ProductGrid products={productList} />
				</div>
			</div>
		</div>
	);
};

export default PopularMerchant;
