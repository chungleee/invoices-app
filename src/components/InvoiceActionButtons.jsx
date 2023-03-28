import React from "react";

const InvoiceActionButtons = () => {
	return (
		<div className='flex justify-between font-semibold'>
			<button className='px-6 py-3 rounded-full bg-[#F9FAFE] text-[#7E88C3]'>
				Edit
			</button>
			<button className='px-6 py-3 rounded-full bg-[#EC5757] text-white'>
				Delete
			</button>
			<button className='px-6 py-3 rounded-full bg-[#7C5DFA] text-white w-2/4'>
				Mark as Paid
			</button>
		</div>
	);
};

export default InvoiceActionButtons;
