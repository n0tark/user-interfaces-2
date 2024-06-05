import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import ProfilePage from '../components/ProfilePage';

describe('ProfilePage', () => {
    it('renders user profile information', () => {
        render(<ProfilePage />);

        expect(screen.getByText('User Profile')).toBeInTheDocument();
        expect(screen.getByText('Welcome to your profile page. Here you can manage your personal information and settings.')).toBeInTheDocument();
        expect(screen.getByText('Personal Information')).toBeInTheDocument();
        expect(screen.getByText('Name: Tom Crush')).toBeInTheDocument();
        expect(screen.getByText('Email: test@example.com')).toBeInTheDocument();
        expect(screen.getByText('Phone: 123-456-7890')).toBeInTheDocument();
    });
});
