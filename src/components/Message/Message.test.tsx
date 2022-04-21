import { Message } from '@components/Message';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Message />);

describe('Message component', () => {
  describe('Component not exist', () => {
    it('message check that the component has not been rendered #test', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('registrationForm')).not.toBeInTheDocument();
    });
  });
});
