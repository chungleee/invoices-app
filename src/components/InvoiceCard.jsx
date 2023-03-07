import React from "react";

const InvoiceCard = ({ invoiceData }) => {
	const { fullName, status, dueDate, amountDue, receipt_id } = invoiceData;
	return (
		<div className='w-full border border-black rounded-lg mb-4 flex justify-between items-center px-4 py-6 text-left'>
			<div className='flex flex-col justify-between h-full text-[#888EB0] '>
				<p className='mb-2'>
					#<strong className='text-black'>{receipt_id}</strong>
				</p>
				<p className='font-thin text-sm text-[#888EB0]'>Due {dueDate}</p>
				<p>
					<strong className='text-black'>${amountDue}</strong>
				</p>
			</div>
			<div className='flex flex-col justify-between h-full text-right min-w-[100px]'>
				<p className='text-sm text-[#888EB0] capitalize'>{fullName}</p>
				<span
					className={`${
						status === "paid"
							? "bg-green-100 text-green-500"
							: status === "pending"
							? "bg-orange-100 text-orange-500"
							: status === "draft"
							? "bg-gray-100 text-black"
							: null
					} 
						text-center font-semibold text-sm rounded-lg py-1 capitalize`}
				>
					{status}
				</span>
			</div>
		</div>
	);
};

export default InvoiceCard;
