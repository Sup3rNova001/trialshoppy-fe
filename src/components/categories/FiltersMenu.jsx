import React from 'react';
import Image from 'next/image';

const FilterListSvg = (
	<svg
		width="16"
		height="17"
		viewBox="0 0 16 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<rect
			x="16"
			y="0.5"
			width="16"
			height="16"
			rx="8"
			transform="rotate(90 16 0.5)"
			fill="#B3B3B3"
		/>
	</svg>
);

const FiltersMenu = (props) => {
	const { selectedFilters, setSelectedFilters } = props;

	return (
		<div className="flex flex-col gap-2.5 ">
			<div className=" hidden lg:block px-4 border-b-2 border-gray-300 h-10">
				<h3 className="text-xl font-bold">Filter</h3>
			</div>

			<div className="px-4 flex flex-col items-start gap-2">
				<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
					<div className="flex flex-row justify-between w-full">
						<h4 className="font-bold">Price</h4>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>
					<div className="flex flex-col items-start gap-2 w-full">
						<div className="flex flex-row justify-between bg-gray-700 text-white w-full p-1 rounded">
							<p>₹1 Lakh</p>
							<p className="font-bold">to</p>
							<p>5 Lakh</p>
						</div>
						<div>
							<svg
								width="208"
								height="10"
								viewBox="0 0 206 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<line
									x1="0.5"
									y1="4.5"
									x2="205.5"
									y2="4.5"
									stroke="#A1A1AA"
									stroke-linecap="round"
								/>
								<circle cx="108" cy="5" r="5" fill="#3F3F46" />
								<circle cx="5" cy="5" r="5" fill="#3F3F46" />
							</svg>
						</div>
					</div>

					<div className="flex flex-col items-start gap-1.5 w-full text-sm">
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer ">
							{FilterListSvg}
							<span>0 - 2 Lakh</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>2 - 5 Lakh</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer ">
							{FilterListSvg}
							<span>5 - 7 Lakh</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>7 - 9 Lakh</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer ">
							{FilterListSvg}
							<span>9 & Above</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
					<div className="flex flex-row justify-between w-full">
						<h4 className="font-bold">Brand</h4>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>

					<div className="flex flex-col items-start shadow-sm w-full bg-white">
						<div className="flex flex-col justify-center items-start px-1 py-1 gap-2.5 w-full">
							<div className="flex flex-row justify-center items-center gap-1">
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_51_17689)">
										<path
											d="M11.625 10.5H11.0325L10.8225 10.2975C11.5575 9.4425 12 8.3325 12 7.125C12 4.4325 9.8175 2.25 7.125 2.25C4.4325 2.25 2.25 4.4325 2.25 7.125C2.25 9.8175 4.4325 12 7.125 12C8.3325 12 9.4425 11.5575 10.2975 10.8225L10.5 11.0325V11.625L14.25 15.3675L15.3675 14.25L11.625 10.5ZM7.125 10.5C5.2575 10.5 3.75 8.9925 3.75 7.125C3.75 5.2575 5.2575 3.75 7.125 3.75C8.9925 3.75 10.5 5.2575 10.5 7.125C10.5 8.9925 8.9925 10.5 7.125 10.5Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0_51_17689">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<div className="border-l-2 border-gray-300 w-full">
									<input
										type="text"
										name=""
										id=""
										placeholder="Search here..."
										className="focus:outline-none w-full"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-1.5 w-full text-sm">
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Gucci</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Adidas</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Armani</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Prada</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Polo Ralph Lauren</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
					<div className="flex flex-row justify-between w-full">
						<h4 className="font-bold">Model</h4>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>

					<div className="flex flex-col items-start gap-1 w-full text-sm">
						<div className="flex flex-row justify-between w-full pl-2.5">
							<p>Brand</p>
							<Image
								src="/images/keyboard_arrow_down.svg"
								width={20}
								height={20}
								alt="SVG map icon"
							/>
						</div>
						<div className="flex flex-row justify-between w-full pl-2.5">
							<p>Brand</p>
							<Image
								src="/images/keyboard_arrow_down.svg"
								width={20}
								height={20}
								alt="SVG map icon"
							/>
						</div>
						<div className="flex flex-col flex-start gap-1 w-full">
							<div className="flex flex-row justify-between w-full pl-2.5">
								<p>Brand</p>
								<Image
									src="/images/keyboard_arrow_down.svg"
									width={20}
									height={20}
									alt="SVG map icon"
								/>
							</div>
							<div className="flex flex-row justify-between w-full pl-5">
								<p>Product</p>
							</div>
							<div className="flex flex-row justify-between w-full pl-5">
								<p>Product</p>
							</div>
							<div className="flex flex-row justify-between w-full pl-5">
								<p>Product</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
					<div className="flex flex-row justify-between w-full">
						<h4 className="font-bold">Sub-Categories</h4>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>
					<div className="flex flex-col items-start gap-1 w-full text-sm">
						<div className="flex flex-row justify-between w-full pl-2.5">
							<p>Brand</p>
							<Image
								src="/images/keyboard_arrow_down.svg"
								width={20}
								height={20}
								alt="SVG map icon"
							/>
						</div>
						<div className="flex flex-row justify-between w-full pl-2.5">
							<p>Brand</p>
							<Image
								src="/images/keyboard_arrow_down.svg"
								width={20}
								height={20}
								alt="SVG map icon"
							/>
						</div>
						<div className="flex flex-col flex-start gap-1 w-full">
							<div className="flex flex-row justify-between w-full pl-2.5">
								<p>Brand</p>
								<Image
									src="/images/keyboard_arrow_down.svg"
									width={20}
									height={20}
									alt="SVG map icon"
								/>
							</div>
							<div className="flex flex-row justify-between w-full pl-5">
								<p>Product</p>
							</div>
							<div className="flex flex-row justify-between w-full pl-5">
								<p>Product</p>
							</div>
							<div className="flex flex-row justify-between w-full pl-5">
								<p>Product</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
					<div className="flex flex-row justify-between w-full">
						<h4 className="font-bold">State</h4>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>
					<div className="flex flex-col items-start shadow-sm w-full bg-white">
						<div className="flex flex-col justify-center items-start px-1 py-1 gap-2.5 w-full">
							<div className="flex flex-row justify-center items-center gap-1">
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_51_17689)">
										<path
											d="M11.625 10.5H11.0325L10.8225 10.2975C11.5575 9.4425 12 8.3325 12 7.125C12 4.4325 9.8175 2.25 7.125 2.25C4.4325 2.25 2.25 4.4325 2.25 7.125C2.25 9.8175 4.4325 12 7.125 12C8.3325 12 9.4425 11.5575 10.2975 10.8225L10.5 11.0325V11.625L14.25 15.3675L15.3675 14.25L11.625 10.5ZM7.125 10.5C5.2575 10.5 3.75 8.9925 3.75 7.125C3.75 5.2575 5.2575 3.75 7.125 3.75C8.9925 3.75 10.5 5.2575 10.5 7.125C10.5 8.9925 8.9925 10.5 7.125 10.5Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0_51_17689">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<div className="border-l-2 border-gray-300 w-full">
									<input
										type="text"
										name=""
										id=""
										placeholder="Search here..."
										className="focus:outline-none w-full"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-1.5 w-full text-sm">
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Mini Tractor</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>DigiTrac</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Tractors</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Escorts</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>FarmTrac</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
					<div className="flex flex-row justify-between w-full">
						<h4 className="font-bold">District</h4>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>
					<div className="flex flex-col items-start shadow-sm w-full bg-white">
						<div className="flex flex-col justify-center items-start px-1 py-1 gap-2.5 w-full">
							<div className="flex flex-row justify-center items-center gap-1">
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_51_17689)">
										<path
											d="M11.625 10.5H11.0325L10.8225 10.2975C11.5575 9.4425 12 8.3325 12 7.125C12 4.4325 9.8175 2.25 7.125 2.25C4.4325 2.25 2.25 4.4325 2.25 7.125C2.25 9.8175 4.4325 12 7.125 12C8.3325 12 9.4425 11.5575 10.2975 10.8225L10.5 11.0325V11.625L14.25 15.3675L15.3675 14.25L11.625 10.5ZM7.125 10.5C5.2575 10.5 3.75 8.9925 3.75 7.125C3.75 5.2575 5.2575 3.75 7.125 3.75C8.9925 3.75 10.5 5.2575 10.5 7.125C10.5 8.9925 8.9925 10.5 7.125 10.5Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0_51_17689">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<div className="border-l-2 border-gray-300 w-full">
									<input
										type="text"
										name=""
										id=""
										placeholder="Search here..."
										className="focus:outline-none w-full"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-1.5 w-full text-sm">
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Mini Tractor</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>DigiTrac</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Tractors</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Escorts</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>FramTrac</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
					<div className="flex flex-row justify-between w-full">
						<h4 className="font-bold">Block</h4>
						<Image
							src="/images/keyboard_arrow_down.svg"
							width={20}
							height={20}
							alt="SVG map icon"
						/>
					</div>
					<div className="flex flex-col items-start shadow-sm w-full bg-white">
						<div className="flex flex-col justify-center items-start px-1 py-1 gap-2.5 w-full">
							<div className="flex flex-row justify-center items-center gap-1">
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_51_17689)">
										<path
											d="M11.625 10.5H11.0325L10.8225 10.2975C11.5575 9.4425 12 8.3325 12 7.125C12 4.4325 9.8175 2.25 7.125 2.25C4.4325 2.25 2.25 4.4325 2.25 7.125C2.25 9.8175 4.4325 12 7.125 12C8.3325 12 9.4425 11.5575 10.2975 10.8225L10.5 11.0325V11.625L14.25 15.3675L15.3675 14.25L11.625 10.5ZM7.125 10.5C5.2575 10.5 3.75 8.9925 3.75 7.125C3.75 5.2575 5.2575 3.75 7.125 3.75C8.9925 3.75 10.5 5.2575 10.5 7.125C10.5 8.9925 8.9925 10.5 7.125 10.5Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0_51_17689">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<div className="border-l-2 border-gray-300 w-full">
									<input
										type="text"
										name=""
										id=""
										placeholder="Search here..."
										className="focus:outline-none w-full"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start gap-1.5 w-full text-sm">
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Mini Tractor</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>DigiTrac</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Tractors</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>Escorts</span>
						</div>
						<div className="flex flex-row items-center gap-2.5 w-full cursor-pointer">
							{FilterListSvg}
							<span>FramTrac</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FiltersMenu;
