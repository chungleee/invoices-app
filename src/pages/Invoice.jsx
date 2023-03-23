import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { data } from "../data";
import LeftArrowIcon from "../components/LeftArrowIcon";

const Status = ({ status }) => {
	return (
		<div className='flex bg-white px-8 py-10 rounded-lg text-[#858BB2] text-sm justify-between items-center'>
			<h3>Status</h3>
			<p
				className={`${
					status === "paid"
						? "bg-green-100 text-green-500"
						: status === "pending"
						? "bg-orange-100 text-orange-500"
						: status === "draft"
						? "bg-gray-100 text-black"
						: null
				} 
						text-center font-semibold text-sm rounded-lg py-1 capitalize  w-1/4 ml-auto md:ml-0`}
			>
				{status}
			</p>
		</div>
	);
};

const Invoice = ({ params }) => {
	const { invoiceId } = params;
	const [invoiceData, setInvoiceData] = useState({});

	const getInvoiceData = (id) => {
		const result = data.find((item) => {
			return item.receipt_id === id;
		});
		setInvoiceData(result);
	};

	useEffect(() => {
		getInvoiceData(invoiceId);
	}, []);

	if (!Object.keys(invoiceData).length) {
		return <div>Loading...</div>;
	}

	const { status } = invoiceData;
	return (
		<main className='bg-[#F8F8FB] px-8'>
			<Link href='/'>
				<a className='flex items-center w-fit py-8'>
					<span>
						<LeftArrowIcon />
					</span>
					<p className='font-semibold ml-4'>Go back</p>
				</a>
			</Link>

			<Status status={status} />
		</main>
	);
};

export default Invoice;
