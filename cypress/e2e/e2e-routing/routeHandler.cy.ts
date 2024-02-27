describe('Page with Metadata Test', () => {
  it('Should display correct metadata', () => {
    cy.visit('/route-biasa'); // Assuming your page is served at the root URL

    cy.title().should('eq', 'Route Biasaaaa');
    // Add more assertions for metadata if necessary

    cy.contains('h1', 'Routing biasa').should('be.visible');
    // Add more assertions for the content of the page if necessary
  });
});
