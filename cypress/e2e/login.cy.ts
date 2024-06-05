describe('The Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('should display the login form', () => {
        cy.get('form').should('exist');
        cy.get('input#email').should('exist');
        cy.get('input#password').should('exist');
        cy.get('button[type="submit"]').should('exist');
    });

    it('should allow user to fill out and submit the form', () => {
        const testEmail = 'john.doe@example.com';
        const testPassword = 'password123';

        cy.get('input#email').type(testEmail);
        cy.get('input#password').type(testPassword);

        cy.get('button[type="submit"]').click();
    });

    it('should navigate to the registration page when "Register" link is clicked', () => {
        cy.contains("Don't have an account?").find('a').click();
        cy.url().should('include', '/register');
    });
});
