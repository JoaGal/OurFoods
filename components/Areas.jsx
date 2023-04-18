import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "react-responsive";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from "next/link";

const Popular = () => {
	const isBigDesktop = useMediaQuery({
		query: "(min-width: 1400px)",
	});
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1200px)",
	});
	const isIpad = useMediaQuery({
		query: "(min-width: 991px)",
	});
	const isPhone = useMediaQuery({
		query: "(min-width: 768px)",
	});

	const area = [
		{
			areaName: "Egyptian",
			areaImage:
				"https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg",
		},
		{
			areaName: "Italian",
			areaImage:
				"https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			areaName: "Chinese",
			areaImage:
				"https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			areaName: "Indian",
			areaImage:
				"https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			areaName: "Moroccan",
			areaImage:
				"https://images.memphistours.com/large/d7b2e9ec8e200ca0a2297c17fc281f10.jpg",
		},
		{
			areaName: "French",
			areaImage:
				"https://images.pexels.com/photos/6941014/pexels-photo-6941014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			areaName: "Mexican",
			areaImage:
				"https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
	];

	return (
		<div className="my-[5rem]">
			<div className="container">
				<div className="title relative text-center text-3xl font-semibold text-gray-800 mb-4">
					<span className="absolute w-16 h-[2px] bg-red-600 bottom-12 left-2/4 translate-x-[-50%] z-10"></span>
					<span className="absolute w-40 h-[2px] bg-gray-300 bottom-12 left-2/4 translate-x-[-50%] z-0"></span>
					<h3>meals by Area</h3>
				</div>
				<Swiper
					className="mySwiper"
					watchSlidesProgress={true}
					slidesPerView={
						isBigDesktop
							? 5
							: isDesktopOrLaptop
							? 4
							: isIpad
							? 3
							: isPhone
							? 3
							: 2
					}
					spaceBetween={15}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Navigation]}
				>
					{area.map(item => (
						<SwiperSlide key={item.areaName} className="!h-[17rem]">
							<div className="h-full w-full relative">
								<Link href={`/mealsArea/${item.areaName}`}>
									<h5 className="absolute bottom-2 left-2/4 translate-x-[-50%] text-lg font-[500] text-white z-20">
										{item.areaName}
									</h5>
									<div className="overlay absolute w-full h-3/6 bottom-0 bg-gradient-to-t from-[#000000] rounded-md"></div>
									<img
										src={item.areaImage}
										width="100"
										height="100"
										className="w-full h-full object-cover ease-in-out duration-300 rounded-md"
									/>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Popular;
