describe('pages product test', () => {
  it('should data product', () => {
    cy.visit('/product');

    cy.get('.grid').children().should('have.length.at.least', 1);
  });
  it('Should successfully fetch data from the API', () => {
    cy.request(
      'GET',
      'https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles'
    ).then((response) => {
      expect(response.status).to.eq(200); // Ensure the response status is 200 OK
      expect(response.body).to.have.property('category').to.be.an('array');
      expect(response.body).to.have.property('type').to.be.an('array');
      // Add more assertions as needed based on the structure of your API response
    });
  });
});
