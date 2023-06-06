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
		<div className="w-[1200px] m-auto ">
			<p className="text-lg font-bold mb-8 border-b-2 border-red-700 inline-block">
				POPULAR MERCHANTS NEAR YOU
			</p>
			<div className="flex flex-row justify-between items-start gap-[36px]">
				<div className="hidden md:block w-[206px] h-[387px]">
					<ul className="flex flex-col gap-[32px] ">
						<li
							className={``}
							onClick={() => handleTabClick('fashion')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'fashion' ? activeTabClass : ''
								}`}>
								Popular in Fashion
							</p>
						</li>

						<li
							className={` `}
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
							className={` `}
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
							className={``}
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
				<div className="">
					<ProductGrid products={productList} />
				</div>
			</div>
		</div>
	);
};

export default PopularMerchant;
