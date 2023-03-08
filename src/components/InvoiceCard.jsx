import React from "react";

const InvoiceCard = ({ invoiceData }) => {
	const { fullName, status, dueDate, amountDue, receipt_id } = invoiceData;
	return (
		<div className='border border-black rounded-lg w-full px-4 py-6 text-left grid grid-cols-2 grid-rows-3 text-[#888EB0] mb-4'>
			<p>
				#<strong className='text-black'>{receipt_id}</strong>
			</p>
			<p className='text-right text-sm text-[#888EB0] capitalize'>{fullName}</p>
			<p className='font-thin text-sm text-[#888EB0] col-span-2'>
				Due {dueDate}
			</p>
			<p>
				<strong className='text-black'>${amountDue}</strong>
			</p>
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
						text-center font-semibold text-sm rounded-lg py-1 capitalize  w-1/2 ml-auto`}
			>
				{status}
			</p>
		</div>
	);
};

export default InvoiceCard;
