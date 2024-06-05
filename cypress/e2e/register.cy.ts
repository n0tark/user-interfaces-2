describe('The Register Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register')
    })

    it('should display the registration form', () => {
        cy.get('form').should('exist');
        cy.get('input#name').should('exist');
        cy.get('input#email').should('exist');
        cy.get('select#gender').should('exist');
        cy.get('input#birthdate').should('exist');
        cy.get('button[type="submit"]').should('exist');
    });

    it('should allow user to fill out and submit the form', () => {
        const testName = 'John Doe';
        const testEmail = 'john.doe@example.com';
        const testGender = 'male';
        const testBirthdate = '1990-01-01';

        cy.get('input#name').type(testName);
        cy.get('input#email').type(testEmail);
        cy.get('select#gender').select(testGender);
        cy.get('input#birthdate').type(testBirthdate);

        cy.get('button[type="submit"]').click();

    });

    it('should navigate to the login page when "Login" link is clicked', () => {
        cy.contains('Already have an account?').find('a').click();
        cy.url().should('include', '/login');
    });
});
