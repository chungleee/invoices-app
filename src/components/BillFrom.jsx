import InputField from "./InputField";

const BillFrom = () => {
	return (
		<>
			<h2 className='font-bold text-sm text-purple-500'>Bill From</h2>
			<InputField
				className='col-span-2'
				label='Street Address'
				name='streetAddress'
			/>
			<InputField label='City' name='city' />
			<InputField label='Postal Code' name='postalCode' />
			<InputField className='col-span-2' label='Country' name='country' />
		</>
	);
};

export default BillFrom;
