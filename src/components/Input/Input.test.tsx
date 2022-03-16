import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Input } from '@components/Input';

const renderComponent = () => render(<Input />);

describe('Input component', () => {
  describe('Component not exist', () => {
    it('inputForm check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const input = queryByTestId('inputForm');

      expect(input).not.toBeInTheDocument();
    });
  });
});
