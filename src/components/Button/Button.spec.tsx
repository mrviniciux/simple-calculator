import { render, screen } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

describe('keyboard', () => {
  it('should render button and trigger and action onClick', async () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>1</Button>);
    const btn = screen.getByRole('btn-calc');

    await userEvent.click(btn);

    expect(fn).toHaveBeenCalled();
  });
});
