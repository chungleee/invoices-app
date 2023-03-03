import { Link } from "wouter";
import CreateNewIcon from "../components/CreateNewIcon";

const Home = () => {
	return (
		<main className='px-6 py-8'>
			<div className='flex justify-between items-center'>
				<div>
					<h1 className='font-bold text-xl'>Invoices</h1>
					<h2 className='font-thin text-sm text-[#888EB0]'>No invoices</h2>
				</div>

				<Link href='/create-invoice'>
					<a className='flex justify-evenly capitalize text-sm font-semibold items-center rounded-full w-[90px] h-[42px] bg-[#7C5DFA] text-white px-2'>
						<CreateNewIcon /> new
					</a>
				</Link>
			</div>
		</main>
	);
};

export default Home;
