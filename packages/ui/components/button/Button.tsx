import type { ReactNode } from 'react';

type ButtonProps = {
	onClick?: () => void;
	children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
	return (
		<button className="rounded-2xl border-2 px-5 py-1" onClick={onClick}>
			{children}
		</button>
	);
};
