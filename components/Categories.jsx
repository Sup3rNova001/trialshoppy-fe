import React, { useState } from 'react';
import FiltersMenu from '../src/components/categories/FiltersMenu';
import ProductCard from '../src/components/categories/ProductCardCategoryPage';
import { getProducts } from '../src/components/categories/getProducts';
import Image from 'next/image';
import Link from 'next/link';

const productList = getProducts();

const Categories = () => {
	const [selectedFilters, setSelectedFilters] = useState(null);
	const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);

	function toggleFilterMenu() {
		setFilterMenuOpen(!isFilterMenuOpen);
	}

	const filteredProducts = productList;

	return (
		<div className="w-full">
			<div className="block lg:hidden w-full">
				<div className="flex flex-row justify-end items-center w-full">
					<div
						className="flex flex-row justify-center items-center gap-2.5 px-4 py-1 border border-black"
						onClick={toggleFilterMenu}>
						<button>Filter</button>
						<Image
							src="/images/filtericon.svg"
							width={20}
							height={20}
							alt="filter icon"></Image>
					</div>
				</div>
			</div>
			<div className="flex">
				<div
					className={`${
						isFilterMenuOpen ? 'block z-20 w-full absolute top-0' : 'hidden'
					} lg:block lg:w-1/5 bg-gray-100 pt-9 pb-4 h-[1670px]`}>
					<div className="flex flex-row items-center justify-end w-full">
						<div
							className="p-1 lg:hidden bg-black text-white rounded"
							onClick={toggleFilterMenu}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								class="bi bi-x"
								viewBox="0 0 16 16">
								{' '}
								<path
									d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
									fill="white"></path>{' '}
							</svg>
						</div>
					</div>
					<FiltersMenu
						selectedFilters={selectedFilters}
						setSelectedFilters={setSelectedFilters}
					/>
				</div>

				<div
					className={`${
						isFilterMenuOpen ? 'hidden' : 'block'
					} lg:w-4/5 p-2 lg:p-4`}>
					<h1 className="font-bold text-2xl">Category Heading</h1>
					<div className="flex flex-col gap-4 items-start mt-5">
						<div className="flex flex-col gap-4 items-start">
							<h2 className="font-semibold text-lg">Brand Heading</h2>
							<div className="mt-4 md:m-0 overflow-auto hover:overflow-x-scroll">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14 min-w-max">
									{filteredProducts.map((product, key) => (
										<ProductCard key={key} productDetails={product} />
									))}
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 items-start">
							<h2 className="font-semibold text-lg">Brand Heading</h2>
							<div className="mt-4 md:m-0 overflow-auto hover:overflow-x-scroll">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14 min-w-max">
									{filteredProducts.map((product, key) => (
										<ProductCard key={key} productDetails={product} />
									))}
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 items-start">
							<h2 className="font-semibold text-lg">Brand Heading</h2>
							<div className="mt-4 md:m-0 overflow-auto hover:overflow-x-scroll">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14 min-w-max">
									{filteredProducts.map((product, key) => (
										<ProductCard key={key} productDetails={product} />
									))}
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 items-start">
							<h2 className="font-semibold text-lg">Brand Heading</h2>
							<div className="mt-4 md:m-0 overflow-auto hover:overflow-x-scroll">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14 min-w-max">
									{filteredProducts.map((product, key) => (
										<ProductCard key={key} productDetails={product} />
									))}
								</div>
							</div>
						</div>
						<div className="flex w-full items-center justify-center md:justify-start">
							<div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-2 border rounded-sm p-6 lg:w-2/3">
								<div className="flex flex-col md:flex-row items-center gap-2">
									<svg
										width="32"
										height="33"
										viewBox="0 0 32 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M28.6316 4.48885H1.68421V0.93329H28.6316V4.48885ZM16.8421 21.3777C16.8421 23.4044 17.5663 25.5733 18.5263 27.6V29.3777H1.68421V18.7111H0V15.1555L1.68421 6.26662H28.6316L29.8105 12.4888C28.6316 11.92 27.4189 11.6 26.1053 11.6C21.0526 11.6 16.8421 16.0444 16.8421 21.3777ZM15.1579 18.7111H5.05263V25.8222H15.1579V18.7111ZM32 21.3777C32 26 26.1053 32.9333 26.1053 32.9333C26.1053 32.9333 20.2105 26 20.2105 21.3777C20.2105 18 22.9053 15.1555 26.1053 15.1555C29.3053 15.1555 32 18 32 21.3777ZM28.1263 21.5555C28.1263 20.4888 27.1158 19.4222 26.1053 19.4222C25.0947 19.4222 24.0842 20.3111 24.0842 21.5555C24.0842 22.6222 24.9263 23.6888 26.1053 23.6888C27.2842 23.6888 28.2947 22.6222 28.1263 21.5555Z"
											fill="#7C7C7C"
										/>
									</svg>
									<div className="flex flex-col items-center justify-start gap-1">
										<h3 className="w-2/3 md:w-full font-bold text-lg">
											Can&apos;t find the Business
										</h3>
										<p className="w-2/3 md:w-full text-center md:text-left font-thin">
											Adding a business to TrialShoppy is always free.{' '}
										</p>
									</div>
								</div>
								<Link href={'#'}>
									<button className="bg-black text-white px-4 py-1 rounded">
										Add Business
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
