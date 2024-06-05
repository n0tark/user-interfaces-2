import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import ContactsPage from '../components/ContactsPage';

describe('ContactsPage', () => {
    it('renders contact list', () => {
        render(<ContactsPage />);
        expect(screen.getByTestId('contact-list')).toBeInTheDocument();
    });
});
