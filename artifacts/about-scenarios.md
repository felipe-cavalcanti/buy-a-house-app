# About scenarios

Access `cypress` folder and you'll find `e2e/integration` with the following folders:

- Date-input-testing
- Money-input-testing

# Date Input testing

Inside `date-input-testing` folder you'll find `date-input-validation.spec.cy.js` file that stores the validation scenarios done regarding it: 

- 'Validating Date input component increment and decrement work as expected by mouse click'
- 'Validating Date input component increment and decrement work as expected by keyboard'

# Money Input testing

Inside `money-input-testing` folder you'll find `money-input-validation.spec.cy.js` file that stores the validation scenarios done regarding it: 

- 'Validating money input is able to receive number (small, just right and too big ones)'
- 'Validating money input is not able to receive a random text'

Those are the automated tests created!☑️

# Automation report

I was able to generate an automation report using Allure Report plugin as can be seen here:

[Allure Report Generated](../allure_report_example.jpeg)

On `package.json` file you will find the scripts in order to execute and generate them as well. It's pretty simple. All you need to to is to run `npm test` on your terminal and then run `npm run allure:report` and you will see a new Allure Reports folder will be generated. Run `allure open` to see the reports in a beautiful way.

**Note:** If the test report does not open, run the following command on your terminal `npm install -g allure-commandline --save-dev` and try to open them again using command `allure open`.

Let's jump to [Test Plan description documentation](./test-plan.md) to understand how every test was designed and performed.
