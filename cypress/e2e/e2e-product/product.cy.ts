describe('pages product test', () => {
  it('should data product', () => {
    cy.visit('/product');

    // Check if cards are displayed
    cy.get('.grid').children().should('have.length.at.least', 1);

    // Check if each card contains necessary elements
    cy.get('.grid')
      .children()
      .each((card) => {
        cy.wrap(card).within(() => {
          cy.get('div').should('exist');
          cy.get('img').should('exist');
          cy.get('p').should('exist');
        });
      });
  });
});
