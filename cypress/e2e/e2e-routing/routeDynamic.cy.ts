describe('Test Dynamic Routing', () => {
  it('Should display correct metadata', () => {
    cy.visit('/dynamic-route'); // Assuming your page is served at the root URL

    cy.get('h1').contains('Dynamic Route').should('be.visible');
    // Add more assertions for metadata if necessary

    cy.get('.flex.flex-col.items-center.justify-center')
      .children('h1')
      .should('have.length', 3)
      .each((route, index) => {
        cy.wrap(route)
          .should('have.text', `Route${index + 1}`)
          .and('be.visible');
      });
    // Add more assertions for the content of the page if necessary
  });
  it('Should display dynamic routes', () => {
    cy.visit('/dynamic-route/1');
    cy.get('h1').should('have.text', 'page dynamic route id');
  });

  it('Should navigate to each dynamic route page review', () => {
    cy.visit('/dynamic-route/1/review');
    cy.get('h1').should('have.text', 'page review');
  });
});
