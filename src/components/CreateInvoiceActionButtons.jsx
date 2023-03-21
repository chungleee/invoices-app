const CreateInvoiceActionButtons = ({ onSubmitHandler }) => {
	return (
		<div className='col-span-2 flex justify-between py-4 -mx-4 px-4 bg-[#F9FAFE]'>
			<button
				className='rounded-full px-4 py-4 bg-[#ffffff] text-[#7E88C3] text-sm font-semibold'
				type='button'
			>
				Discard
			</button>
			<button
				className='rounded-full px-4 py-4 bg-[#373B53] text-[#888EB0] text-sm font-semibold'
				type='button'
			>
				Save as draft
			</button>
			<button
				className='rounded-full px-4 py-4 bg-[#7C5DFA] text-sm font-semibold text-white'
				type='button'
				onClick={onSubmitHandler}
			>
				Save & Send
			</button>
		</div>
	);
};

export default CreateInvoiceActionButtons;
