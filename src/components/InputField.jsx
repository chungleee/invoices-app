import { useFormContext } from "react-hook-form";

const InputField = ({ label, name, className }) => {
	const { register } = useFormContext();
	return (
		<div className={`flex flex-col gap-y-2 ${className}`}>
			<label className='text-sm text-[#7E88C3]' htmlFor={name}>
				{label}
			</label>
			<input
				className='border border-[#DFE3FA] rounded-md pl-4 py-2 font-bold text-sm focus:outline-none'
				id={name}
				type='text'
				{...register(name)}
			/>
		</div>
	);
};

export default InputField;
