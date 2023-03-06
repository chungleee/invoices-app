import React from "react";

const InvoiceCard = ({ invoiceData }) => {
	const { fullName, status, dueDate, amountDue, receipt_id } = invoiceData;
	return (
		<div className='w-full border border-black rounded-lg mb-4 flex justify-between items-center px-4 py-6 text-left'>
			<div className='flex flex-col justify-between h-full'>
				<p>#{receipt_id}</p>
				<p>Due {dueDate}</p>
				<p>${amountDue}</p>
			</div>
			<div className='flex flex-col justify-between h-full text-right'>
				<p>{fullName}</p>
				<span>{status}</span>
			</div>
		</div>
	);
};

export default InvoiceCard;
