import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@components/Input';

const handleChange = jest.fn();

const renderComponent = () =>
  render(
    <Input
      placeholder="What needs to be done?"
      name="inputForm"
      type="text"
      handleChange={handleChange}
      value="value"
      testid="inputForm"
    />,
  );

describe('Input component', () => {
  describe('Component exist', () => {
    it('inputForm check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const input = queryByTestId('inputForm');

      expect(input).toBeInTheDocument();
    });
  });

  describe('Сomponent works', () => {
    it('todoAddField check change handler was called after type', () => {
      const { getByTestId } = renderComponent();
      const input = getByTestId('inputForm');

      userEvent.type(input, 'test');
      expect(handleChange).toHaveBeenCalledTimes(4);
    });
  });
});
