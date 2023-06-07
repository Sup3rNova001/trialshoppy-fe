import React from 'react';
import Image from 'next/image';

const ProductCard = ({ productDetails }) => {
	const { name, description, rating, numberOfRatings, price, image } =
		productDetails;

	return (
		<div className="p-2 flex flex-col gap-2 items-center shadow-lg rounded">
			<div className="h-40 relative w-52 md:w-60 m-auto">
				<button className="hidden md:block px-2 py-1 absolute right-2 top-2 border z-10 bg-white rounded-sm">
					<p className="text-xs">+ Follow</p>
				</button>
				<div className="px-2 py-1 flex flex-row items-center gap-2 cursor-pointer p-1 text-xs absolute bottom-2 left-2 bg-white border z-10 rounded-sm">
					<p className="p-0.5 bg-gray-600 text-white rounded-sm">⭐ {rating}</p>
					<p className="p-1">{numberOfRatings} Ratings</p>
				</div>
				<div className="absolute inset-0">
					<Image
						className="w-full h-full object-cover"
						src={image}
						width={200}
						height={160}
						alt={name}
					/>
				</div>
			</div>

			<div className="flex h-5 w-60 items-start">
				<p className="font-semibold">{name}</p>
			</div>

			<div className="flex flex-col w-60 h-20 p-0">
				<div className="flex flex-row items-center gap-2 text-xs h-10">
					<span className="border-box p-1 border border-gray-400 bg-gray-50 rounded-sm">
						<p>₹{price}</p>
					</span>
					<p className="">{description}</p>
				</div>

				<ul className="text-xs">
					<li className="flex items-center gap-1 w-60">
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
					<li className="flex items-center gap-1 w-60">
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

			<button className="flex items-center justify-center gap-2 w-60 py-2  px-9  border border-gray-400 bg-gray-50 rounded">
				<p className="font-semibold"> View Details</p>
			</button>

			<div className="flex flex-row items-center justify-between text-xs w-60">
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
