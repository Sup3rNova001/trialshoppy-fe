import React from 'react';
import Image from 'next/image';

const ProductCard = ({ productDetails }) => {
	const { name, description, rating, numberOfRatings, price, image } =
		productDetails;

	return (
		<div className="p-2 flex flex-col gap-1 items-center shadow-lg rounded h-full">
			<div className="w-full">
				<div className="h-1/2 relative">
					<button className="p-1 absolute right-1 top-1 border z-10 bg-white rounded-sm">
						<p className="text-xs">+ Follow</p>
					</button>
					<div className="pl-2 pt-1 flex flex-row items-center gap-1 cursor-pointer p-1 text-xs absolute bottom-1 left-1 bg-white border z-10 rounded-sm">
						<p className="p-0.5  bg-gray-600 text-white rounded-sm">
							⭐ {rating}
						</p>
						<p className="p-0.5 ">{numberOfRatings} Ratings</p>
					</div>
					<div className="absolute top-0 left-0 inset-0">
						<Image
							className="w-full h-full object-cover"
							src={image}
							width={100}
							height={100}
							alt={name}
						/>
					</div>
				</div>

				<p className="mt-1 mb-1 text-sm font-semibold">{name}</p>
				<div className="flex flex-row items-center gap-1 text-xs">
					<span className="flex flex-col justify-center mt-2 mb-2 p-1 border border-gray-400 bg-gray-50 rounded-sm">
						<p>₹{price}</p>
					</span>
					<p className="p-1">{description}</p>
				</div>

				<ul className="text-xs ">
					<li className="flex items-center gap-1">
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
					<li className="flex items-center gap-1">
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
				<div className="flex items-center">
					<button className="w-full p-1 mt-1 border border-gray-400  text-center  bg-gray-50 rounded">
						<p className="font-semibold text-sm"> View Details</p>
					</button>
				</div>

				<div className="flex flex-row items-center justify-between text-xs mt-1">
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
		</div>
	);
};

export default ProductCard;
