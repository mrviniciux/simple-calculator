import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';

describe('keyboard', () => {
  it('should render at least 10 buttons', () => {
    render(<Keyboard />);
    const btns = screen.getAllByRole('btn-calc');
    expect(btns.length).toBeGreaterThanOrEqual(10);
  });
});
