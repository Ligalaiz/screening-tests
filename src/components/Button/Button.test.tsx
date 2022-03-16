import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@components/Button';

const handleClick = jest.fn();

const renderComponent = () =>
  render(<Button type="button" handleClick={handleClick} testid="formBtn" />);

describe('Btn component', () => {
  describe('Component exist', () => {
    it('formBtn check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const btn = queryByTestId('formBtn');

      expect(btn).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('formBtn check click handler was called after click', () => {
      const { getByTestId } = renderComponent();
      const btn = getByTestId('formBtn');

      userEvent.click(btn);
      expect(handleClick).toHaveBeenCalled();
    });

    it('formBtn check button state is disabled when textbox is empty', () => {
      const { getByTestId } = render(
        <Button
          type="button"
          handleClick={handleClick}
          testid="formBtn"
          isDisabled
        />,
      );
      const btn = getByTestId('formBtn');

      expect(btn).toBeDisabled();
    });
  });
});
