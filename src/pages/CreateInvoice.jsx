import { Link } from "wouter";
import { useForm, FormProvider } from "react-hook-form";
import LeftArrowIcon from "../components/LeftArrowIcon";
import BillTo from "../components/BillTo";
import BillFrom from "../components/BillFrom";

const CreateInvoice = () => {
	const methods = useForm();

	const onSubmit = ({
		streetAddress,
		city,
		postalCode,
		country,
		...billTo
	}) => {
		const from = { streetAddress, city, postalCode, country };
		const to = { ...billTo };

		console.log("from obj: ", from);
		console.log("to obj: ", to);
	};

	return (
		<main className='pt-6	px-4 bg-[#F9FAFE]'>
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
				<FormProvider {...methods}>
					<form
						onSubmit={methods.handleSubmit(onSubmit)}
						className='grid grid-cols-2 gap-4'
					>
						<BillFrom />
						<BillTo />

						<div className='col-span-2 flex justify-between py-4 -mx-4 px-4 bg-white'>
							<button
								className='rounded-full px-4 py-4 bg-[#F9FAFE] text-[#7E88C3] text-sm font-semibold'
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
								onClick={methods.handleSubmit(onSubmit)}
							>
								Save & Send
							</button>
						</div>
					</form>
				</FormProvider>
			</section>
		</main>
	);
};

export default CreateInvoice;
