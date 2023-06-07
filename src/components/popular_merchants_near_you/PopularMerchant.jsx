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
		<div className=" m-auto">
			<div className='text-xl font-bold text-center md:text-left'>
				<h2 className="border-b-2 mb-5 border-red-700 inline-block ">
					POPULAR MERCHANTS NEAR YOU
				</h2>
			</div>

			<div className="block md:hidden">
				<div className="flex flex-row justify-end items-center gap-1">
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
					<ul className="flex flex-col gap-2 justify-center items-center w-full">
						<li onClick={() => handleTabClick('fashion')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'fashion' ? activeTabClass : ''
								}`}>
								Popular in Fashion
							</p>
						</li>
						<li onClick={() => handleTabClick('jewellery')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'jewellery' ? activeTabClass : ''
								}`}>
								Popular in Jewellery
							</p>
						</li>
						<li onClick={() => handleTabClick('electronics')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'electronics' ? activeTabClass : ''
								}`}>
								Popular in Electronics
							</p>
						</li>
						<li onClick={() => handleTabClick('furniture')}>
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
			<div className="flex flex-row justify-start gap-8">
				<div className="hidden md:block ">
					<ul className="flex flex-col gap-14">
						<li onClick={() => handleTabClick('fashion')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'fashion' ? activeTabClass : ''
								}`}>
								Popular in Fashion
							</p>
						</li>

						<li onClick={() => handleTabClick('jewellery')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'jewellery' ? activeTabClass : ''
								}`}>
								Popular in Jewellery
							</p>
						</li>
						<li onClick={() => handleTabClick('electronics')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'electronics' ? activeTabClass : ''
								}`}>
								Popular in Electronics
							</p>
						</li>
						<li onClick={() => handleTabClick('furniture')}>
							<p
								className={`cursor-pointer inline-block ${
									activeTab === 'furniture' ? activeTabClass : ''
								}`}>
								Popular in Furniture
							</p>
						</li>
					</ul>
				</div>
				<div className="mt-4 md:m-0 overflow-auto hover:overflow-x-scroll">
					<ProductGrid products={productList} />
				</div>
			</div>
		</div>
	);
};

export default PopularMerchant;
