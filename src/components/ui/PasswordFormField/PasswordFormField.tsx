import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export type PasswordFormFieldProps = {
	label: string,
	name: string
}

const PasswordFormField: React.FC<PasswordFormFieldProps> = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState('password');
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
		setInputType(showPassword ? 'password' : 'text');
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className="mb-4 relative">
			<input
				type={inputType}
				className={`w-full text-sm bg-gray-100 rounded-md ${isFocused || inputValue ? 'pt-5 pb-1' : 'py-2'} px-3 pr-10 focus:outline-none`}
				onFocus={onFocus}
				onBlur={onBlur}
				name={props.name}
				id={props.name}
				onChange={onInputChange}
				value={inputValue}
			/>
			<label
				className={`absolute left-2 transition-all duration-300 cursor-text ${isFocused || inputValue ? 'top-1 text-xs text-primary' : 'top-2 text-sm text-gray-400'
					}`}
				htmlFor={props.name}
			>
				{props.label}
			</label>
			<button
				type="button"
				onClick={togglePasswordVisibility}
				className="absolute inset-y-0 right-2 px-2 py-1 bg-gray-200 text-gray-700 rounded-md focus:outline-none hover:bg-gray-300"
			>
				{showPassword ? <BsEyeSlashFill className="text-primary" /> : <BsEyeFill />}
			</button>
		</div>
	);
};

export default PasswordFormField;

