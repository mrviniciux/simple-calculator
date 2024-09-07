import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';

describe('keyboard', () => {
  it('should render at least 19 buttons', () => {
    render(<Keyboard keyPressHandler={() => true} />);
    const btns = screen.getAllByRole('btn-calc');
    expect(btns.length).toBeGreaterThanOrEqual(19);
  });
});
