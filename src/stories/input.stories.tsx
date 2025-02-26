import type { Meta, StoryObj } from '@storybook/react';
import Input from "../components/input";

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: 'Input',
  },
};

export const Disabled: Story = {
  args: {
    value: 'Disabled Input',
    disabled: true,
  },
};