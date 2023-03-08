# Requirements

Before starting, make sure the following tools are installed on your computer.

- [git](https://git-scm.com/) (I'm using version `2.32.2`)
- [Node.js](https://nodejs.org/en/) (I'm using version `v16.13.1`)
- NPM (I'm using version `9.6.0`)
- **Optional**[Allure](https://github.com/Shelex/cypress-allure-plugin)(I'm using version `2.21.0`)

**Note 1:** I highly recommend you use the same versions or the most recent ones of the tools cited above.

**Note 2:** When installing Node.js the NPM is automatically installed.

**Note 3:** To verify git, Node.js and NPM versions installed on your computer, execute the following command `git --version && node --version && npm --version` on terminal.

**Note 4:** On requirements list above I just posted links to installers in case you haven't them installed on your computer yet.

## Cloning the project 🐑

Open any browser of you preference, access URL https://github.com/felipe-cavalcanti/buy-a-house-app, click on **Code** button, select a clone option(HTTPS or SSH), copy project's clone link and on your terminal command line tool (at a folder where you want to place the project), execute the following command `git clone [paste-coppied-clone-link-here]`.

After cloning project, access recently cloned folder path(`cd buy-a-house-app`).

Inside folders path `buy-a-house-app/` you'll find sub-folders`.git/` (incognito folder), `cypress/` and `artifacts/`, and files `.gitignore` (incognito file), `cypress.json`, `package-lock.json`, `package.json` e `README.md`.

## Dependencies installation

With the project cloned into your computer from **GitHub**, it's time to install your dependencies.

As those dependencies are already listed on `package.json` file, all you need to do is to execute command `npm install` (or `npm i` - shorter version) on your project's root.

> 🧙🏿 This command will download `cypress` and `cypress-allure-plugin` as they are already listed on `devDependencies` section.

Execute command `npm test` (or `npm t` - shorter version) to make sure everything is working as expected.

### Additional information

- `Cypress` is the framework used for testing some scenarios in this assignment
- `Allure plugin` is a tool to generate good visual reports about automated tests executed

___

Great! All requirements should be fine now. ☑️

Let's jump to [Automated scenarios](./about-scenarios.md) for further details regarding test scenarios.
