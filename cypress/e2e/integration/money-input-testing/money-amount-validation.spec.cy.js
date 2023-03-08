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

    const inputTerms = [smallValueInput,justRightValueInput,tooBigValueInput]

    inputTerms.forEach(term => {
        it(`Validating money input is able to receive number ${term}`, () => {
            cy.accessInputAndType(selectors.moneyInputSelector, term)
                .then(($moneyInput) => {
                    expect($moneyInput).to.have.attr('class', selectors.moneyInputFocusSelector);
                    expect($moneyInput).to.have.attr('value', formattedValueToBeDisplayed.format(term / 100).split('$')[1]);
                })
        });
    });

    it('Validating money input is not able to receive a random text', () => {
        cy.accessInputAndType(selectors.moneyInputSelector, notAllowedTextValueInput)
            .then(($moneyInput) => {
                expect($moneyInput).to.have.attr('class', selectors.moneyInputFocusSelector);
                expect($moneyInput).to.have.attr('value', '');
            })
    });
});