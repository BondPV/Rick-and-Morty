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

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[type="search"]').type('Morty');
    cy.get('button').contains('Search').click();
  });

  it('should display search input when search button is clicked', () => {
    cy.get('input[type="search"]').should('have.value', 'Morty');
  });

  it('should display preloader when search button is clicked', () => {
    cy.get('[data-testid="preloader"]');
  });

  it('should display search results when search button is clicked', () => {
    cy.wait(500);
    cy.get('[class*=card__description]').last().should('include.text', 'Morty');
  });

  it('should be save search results after go to another page', () => {
    cy.wait(500);
    cy.get('a[href="/about"]').click();
    cy.get('a[href="/"]').click();
    cy.get('input[type="search"]').should('have.value', 'Morty');
    cy.get('[class*=card__description]').last().should('include.text', 'Morty');
  });
});
