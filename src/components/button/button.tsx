"use client";
import React from 'react';
import './button.scss';

export type ButtonProps = {
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
	name: string | "button";


}

const Button: React.FC<ButtonProps>  = (data) => {
	return (
		<button className="button" name={data.name}>{data.children}</button>
	);
};

export default Button;
