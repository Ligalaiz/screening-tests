import { Form } from '@src/modules/Form';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Form />);

describe('Form component', () => {
  describe('Component exist', () => {
    it('form check that the component has been rendered', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('form')).toBeInTheDocument();
    });

    it('form fields check that fields has been rendered', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('nameField')).toBeInTheDocument();
      expect(queryByTestId('nicknameField')).toBeInTheDocument();
      expect(queryByTestId('emailField')).toBeInTheDocument();
      expect(queryByTestId('phoneField')).toBeInTheDocument();
      expect(queryByTestId('passwordField')).toBeInTheDocument();
      expect(queryByTestId('acceptField')).toBeInTheDocument();
      expect(queryByTestId('formBtn')).toBeInTheDocument();
    });
  });
});
