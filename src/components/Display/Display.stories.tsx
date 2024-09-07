import type { Meta, StoryObj } from '@storybook/react';
import Display from './Display';

const meta = {
  title: 'Display',
  tags: ['autodocs'],
  component: Display,
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentDisplay: '2000',
  },
};
