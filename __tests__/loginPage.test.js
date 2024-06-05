import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '../components/LoginPage';

describe('LoginPage', () => {
    it('renders login form', () => {
        render(<LoginPage />);

        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
    });

    it('updates email state on input change', () => {
        render(<LoginPage />);
        const emailInput = screen.getByPlaceholderText('Email');
        userEvent.type(emailInput, 'test@example.com');

        expect(emailInput).toHaveValue('test@example.com');
    });

    it('updates password state on input change', () => {
        render(<LoginPage />);
        const passwordInput = screen.getByPlaceholderText('Password');
        userEvent.type(passwordInput, 'password123');

        expect(passwordInput).toHaveValue('password123');
    });

    it('submits form with email and password when submitted', () => {
        render(<LoginPage />);
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByRole('button', { name: 'Login' });

        userEvent.type(emailInput, 'test@example.com');
        userEvent.type(passwordInput, 'password123');
        userEvent.click(loginButton);

    });
});
