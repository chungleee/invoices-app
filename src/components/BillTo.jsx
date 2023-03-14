import InputField from "./InputField";

const BillTo = () => {
	return (
		<>
			<h2 className='font-bold text-sm text-purple-500'>Bill To</h2>
			<InputField
				className='col-span-2'
				label="Client's Name"
				name='clientName'
			/>
			<InputField
				className='col-span-2'
				label="Client's Email"
				name='clientEmail'
			/>
			<InputField
				className='col-span-2'
				label='Street Address'
				name='clientStreetAddress'
			/>
			<InputField label='City' name='clientCity' />
			<InputField label='Postal Code' name='clientPostalCode' />
			<InputField className='col-span-2' label='Country' name='clientCountry' />
			<InputField
				className='col-span-2'
				label='Invoice date'
				name='invoiceDate'
			/>
			<InputField
				className='col-span-2'
				label='Project Description'
				name='projectDescription'
			/>
		</>
	);
};

export default BillTo;
