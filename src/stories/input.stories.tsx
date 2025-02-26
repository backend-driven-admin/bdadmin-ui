import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/input";

const meta = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Input",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled Input",
		disabled: true,
	},
};

export const TextArea: Story = {
	args: {
		placeholder: "TextArea",
		type: "textarea",
	},
};

export const InputWithLabel: Story = {
	args: {
		placeholder: "Input with label",
		label: "Label",
	},
};

export const TextAreaWithMaxLength: Story = {
	args: {
		placeholder: "Textarea",
		label: "Label",
		type: "textarea",
		maxLength: 8,
	},
};

export const Loading: Story = {
	args: {
		placeholder: "Input",
		status: "progress",
	},
};

export const Success: Story = {
	args: {
		placeholder: "Input",
		status: "success",
	},
};

export const Warning: Story = {
	args: {
		placeholder: "Input",
		status: "error",
	},
};

export const ErrorWithMessage: Story = {
	args: {
		placeholder: "Input",
		status: "error",
		message: "Validation error",
	},
};
