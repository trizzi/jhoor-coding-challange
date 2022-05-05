import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import Button from '../Button';
afterEach(cleanup);

test('should render button component', () => {
  const { getByTestId } = render(<Button />);
  fireEvent.click(getByTestId('click'));
  expect(getByTestId('click')).not.toBeFalsy();
});
