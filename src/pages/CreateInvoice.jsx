import { Link } from "wouter";
import { useForm } from "react-hook-form";
import LeftArrowIcon from "../components/LeftArrowIcon";
import InputField from "../components/InputField";

const CreateInvoice = () => {
	const { register, handleSubmit, control } = useForm();
	const onSubmit = (data) => {
		console.log("form data: ", data);
	};

	return (
		<main className='py-6	px-4'>
			<Link href='/'>
				<a href='/' className='flex items-center w-fit'>
					<span>
						<LeftArrowIcon />
					</span>
					<p className='font-semibold ml-4'>Go back</p>
				</a>
			</Link>
			<h1 className='font-bold text-2xl my-4'>New Invoice</h1>

			<section>
				<h2 className='font-bold text-sm text-purple-500 mb-6'>Bill From</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='grid grid-cols-2 gap-3 gap-x-4'
				>
					<InputField
						className='col-span-2'
						register={register}
						label='Street Address'
						name='streetAddress'
					/>
					<InputField register={register} label='City' name='city' />
					<InputField
						register={register}
						label='Postal Code'
						name='postalCode'
					/>
					<InputField
						className='col-span-2'
						register={register}
						label='Country'
						name='country'
					/>
					<button type='submit'>Submit</button>
				</form>
			</section>
		</main>
	);
};

export default CreateInvoice;
