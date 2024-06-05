import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import AboutPage from "../components/aboutPage";

describe('AboutPage', () => {
    it('renders the AboutPage component', () => {
        render(<AboutPage />);

        expect(screen.getByText('About ContactMe')).toBeInTheDocument();
        expect(screen.getByText(/Contact Manager is a web application designed for storing, deleting, and editing contacts./i)).toBeInTheDocument();
        expect(screen.getByText(/Contact Manager is a web application designed to connect people through a database of contacts./i)).toBeInTheDocument();
    });
});
