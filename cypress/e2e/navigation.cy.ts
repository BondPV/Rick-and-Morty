/// <reference types="cypress" />

describe('Navigation', () => {
  before(() => {
    cy.visit('/');
  });

  it('should display main page', () => {
    cy.get('h1').should('have.text', 'Rick and Morty');
  });

  it('should navigates to forms page', () => {
    cy.get('nav a[href="/form"]').click();
    cy.location('pathname').should('include', '/form');
    cy.get('h1').should('have.text', 'Form');
  });

  it('should navigates to about page', () => {
    cy.get('nav a[href="/about"]').click();
    cy.location('pathname').should('include', '/about');
    cy.get('h1').should('have.text', 'About us');
  });

  it('should navigates to 404 page', () => {
    cy.visit('/404');
    cy.get('[class*=not-found] a[href="/"]').should('have.text', 'GET ME HOME').click();
    cy.get('h1').should('have.text', 'Rick and Morty');
    cy.get('input[type="search"]');
  });
});
