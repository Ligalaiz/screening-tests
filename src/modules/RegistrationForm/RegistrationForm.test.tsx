import { RegistrationForm } from '@modules/RegistrationForm';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('RegistrationForm component', () => {
  describe('Component exist', () => {
    it('registrationForm check that the component has been rendered #smoke', async () => {
      await act(async () => {
        render(<RegistrationForm />);
      });

      expect(screen.queryByTestId('registrationForm')).toBeInTheDocument();
    });

    it('registrationForm fields check that fields has been rendered #smoke', async () => {
      await act(async () => {
        render(<RegistrationForm />);
      });

      expect(screen.queryByTestId('nameField')).toBeInTheDocument();
      expect(screen.queryByTestId('nicknameField')).toBeInTheDocument();
      expect(screen.queryByTestId('emailField')).toBeInTheDocument();
      expect(screen.queryByTestId('phoneField')).toBeInTheDocument();
      expect(screen.queryByTestId('passwordField')).toBeInTheDocument();
      expect(screen.queryByTestId('acceptField')).toBeInTheDocument();
      expect(screen.queryByTestId('formBtn')).toBeInTheDocument();
    });
  });
});
