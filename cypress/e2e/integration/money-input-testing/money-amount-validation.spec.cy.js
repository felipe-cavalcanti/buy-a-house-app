import * as selectors from '../../../support/selectors'
import {
    smallValueInput,
    tooBigValueInput,
    justRightValueInput,
    notAllowedTextValueInput
} from '../../../fixtures/money-input-testing-data.json';

describe('Scenarios to validate small, too big and just right inputs', () => {
    beforeEach(() => {
        cy.visit('http://qa-assignment.useorigin.com.s3-website-us-east-1.amazonaws.com/');
    })

    let formattedValueToBeDisplayed = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    it('Validating money input is able to receive small input', () => {
        cy.accessInputAndType(selectors.moneyInputSelector, smallValueInput)
            .then(($moneyInput) => {
                expect($moneyInput).to.have.attr('class', selectors.moneyInputFocusSelector);
                expect($moneyInput).to.have.attr('value', formattedValueToBeDisplayed.format(smallValueInput / 100).split('$')[1]);
            })
    });

    it('Validating money input is able to receive just right input', () => {
        cy.accessInputAndType(selectors.moneyInputSelector, justRightValueInput)
            .then(($moneyInput) => {
                expect($moneyInput).to.have.attr('class', selectors.moneyInputFocusSelector);
                expect($moneyInput).to.have.attr('value', formattedValueToBeDisplayed.format(justRightValueInput / 100).split('$')[1]);
            })
    });

    it('Validating money input is able to receive a too big input', () => {
        cy.accessInputAndType(selectors.moneyInputSelector, tooBigValueInput)
            .then(($moneyInput) => {
                expect($moneyInput).to.have.attr('class', selectors.moneyInputFocusSelector);
                expect($moneyInput).to.have.attr('value', formattedValueToBeDisplayed.format(tooBigValueInput / 100).split('$')[1]);
            })
    });

    it('Validating money input is not able to receive a random text', () => {
        cy.accessInputAndType(selectors.moneyInputSelector, notAllowedTextValueInput)
            .then(($moneyInput) => {
                expect($moneyInput).to.have.attr('class', selectors.moneyInputFocusSelector);
                expect($moneyInput).to.have.attr('value', '');
            })
    });
});