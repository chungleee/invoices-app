import React from "react";
import { Link } from "wouter";
import MoonIcon from "./MoonIcon";
import PieIcon from "./PieIcon";

const Navbar = () => {
	return (
		<nav className='h-20 bg-gray-800 flex items-center justify-between lg:flex-col lg:h-screen lg:rounded-tr-full'>
			<Link href='/'>
				<a className='rounded-br-xl rounded-tr-xl border-solid bg-purple-500 w-20 h-full relative lg:h-[100px] lg:w-[100px]'>
					<div className='h-2/4'></div>
					<div className='h-2/4 rounded-br-xl rounded-tl-xl bg-purple-300'></div>
					<span className='inline-block absolute top-[35%] left-[30%] lg:top-[40%] lg:left-[40%]'>
						<PieIcon />
					</span>
				</a>
			</Link>

			<span className='ml-auto mr-8 lg:mx-auto lg:mt-auto lg:mb-10'>
				<MoonIcon />
			</span>
			<div className='w-[80px] h-full border-l border-l-[#494E6E] flex justify-center items-center lg:border-t lg:border-l-0 lg:h-[100px] lg:w-full'>
				<div className='w-[35px] h-[35px] rounded-full bg-white'></div>
			</div>
		</nav>
	);
};

export default Navbar;
