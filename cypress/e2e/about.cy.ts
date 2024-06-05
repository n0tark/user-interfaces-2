describe('The About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  })

  it('should display the correct heading', () => {
    cy.get('h1').should('contain', 'About ContactMe')
  })

  it('should display the correct paragraphs', () => {
    cy.get('p').eq(0).should('contain', 'Contact Manager is a web application designed for storing, deleting, and editing contacts.')
    cy.get('p').eq(1).should('contain', 'Contact Manager is a web application designed to connect people through a database of contacts.')
  })


  it('should have a mobile-friendly design', () => {
    cy.viewport('iphone-x')
  })
})
