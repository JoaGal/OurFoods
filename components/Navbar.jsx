import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../public/logo.svg";

const Navbar = () => {
	const [inputValue, setInputValue] = useState("");

	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		router.push(`/searchResults/${inputValue}`);
		setInputValue("");
	};

	return (
		<nav className="h-16 flex items-center">
			<div className="container">
				<div className="navContainer flex items-center justify-between">
					<div className="flex items-center">
						<Link href="/">
							<div
								className={`flex items-center font-semibold mr-8 cursor-pointer`}
							>
								<Image className="w-10" src={Logo} alt="logo" />
								<h3 className="text-2xl text-gray-900 font-bold">ourFoods</h3>
							</div>
						</Link>
						<Link
							href="/random"
							className="hover:bg-red-500 ease-in hover:text-slate-50 rounded-md p-1 duration-200 hidden md:block"
						>
							Random Meal
						</Link>
					</div>
					<form
						onSubmit={e => {
							handleSubmit(e);
						}}
					>
						<label className="relative block">
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 24 24"
								>
									<path
										fill="rgb(99 102 241 / 0.5)"
										d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275q-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"
									/>
								</svg>
							</span>
							<input
								onChange={e => {
									setInputValue(e.target.value);
								}}
								className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-1 sm:text-sm"
								placeholder="Search..."
								type="text"
								name="search"
								value={inputValue}
							/>
						</label>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
