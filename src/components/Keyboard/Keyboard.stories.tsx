import type { Meta, StoryObj } from '@storybook/react';
import Keyboard from './Keyboard';

const meta = {
  title: 'Keyboard',
  tags: ['autodocs'],
  component: Keyboard,
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    keyPressHandler: () => true,
  },
};
