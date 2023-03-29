import { Link } from "wouter";
import { useForm, FormProvider } from "react-hook-form";
import LeftArrowIcon from "../components/LeftArrowIcon";
import BillTo from "../components/BillTo";
import BillFrom from "../components/BillFrom";
import CreateInvoiceActionButtons from "../components/CreateInvoiceActionButtons";
import CreateInvoiceItemList from "../components/CreateInvoiceItemList";
import useInvoicesStore from "../store";

const CreateInvoice = () => {
	const addInvoice = useInvoicesStore((state) => {
		return state.addInvoice;
	});

	const invoices = useInvoicesStore((state) => {
		return state.invoices;
	});

	const methods = useForm({
		defaultValues: {
			invoiceItemList: [
				{
					itemName: "",
					itemQuantity: 1,
					itemPrice: 0,
					priceTotal: 0,
				},
			],
		},
	});

	const onSubmit = (data) => {
		console.log(data);
		addInvoice(data);
	};

	return (
		<main className='pt-6	px-4 bg-[#ffffff] lg:h-screen lg:w-3/4 lg:mx-auto  lg:overflow-auto'>
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
						<CreateInvoiceItemList />
						<CreateInvoiceActionButtons
							onSubmitHandler={methods.handleSubmit(onSubmit)}
						/>
					</form>
				</FormProvider>
			</section>
		</main>
	);
};

export default CreateInvoice;
