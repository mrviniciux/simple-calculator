import type { Meta, StoryObj } from '@storybook/react';
import Calc from './Calc';
import { CalcProvider } from '@/context/Calc.provider';

const meta = {
  title: 'Calc',
  tags: ['autodocs'],
  component: Calc,
} satisfies Meta<typeof Calc>;

export default meta;
type Story = StoryObj<typeof meta>;

const withCalcProvider = (StoryFn: any) => (
  <CalcProvider>
    <StoryFn />
  </CalcProvider>
);

export const Default: Story = {
  args: {
    type: 'simple',
  },
  decorators: [withCalcProvider],
};
