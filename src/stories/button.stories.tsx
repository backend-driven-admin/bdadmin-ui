import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/button";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
	},
};

export const Loading: Story = {
	args: {
		children: "Loading Button",
		loading: true,
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled Button",
		disabled: true,
	},
};
