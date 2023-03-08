import * as selectors from '../../../support/selectors'
import { currentMonth, nextMonth } from '../../../fixtures/date-input-testing-data.json'
describe('Scenarios to validate date input component', () => {
    beforeEach(() => {
        cy.visit('http://qa-assignment.useorigin.com.s3-website-us-east-1.amazonaws.com/');
        cy.get(selectors.dateInputMonthSelector)
            .as('dateMonth')
            .should('be.visible')
            .and('have.text', currentMonth);
        cy.get(selectors.dateInputDecrementSelector)
            .as('dateDecrementArrow')
            .should('not.be.enabled')
            .and('have.class',selectors.disabledAttribute);
    })

    it('Validating Date input component increment and decrement work as expected by mouse click', () => {
        cy.get('@dateMonth');
        cy.get('@dateDecrementArrow');
        cy.get(selectors.dateInputIncrementSelector)
            .should('not.have.attr', 'class', selectors.disabledAttribute)
            .click();
        cy.get(selectors.dateInputMonthSelector)
            .should('not.have.text', currentMonth)
            .and('have.text', 'April');
        cy.get(selectors.dateInputDecrementSelector)
            .should('not.have.class',selectors.disabledAttribute)
            .click();
        cy.get(selectors.dateInputMonthSelector)
            .should('not.have.text', nextMonth)
            .and('have.text', currentMonth);
    });

    it('Validating Date input component increment and decrement work as expected by keyboard', () => {
        cy.get('@dateMonth');
        cy.get('@dateDecrementArrow');
        cy.get(selectors.dateInputSelector)
            .should('not.have.attr', 'class', selectors.disabledAttribute)
            .click()
            .type('{rightarrow}');
        cy.get(selectors.dateInputMonthSelector)
            .should('not.have.text', currentMonth)
            .and('have.text', 'April');
        cy.get(selectors.dateInputDecrementSelector)
            .should('not.have.class',selectors.disabledAttribute)
        cy.get(selectors.dateInputSelector)
            .type('{leftarrow}');
        cy.get(selectors.dateInputMonthSelector)
            .should('not.have.text', nextMonth)
            .and('have.text', 'March');
    });
});
