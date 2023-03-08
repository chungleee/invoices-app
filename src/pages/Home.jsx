import { useState, useEffect } from "react";
import { Link } from "wouter";
import CreateNewIcon from "../components/CreateNewIcon";
import InvoiceCard from "../components/InvoiceCard";
import { data } from "../data";

const Home = () => {
	const [invoices, setInvoices] = useState([]);

	useEffect(() => {
		setInvoices(data);
	}, []);

	return (
		<main className='px-6 py-8 h-[calc(100vh-80px)] flex flex-col'>
			<div className='flex justify-between items-center mb-6'>
				<div>
					<h1 className='font-bold text-xl'>Invoices</h1>
					<h2 className='font-thin text-sm text-[#888EB0]'>
						{!invoices.length ? (
							"No invoices"
						) : (
							<>
								<span className='hidden md:inline'>There are</span>{" "}
								{invoices.length} invoices
							</>
						)}
					</h2>
				</div>

				<Link href='/create-invoice'>
					<a className='flex justify-evenly capitalize text-sm font-semibold items-center rounded-full min-w-[90px] h-[42px] bg-[#7C5DFA] text-white px-2'>
						<CreateNewIcon />
						new<span className='hidden md:inline md:ml-1'> invoice</span>
					</a>
				</Link>
			</div>

			<section className='w-full grow flex flex-col justify-center items-center'>
				{!invoices.length ? (
					<div className='text-center w-2/3'>
						<img src='/assets/invoice.svg' alt='No invoices image' />
						<h2 className='font-bold text-xl my-4'>There is nothing here</h2>
						<h3 className='font-thin text-sm'>
							Create an invoice by clicking the{" "}
							<span className='font-bold text-gray-400'>New</span> button and
							get started
						</h3>
					</div>
				) : (
					invoices.map((invoice) => {
						return <InvoiceCard invoiceData={invoice} />;
					})
				)}
			</section>
		</main>
	);
};

export default Home;
