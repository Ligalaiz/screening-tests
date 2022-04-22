import { Message } from '@components/Message';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Message />);

describe('Message component', () => {
  describe('Component exist', () => {
    it('message check that the component has been rendered', () => {
      const { getByTestId } = renderComponent();

      expect(getByTestId('message')).toBeInTheDocument();
      expect(getByTestId('messageText')).toBeInTheDocument();
    });
  });
});
