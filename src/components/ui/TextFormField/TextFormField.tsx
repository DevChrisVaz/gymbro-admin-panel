import React, { ReactNode, useState } from 'react';

export type TextFormFieldProps = {
	label: string,
	type?: string,
	name?: string
	prefixIcon?: ReactNode
}

const TextFormField: React.FC<TextFormFieldProps> = (props) => {
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className="mb-4 relative">
			<div className="w-full flex dark:bg-dark bg-light rounded-md overflow-hidden">
				{
					props.prefixIcon &&
					<div className="w-[40px] flex items-center justify-center text-primary">
						{props.prefixIcon}
					</div>
				}
				<input
					type="text"
					className={`w-full text-sm text-dark-gray dark:text-white dark:bg-dark bg-light ${isFocused || inputValue ? 'pt-5 pb-1' : 'py-2'} px-3 pr-10 focus:outline-none`}
					onFocus={onFocus}
					onBlur={onBlur}
					name={props.name}
					id={props.name}
					onChange={onInputChange}
					value={inputValue}
				/>
			</div>
			<label
				className={`absolute left-2 transition-all duration-300 cursor-text ${isFocused || inputValue ? 'top-1 text-xs text-primary' : 'top-2 text-sm text-dark-gray dark:text-white'
					} ${props.prefixIcon && 'left-[40px]'}`}
				htmlFor={props.name}
			>
				{props.label}
			</label>
		</div>
	);
};

export default TextFormField;
