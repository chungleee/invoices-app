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

const InvoiceSection = ({ billTo, billFrom, receipt_id, invoiceItemList }) => {
	const calcGrandTotal = (items) => {
		const total = items.reduce((acc, next) => {
			return acc + parseFloat(next.priceTotal);
		}, 0);

		return total;
	};

	return (
		<section className='bg-white rounded-lg px-8 py-10'>
			<div className='flex flex-col gap-y-8'>
				<div className='text-[#7E88C3]'>
					<h2>
						#<span className='font-bold text-black'>{receipt_id}</span>
					</h2>
					<h2>{billTo.projectDescription}</h2>
				</div>
				<div className='text-sm text-[#7E88C3]'>
					<h2>{billFrom.streetAddress}</h2>
					<h2>{billFrom.city}</h2>
					<h2>{billFrom.postalCode}</h2>
					<h2>{billFrom.country}</h2>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-y-8'>
				<div className='flex flex-col justify-between'>
					<div>
						<h2 className='text-sm text-[#7e88c3]'>Invoice Date</h2>
						<p className='font-bold text-lg'>{billTo.invoiceDate}</p>
					</div>
					<div>
						<h2 className='text-sm text-[#7e88c3]'>Payment Due</h2>
						<p className='font-bold text-lg'>{billTo.invoiceDate}</p>
					</div>
				</div>
				<div>
					<h2 className='text-sm text-[#7e88c3]'>Bill To</h2>
					<div>
						<h2 className='font-bold text-lg'>{billTo.clientName}</h2>
						<h2 className='text-sm text-[#7e88c3]'>
							{billTo.clientStreetAddress}
						</h2>
						<h2 className='text-sm text-[#7e88c3]'>{billTo.clientCity}</h2>
						<h2 className='text-sm text-[#7e88c3]'>
							{billTo.clientPostalCode}
						</h2>
						<h2 className='text-sm text-[#7e88c3]'>{billTo.clientCountry}</h2>
					</div>
				</div>
				<div className='col-span-2'>
					<h2 className='text-sm text-[#7e88c3]'>Sent To</h2>
					<p className='font-bold text-lg'>{billTo.clientEmail}</p>
				</div>

				<div className='bg-[#F9FAFE] col-span-2 rounded-lg px-8 pt-4 '>
					<div className='flex flex-col gap-y-4 pb-6'>
						{invoiceItemList.map((item) => {
							return (
								<div className='text-black font-bold text-sm flex justify-between'>
									<div>
										<h2>{item.itemName}</h2>
										<p className='text-[#7e88c3]'>{`${item.itemQuantity} x $${item.itemPrice}`}</p>
									</div>
									<div className='flex items-center'>
										<p>${item.priceTotal}</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className='text-white text-sm bg-[#373B53] rounded-b-lg -mx-8 px-8 py-6 flex justify-between'>
						<p>Grand Total</p>
						<p className='text-xl font-bold'>
							${calcGrandTotal(invoiceItemList)}
						</p>
					</div>
				</div>
			</div>
		</section>
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

	const { status, receipt_id, billFrom, billTo, invoiceItemList } = invoiceData;
	return (
		<main className='bg-[#F8F8FB] px-8 flex flex-col gap-y-8 pt-8'>
			<Link href='/'>
				<a className='flex items-center w-fit'>
					<span>
						<LeftArrowIcon />
					</span>
					<p className='font-semibold ml-4'>Go back</p>
				</a>
			</Link>

			<Status status={status} />

			<InvoiceSection
				billTo={billTo}
				billFrom={billFrom}
				invoiceItemList={invoiceItemList}
				receipt_id={receipt_id}
			/>
		</main>
	);
};

export default Invoice;
