import React from "react";
import { Link } from "wouter";
import RightArrowIcon from "./RightArrowIcon";

const InvoiceCard = ({ invoiceData }) => {
	const { fullName, status, dueDate, amountDue, receipt_id } = invoiceData;
	return (
		<div className='border border-black rounded-lg w-full px-4 py-6 text-left grid grid-cols-2 grid-rows-3 text-[#888EB0] items-center md:grid-rows-1 md:grid-cols-5'>
			<p>
				#<strong className='text-black order-1'>{receipt_id}</strong>
			</p>
			<p className='text-right text-sm text-[#888EB0] capitalize md:order-3 md:text-left'>
				{fullName}
			</p>
			<p className='font-thin text-sm text-[#888EB0] col-span-2 md:col-span-1 md:order-2'>
				Due {dueDate}
			</p>
			<p className='md:order-4'>
				<strong className='text-black'>${amountDue}</strong>
			</p>
			<div className='md:order-5 md:flex md:justify-between'>
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
						text-center font-semibold text-sm rounded-lg py-1 capitalize  w-1/2 ml-auto md:ml-0`}
				>
					{status}
				</p>
				<span className='hidden md:inline-block'>
					<Link
						invoiceData={invoiceData}
						href={`/invoices/${invoiceData.receipt_id}`}
					>
						<a>
							<RightArrowIcon />
						</a>
					</Link>
				</span>
			</div>
		</div>
	);
};

export default InvoiceCard;
