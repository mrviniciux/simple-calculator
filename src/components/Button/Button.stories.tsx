import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '1',
  },
};

export const Operation: Story = {
  args: {
    children: '+',
    type: 'operation',
  },
};
