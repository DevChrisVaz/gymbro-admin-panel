import React from 'react';
import { ButtonProps } from './Button.d';

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className="bg-gradient text-white px-5 py-2 rounded-full">{props.children}</button>
	);
};

export default Button;
