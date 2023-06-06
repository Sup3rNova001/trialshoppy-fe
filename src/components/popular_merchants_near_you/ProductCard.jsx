import React from 'react';
import Image from 'next/image';

const ProductCard = ({ productDetails }) => {
	const { name, description, rating, numberOfRatings, price, image } =
		productDetails;

	return (
		<div className="p-[15px] flex flex-col gap-[10px] items-center shadow-lg rounded w-[280px] h-[387px]">
			<div className="h-[160px] relative w-[250px]">
				<button className="pr-[10px] pl-[10px] pt-[5px] pb-[5px] absolute right-1 top-1 border z-10 bg-white rounded-sm">
					<p className="text-xs">+ Follow</p>
				</button>
				<div className="pl-[8px] pt-[4px] pr-[8px] pb-[4px] flex flex-row items-center gap-[8px] cursor-pointer p-1 text-xs absolute bottom-1 left-1 bg-white border z-10 rounded-sm">
					<p className="p-[5px]  bg-gray-600 text-white rounded-sm">
						⭐ {rating}
					</p>
					<p className="p-[5px] ">{numberOfRatings} Ratings</p>
				</div>
				<div className="absolute top-0 left-0 inset-0">
					<Image
						className="object-cover"
						src={image}
						width={250}
						height={160}
						alt={name}
					/>
				</div>
			</div>

			<div className="flex h-[23px] w-[250px] items-start">
				<p className="font-semibold">{name}</p>
			</div>

			<div className="flex flex-col  w-[250px] h-[74px] p-0">
				<div className="flex flex-row items-center gap-[8px] text-xs h-[40px]">
					<span className="border-box p-1 border border-gray-400 bg-gray-50 rounded-sm]">
						<p>₹{price}</p>
					</span>
					<p className="">{description}</p>
				</div>

				<ul className="text-xs ">
					<li className="flex items-center gap-[5px] w-[250px]">
						<div className="">
							<Image
								src="/images/listmarker.svg"
								width={10}
								height={10}
								alt="SVG List Marker"
							/>
						</div>
						<span>Shirts starting from $599</span>
					</li>
					<li className="flex items-center  gap-[5px] w-[250px]">
						<div className="">
							<Image
								src="/images/listmarker.svg"
								width={10}
								height={10}
								alt="SVG List Marker"
							/>
						</div>
						<span> Free Delivery</span>
					</li>
				</ul>
			</div>

			
			<button className="flex items-center justify-center gap-[10px] w-[250px] pt-[6px] pb-[6px] pl-[36px] pr-[36px] border border-gray-400  bg-gray-50 rounded">
				<p className="font-semibold"> View Details</p>
			</button>
	

			<div className="flex flex-row items-center justify-between text-xs w-[250px]">
				<div className="flex flex-row items-center gap-1">
					<span className="text-green-600 font-bold">Open</span>
					<p className="font-light">until 10:30</p>
				</div>

				<div className="flex flex-row gap-1 items-center">
					<div className="">
						<Image
							src="/images/imap.svg"
							width={10}
							height={10}
							alt="SVG map icon"
						/>
					</div>
					<span className="font-light">10km away</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
