/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Form Page', () => {
  before(() => {
    cy.visit('/form');
  });

  it('should displays forms page header', () => {
    cy.get('h1').should('have.text', 'Form');
  });

  it('should displays the form field', () => {
    // cy.visit('/form');
    cy.get('form');
    cy.get('button').contains('Create');
  });

  it('should displays message "No cards created"', () => {
    // cy.visit('/form');
    cy.get('h3').should('have.text', 'No cards created');
  });

  it('should display error message when the form is not completed', () => {
    // cy.visit('/form');
    cy.get('button').contains('Create').click();
    cy.get('[class*=form] [class^=_error]').should('have.length', 6);
  });

  it('should be created card', () => {
    // cy.visit('/form');
    cy.get('#name').type('Test Name');
    cy.get('select[name="location"]').select('Earth (C-137)');
    cy.get('#created').type('2023-04-19');
    cy.get('#male').check();
    cy.get('#status').check();
    cy.get('#image').attachFile('test-file.png');

    cy.get('button').contains('Create').wait(100).click();
    cy.get('[class*=alert]').should('be.visible');
    cy.wait(1200);
    cy.get('[class*=alert]').should('not.exist');

    cy.get('[data-testid="Test Name"]');
  });

  // it('Just a test to remove page load on coverage saving', () => {
  //   expect(true).to.equal(true);
  // });
});
