import React from 'react';
import { ButtonProps } from './Button.d';

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className={"px-5 py-2 rounded-full font-bold ".concat(props.className ?? "")}>{props.children}</button>
	);
};

export default Button;
