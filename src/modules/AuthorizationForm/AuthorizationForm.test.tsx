import { AuthorizationForm } from '@modules/AuthorizationForm';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('AuthorizationForm component', () => {
  describe('Component exist', () => {
    it('authorizationForm check that the component has been rendered #smoke', async () => {
      await act(async () => {
        render(<AuthorizationForm />);
      });

      expect(screen.queryByTestId('registrationForm')).toBeInTheDocument();
    });

    it('authorizationForm fields check that fields has been rendered', async () => {
      await act(async () => {
        render(<AuthorizationForm />);
      });

      expect(screen.queryByTestId('mixField')).toBeInTheDocument();
      expect(screen.queryByTestId('passwordField')).toBeInTheDocument();
      expect(screen.queryByTestId('formBtn')).toBeInTheDocument();
    });
  });
});
