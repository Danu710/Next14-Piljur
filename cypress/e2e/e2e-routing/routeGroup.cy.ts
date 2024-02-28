describe('Test Group Routing', () => {
  it('Routing Login page', () => {
    cy.visit('/auth/login');
    cy.get('h1').contains('Login').should('be.visible');
    // Add more assertions for metadata if necessary
  });
  it('Routing Register page', () => {
    cy.visit('/auth/register');
    cy.get('h1').contains('Register').should('be.visible');
  });
});
