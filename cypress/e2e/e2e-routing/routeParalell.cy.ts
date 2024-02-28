describe('Test Paralell Routing', () => {
  it('Routing page', () => {
    cy.visit('/parallel-routes');

    // Assert the title metadata
    cy.title().should('eq', 'Route Parallel');

    // Assert the content
    cy.contains('h1', 'Pararell-routes').should('be.visible');
  });
  //   before(() => {
  //     // Visit the page where the components are rendered
  //     cy.visit('/parallel-routes');

  //     // Define aliases for sidebar, topbar, and page components
  //     cy.get('.sidebar').as('sidebar');
  //     cy.get('.topbar').as('topbar');
  //     cy.get('.page').as('page');
  //   });

  it('should render sidebar, topbar, and page content correctly', () => {
    cy.visit('/parallel-routes');
    // Assert the existenaice of the sidebar
    cy.get('div').contains('Sidebar').should('be.visible');

    // Assert the existence of the topbar
    cy.get('div').contains('TOPBar').should('be.visible');

    // Assert the content of the page component
  });
});
