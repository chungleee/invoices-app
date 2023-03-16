import { useFieldArray, useFormContext } from "react-hook-form";
import TrashbinIcon from "./TrashbinIcon";

const CreateInvoiceItemList = () => {
	const { register, getValues } = useFormContext();
	const { fields, append, remove } = useFieldArray({
		name: "invoiceItemList",
	});

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
						<div className='flex flex-col  gap-y-2 col-span-1'>
							<label className='text-[#7E88C3] text-sm' htmlFor='itemQuantity'>
								Qty.
							</label>
							<input
								className='border border-[#DFE3FA] rounded-md pl-4 py-2 font-bold text-sm focus:outline-none'
								type='number'
								min={0}
								name='itemQuantity'
								id='itemQuantity'
								{...register(`invoiceItemList.${index}.itemQuantity`)}
							/>
						</div>
						<div className='flex flex-col gap-y-2  col-span-1'>
							<label className='text-[#7E88C3] text-sm' htmlFor='itemPrice'>
								Price
							</label>
							<input
								className='border border-[#DFE3FA] rounded-md pl-4 py-2 font-bold text-sm focus:outline-none'
								type='number'
								name='itemPrice'
								id='itemPrice'
								{...register(`invoiceItemList.${index}.itemPrice`)}
							/>
						</div>
						<div className='flex flex-col  gap-y-2 col-span-1'>
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
				type='button'
				onClick={() => {
					append();
				}}
			>
				new item
			</button>
		</>
	);
};

export default CreateInvoiceItemList;
