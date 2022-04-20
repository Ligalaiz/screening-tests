import { Form } from '@src/modules/Form';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Form />);

describe('Form component', () => {
  describe('Component exist', () => {
    it('form check that the component has been rendered #test', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('form')).not.toBeInTheDocument();
    });

    it('form fields check that fields has been rendered #test', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('nameField')).not.toBeInTheDocument();
      expect(queryByTestId('nicknameField')).not.toBeInTheDocument();
      expect(queryByTestId('emailField')).not.toBeInTheDocument();
      expect(queryByTestId('phoneField')).not.toBeInTheDocument();
      expect(queryByTestId('passwordField')).not.toBeInTheDocument();
      expect(queryByTestId('acceptField')).not.toBeInTheDocument();
      expect(queryByTestId('formBtn')).not.toBeInTheDocument();
    });
  });
});
