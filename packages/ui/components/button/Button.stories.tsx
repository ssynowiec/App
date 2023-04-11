import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

type Story = StoryObj<typeof Button>;

const clickHandler = () => {
	console.log('clicked');
};

export const Primary: Story = {
	args: {
		children: 'Click me!',
		onClick: clickHandler,
	},
};

export default meta;
