import { ReactNode } from 'react';

type BaseButtonProps = {
	children: ReactNode;
};

type ButtonPropsTypeSubmit = {
	onClick?: () => void;
	type: 'submit';
};

type ButtonPropsTypeButton = {
	type?: 'button';
	onClick: () => void;
};

type ButtonProps = (ButtonPropsTypeSubmit | ButtonPropsTypeButton) &
	BaseButtonProps;

export const Button = ({ onClick, type, children }: ButtonProps) => {
	return (
		<button
			className="rounded-2xl border-2 px-5 py-1"
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
