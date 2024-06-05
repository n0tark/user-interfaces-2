import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import RegisterPage from '../components/RegisterPage';

describe('RegisterPage', () => {
    it('renders the RegisterPage component', () => {
        render(<RegisterPage />);

        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Gender')).toBeInTheDocument();
        expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
        expect(screen.getByText(/already have an account/i)).toBeInTheDocument();
    });

    it('updates state when input values change', () => {
        render(<RegisterPage />);

        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const genderSelect = screen.getByLabelText('Gender');
        const birthdateInput = screen.getByLabelText('Date of Birth');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(genderSelect, { target: { value: 'male' } });
        fireEvent.change(birthdateInput, { target: { value: '1990-01-01' } });

        expect(nameInput).toHaveValue('John Doe');
        expect(emailInput).toHaveValue('john.doe@example.com');
        expect(genderSelect).toHaveValue('male');
        expect(birthdateInput).toHaveValue('1990-01-01');
    });

    it('submits the form when the register button is clicked', () => {
        render(<RegisterPage />);

        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const genderSelect = screen.getByLabelText('Gender');
        const birthdateInput = screen.getByLabelText('Date of Birth');
        const registerButton = screen.getByRole('button', { name: /register/i });

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(genderSelect, { target: { value: 'male' } });
        fireEvent.change(birthdateInput, { target: { value: '1990-01-01' } });

        fireEvent.click(registerButton);

    });
});
