describe('Google Search', () => {
  it('should return search result for "Ironman', () => {
    cy.visit('https://google.com');
    cy.get('.gLFyf').type('Ironman');
    cy.get('.gLFyf').type('{enter}');
  });
});
