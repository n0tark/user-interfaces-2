describe('The Profile Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/profile')
    })

    it('should display the user profile information', () => {
        cy.get('h1').should('contain', 'User Profile');
        cy.get('p').eq(0).should('contain', 'Welcome to your profile page.');
        cy.get('h2').should('contain', 'Personal Information');
        cy.get('p').eq(1).should('contain', 'Name: Tom Crush');
        cy.get('p').eq(2).should('contain', 'Email: test@example.com');
        cy.get('p').eq(3).should('contain', 'Phone: 123-456-7890');
    });
});
