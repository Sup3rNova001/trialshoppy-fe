import React from 'react';
import Image from 'next/image';

const ProductCard = ({ productDetails }) => {
	const { name, description, rating, numberOfRatings, price, image } =
		productDetails;

	return (
		<div className="p-4 flex shadow-lg rounded-sm h-full">
			<div className="w-full">
				<div className="h-1/2 relative">
					<button className="p-1 absolute right-2 top-2 border border-gray-800 z-10 bg-white rounded">
						<p className="text-xs">+ Follow</p>
					</button>
					<div className="cursor-pointer p-1 text-xs absolute bottom-2 left-2 bg-white border z-10 rounded-sm">
						<p className="p-0.5 inline bg-gray-600 text-white rounded-sm">
							⭐{rating}
						</p>
						<p className="p-0.5 inline">{numberOfRatings} Ratings</p>
					</div>
					<div className="absolute inset-0">
						<Image
							className="w-full h-full object-cover"
							src={image}
							width={200}
							height={200}
							alt={name}
						/>
					</div>
				</div>

				<p className="mt-2 text-sm font-semibold">{name}</p>
				<div className="flex text-xs">
					<span className="flex flex-col justify-center mt-2 mb-2 p-1 border border-gray-400 bg-gray-50 rounded-sm">
						<p>₹{price}</p>
					</span>
					<p className="p-1">{description}</p>
				</div>

				{/* <ul className="text-xs">
          <li>Shirts starting from $599</li>
          <li>Free Delivery</li>
        </ul> */}

				<ul className="text-xs ">
					<li className="flex items-center">
						<div className="mr-2">
							<Image
								src="/images/listmarker.svg"
								width={10}
								height={10}
								alt="SVG List Marker"
							/>
						</div>
						<span>Shirts starting from $599</span>
					</li>
					<li  className="flex items-center">
						<div className="mr-2">
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
				<button className="w-full p-1 mt-1 border border-gray-400  text-center font-semibold text-sm bg-gray-50 rounded-sm">
					View Details
				</button>
				<div className="flex justify-between text-xs mt-1">
					<div className="flex">
						<span className="text-green-600 font-bold">Open</span>
						<p className="ml-1 font-light">until 10:30</p>
					</div>

					<div className='flex items-center'>
					<div className="mr-2">
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
