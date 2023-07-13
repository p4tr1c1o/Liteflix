import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from "../components/ProgressBar"


const meta = {
	title: 'ProgressBar',
	component: ProgressBar,
	tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
	args: {
		progress: 0
	}
}

export const CincuentaPorciento = {
	args: {
		progress: 50
	}
}

export const CienPorciento = {
	args: {
		progress: 100
	}
}
