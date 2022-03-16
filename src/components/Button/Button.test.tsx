import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Button } from '@components/Button';

const renderComponent = () => render(<Button />);

describe('Btn component', () => {
  describe('Component not exist', () => {
    it('formBtn check that the component has not been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();
      const btn = queryByTestId('formBtn');

      expect(btn).not.toBeInTheDocument();
    });
  });
});
