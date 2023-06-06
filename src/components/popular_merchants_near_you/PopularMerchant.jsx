import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import { getProducts } from './getProducts';
import Image from 'next/image';

const activeTabClass = 'pb-2 font-bold border-b-2 border-black';
const PopularMerchant = () => {
	const [activeTab, setActiveTab] = useState('fashion');
	const [productList, setProductList] = useState(getProducts('fashion'));
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
		const products = getProducts(tab);
		console.log(products);
		setProductList(products);
		setMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<div className="p-5 m-auto min-w-[1200px] lg:max-w-[1200px]">
			<p className="text-lg font-bold border-b-2 mb-5 border-red-700 inline-block">
				POPULAR MERCHANTS NEAR YOU
			</p>
			<div className="md:hidden">
				<div className="flex flex-row justify-end item-center gap-1 w-[324px] ">
					<button className="" onClick={toggleMobileMenu}>
						EXPLORE BY CATEGORY
					</button>

					<div className="cursor-pointer" onClick={toggleMobileMenu}>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>
				</div>

				{isMobileMenuOpen && (
					<ul className="flex flex-col gap-1 justify-center items-end w-[324px]">
						<li className={``} onClick={() => handleTabClick('fashion')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'fashion' ? activeTabClass : ''
								}`}>
								Popular in Fashion
							</p>
						</li>
						<li className={` `} onClick={() => handleTabClick('jewellery')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'jewellery' ? activeTabClass : ''
								}`}>
								Popular in Jewellery
							</p>
						</li>
						<li className={` `} onClick={() => handleTabClick('electronics')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'electronics' ? activeTabClass : ''
								}`}>
								Popular in Electronics
							</p>
						</li>
						<li className={``} onClick={() => handleTabClick('furniture')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'furniture' ? activeTabClass : ''
								}`}>
								Popular in Furniture
							</p>
						</li>
					</ul>
				)}
			</div>
			<div className="flex flex-row justify-between items-start gap-[36px]">
				<div className="hidden md:block w-[206px] h-[387px]">
					<ul className="flex flex-col gap-[32px] ">
						<li className={``} onClick={() => handleTabClick('fashion')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'fashion' ? activeTabClass : ''
								}`}>
								Popular in Fashion
							</p>
						</li>

						<li className={` `} onClick={() => handleTabClick('jewellery')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'jewellery' ? activeTabClass : ''
								}`}>
								{' '}
								Popular in Jewellery
							</p>
						</li>
						<li className={` `} onClick={() => handleTabClick('electronics')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'electronics' ? activeTabClass : ''
								}`}>
								{' '}
								Popular in Electronics
							</p>
						</li>
						<li className={``} onClick={() => handleTabClick('furniture')}>
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
