/// <reference types="cypress" />

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should displays the correct title', () => {
    cy.title().should('eq', 'Rick and Morty');
  });

  it('should displays the navbar', () => {
    cy.get('nav > a:first').should('have.text', 'Main');
    cy.get('nav > a').should('have.length', 3).last().should('have.text', 'About');
  });

  it('should displays the search field', () => {
    cy.get('input[type="search"]').should('have.value', '');
    cy.get('button').contains('Search').click();
  });

  it('should displays 20 cards by default', () => {
    cy.get('[class*=cards] > [class*=card]').should('have.length', 20);
  });

  it('should displays the footer ', () => {
    cy.get('a[href="https://rs.school/react/"]');
    cy.get('footer span').should('have.text', '2023');
  });
});
