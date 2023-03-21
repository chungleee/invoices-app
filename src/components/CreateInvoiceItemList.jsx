import { set, useFieldArray, useFormContext } from "react-hook-form";
import TrashbinIcon from "./TrashbinIcon";

const CreateInvoiceItemList = () => {
	const { register, getValues, setValue } = useFormContext();

	const { fields, append, remove } = useFieldArray({
		name: "invoiceItemList",
	});

	const calculateTotalPrice = (
		indexedInvoiceItemPrice,
		indexedInvoiceItemQuantity
	) => {
		let itemPrice = getValues(indexedInvoiceItemPrice);
		let itemQuantity = getValues(indexedInvoiceItemQuantity);
		let total = itemQuantity * itemPrice;

		return total;
	};

	return (
		<>
			<h2 className='text-[#777F98] font-semibold text-xl'>Item List</h2>

			{fields.map((field, index) => {
				return (
					<div key={field.id} className='col-span-2 grid grid-cols-4 gap-4'>
						<div className='flex flex-col gap-y-2  col-span-4'>
							<label className='text-[#7E88C3] text-sm' htmlFor='itemName'>
								Item Name
							</label>
							<input
								className='border border-[#DFE3FA] rounded-md pl-4 py-2 font-bold text-sm focus:outline-none'
								id='itemName'
								key={field.id}
								type='text'
								{...register(`invoiceItemList.${index}.itemName`)}
							/>
						</div>
						<div className='flex flex-col  gap-y-2 col-span-1 w-16'>
							<label className='text-[#7E88C3] text-sm' htmlFor='itemQuantity'>
								Qty.
							</label>
							<input
								className='border border-[#DFE3FA] rounded-md pl-4 py-2 font-bold text-sm focus:outline-none'
								type='number'
								min={0}
								name='itemQuantity'
								id='itemQuantity'
								{...register(`invoiceItemList.${index}.itemQuantity`, {
									onBlur: (e) => {
										const total = calculateTotalPrice(
											`invoiceItemList[${index}].itemPrice`,
											`invoiceItemList[${index}].itemQuantity`
										);
										setValue(`invoiceItemList[${index}].priceTotal`, total);
									},
								})}
							/>
						</div>
						<div className='flex flex-col gap-y-2  col-span-1 w-24'>
							<label className='text-[#7E88C3] text-sm' htmlFor='itemPrice'>
								Price
							</label>
							<input
								className='border border-[#DFE3FA] rounded-md pl-4 py-2 font-bold text-sm focus:outline-none'
								type='number'
								name='itemPrice'
								id='itemPrice'
								{...register(`invoiceItemList.${index}.itemPrice`, {
									onBlur: (e) => {
										const total = calculateTotalPrice(
											`invoiceItemList[${index}].itemPrice`,
											`invoiceItemList[${index}].itemQuantity`
										);

										setValue(`invoiceItemList[${index}].priceTotal`, total);
									},
								})}
							/>
						</div>
						<div className='flex flex-col  gap-y-2 col-span-1 w-24'>
							<label className='text-[#7E88C3] text-sm' htmlFor='priceTotal'>
								Total
							</label>
							<input
								className='border border-[#DFE3FA] rounded-md pl-4 py-2 font-bold text-sm focus:outline-none'
								type='text'
								name='priceTotal'
								id='priceTotal'
								disabled
								value='0'
								{...register(`invoiceItemList.${index}.priceTotal`)}
							/>
						</div>
						<button
							className='col-span-1 self-center justify-self-center mt-6'
							type='button'
							onClick={() => {
								remove(index);
							}}
						>
							<TrashbinIcon />
						</button>
					</div>
				);
			})}

			<button
				className='rounded-full bg-[#F9FAFE] col-span-2 font-bold text-base py-4 mt-6 text-[#7E88C3]'
				type='button'
				onClick={() => {
					append({ itemQuantity: 1, itemPrice: 0 });
				}}
			>
				+ Add New Item
			</button>
		</>
	);
};

export default CreateInvoiceItemList;
