import React from "react";
import { Link } from "wouter";
import MoonIcon from "./MoonIcon";
import PieIcon from "./PieIcon";

const Navbar = () => {
	return (
		<nav className='h-20 bg-gray-800 flex items-center justify-between'>
			<Link href='/'>
				<a className='rounded-br-lg rounded-tr-lg border-solid bg-purple-500 w-20 h-full relative'>
					<div className='h-2/4'></div>
					<div className='h-2/4 rounded-br-lg rounded-tl-lg bg-purple-300'></div>
					<span className='inline-block absolute top-[35%] left-[30%]'>
						<PieIcon />
					</span>
				</a>
			</Link>

			<span className='ml-auto mr-8'>
				<MoonIcon />
			</span>
			<div className='w-[80px] h-full border-l border-l-[#494E6E] flex justify-center items-center'>
				<div className='w-[35px] h-[35px] rounded-full bg-white'></div>
			</div>
		</nav>
	);
};

export default Navbar;
