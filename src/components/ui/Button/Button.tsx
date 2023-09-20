import React, { ReactNode } from 'react';

export type ButtonProps = {
	children: ReactNode
}

const Button: React.FC<ButtonProps>  = (props) => {
	return (
		<button className="bg-dark-green text-white px-5 py-2 rounded-full hover:bg-light-green">{props.children}</button>
	);
};

export default Button;
