import React, { ReactNode, useState } from 'react';

export type CalendarFormFieldProps = {
	label: string,
	type?: string,
	name?: string
	prefixIcon?: ReactNode
}

const CalendarFormField: React.FC<CalendarFormFieldProps> = (props) => {
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
			<div className="w-full flex dark:bg-dark bg-light rounded-md overflow-hidden border-solid border border-primary-500">
				{
					props.prefixIcon &&
					<div className="w-[45px] flex items-center justify-center text-primary">
						{props.prefixIcon}
					</div>
				}
				<input
					type="date"
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
					} ${props.prefixIcon && 'left-[45px]'}`}
				htmlFor={props.name}
			>
				{props.label}
			</label>
		</div>
	);
};

export default CalendarFormField;
