import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RegistrationForm } from '@modules/RegistrationForm';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('RegistrationForm component', () => {
  describe('Component exist', () => {
    it('RegistrationForm check that the component has been rendered #smoke', async () => {
      await act(async () => {
        render(<RegistrationForm />);
      });

      expect(screen.queryByTestId('registrationForm')).toBeInTheDocument();
    });
  });

  describe('NameField component', () => {
    describe('NameField exist', () => {
      it('nameField check that the component has been rendered #smoke', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });

        expect(screen.queryByTestId('nameField')).toBeInTheDocument();
      });
    });

    describe('Сomponent works', () => {
      it('nameField check field has been filled', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });

        const nameField = screen.getByTestId('nameField');

        expect(nameField).toHaveValue('');

        userEvent.type(nameField, 'text');

        expect(nameField).toHaveValue('text');
      });
    });
  });

  describe('NicknameField component', () => {
    describe('NicknameField exist', () => {
      it('nicknameField check that the component has been rendered #smoke', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });

        expect(screen.queryByTestId('nicknameField')).toBeInTheDocument();
      });
    });

    describe('Сomponent works', () => {
      it('nicknameField check field has been filled', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });
        const nicknameField = screen.getByTestId('nicknameField');

        expect(nicknameField).toHaveValue('');

        userEvent.type(nicknameField, 'text');

        expect(nicknameField).toHaveValue('text');
      });
    });
  });

  describe('EmailField component', () => {
    describe('EmailField exist', () => {
      it('emailField check that the component has been rendered #smoke', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });

        expect(screen.queryByTestId('emailField')).toBeInTheDocument();
      });
    });

    describe('Сomponent works', () => {
      it('emailField check field has been filled', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });
        const emailField = screen.getByTestId('emailField');

        expect(emailField).toHaveValue('');

        userEvent.type(emailField, 'email@gmail.com');

        expect(emailField).toHaveValue('email@gmail.com');
      });
    });
  });

  describe('PhoneField component', () => {
    describe('PhoneField exist', () => {
      it('phoneField check that the component has been rendered #smoke', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });

        expect(screen.queryByTestId('phoneField')).toBeInTheDocument();
      });
    });

    describe('Сomponent works', () => {
      it('phoneField check field has been filled', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });
        const phoneField = screen.getByTestId('phoneField');

        expect(phoneField).toHaveValue('');

        userEvent.type(phoneField, '9998887766');

        expect(phoneField).toHaveValue('999 888 77 66');
      });
    });
  });

  describe('PasswordField component', () => {
    describe('PasswordField exist', () => {
      it('passwordField check that the component has been rendered #smoke', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });

        expect(screen.queryByTestId('passwordField')).toBeInTheDocument();
      });
    });

    describe('Сomponent works', () => {
      it('passwordField check field has been filled', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });
        const passwordField = screen.getByTestId('passwordField');

        expect(passwordField).toHaveValue('');

        userEvent.type(passwordField, '123456');

        expect(passwordField).toHaveValue('123456');
      });
    });
  });

  describe('AcceptField component', () => {
    describe('AcceptField exist', () => {
      it('acceptField check that the component has been rendered #smoke', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });

        expect(screen.queryByTestId('acceptField')).toBeInTheDocument();
      });
    });

    describe('Сomponent works', () => {
      it('acceptField check that the field has been checked', async () => {
        await act(async () => {
          render(<RegistrationForm />);
        });
        const acceptField = screen.getByTestId('acceptField');
        const { checked } = acceptField as typeof acceptField & {
          checked: boolean;
        };

        expect(checked).toEqual(false);

        userEvent.click(acceptField);

        expect(checked).toEqual(false);
      });
    });
  });
});
