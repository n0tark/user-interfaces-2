describe('The Contacts Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should display the contact list', () => {
        cy.get('h1').should('contain', 'Contact Directory');
        cy.get('p').should('contain', 'No contacts found');
    });

    it('should add a new contact', () => {
        cy.get('button').contains('Add Contact').click();
        cy.get('input[type="text"]').eq(0).type('John Doe');
        cy.get('input[type="text"]').eq(1).type('123-456-7890');
        cy.get('button').contains('Add').click();
        cy.get('p').should('not.contain', 'No contacts found');
        cy.get('td').should('contain', '123-456-7890');
    });

    it('should edit a contact', () => {
        cy.get('button').contains('Edit').eq(0).click();
        cy.get('input[type="text"]').eq(0).clear().type('Jane Doe');
        cy.get('button').contains('Save').click();
        cy.get('td').should('contain', 'Jane Doe');
    });

    it('should delete a contact', () => {
        cy.get('button').contains('Delete').eq(0).click();
        // cy.get('p').should('contain', 'No contacts found');
    });
});
