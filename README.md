# LTK Take Home Assessment

This project uses playwright with typescript to automate the user flow mentioned in the take home assessment.

# Dependencies

- vscode or any other IDE of your choice
- NodeJS
- Playwright

# How To Run Locally

##### Setup For Local Web Testing

Assumptions: Mac with VSCode installed

- [Install NodeJS] (https://nodejs.org/en/download) or type `brew install node` in terminal if you have homebrew installed
  - To check if node and npm is installed run `node -v` and
    `npm -v` in your terminal
- Clone this repo to your local machine and navigate to the root of the folder
- Type `npx playwright install` to install playwright browsers
- Type `npm install` to install dependencies
- Rename the `.env.template`, in the root of this project, to `.env`
- Type `npm run test` to run the test. If you want to see logs in the terminal while running the tests Type `npm run test:logs`
  Note: if you want to run the test in headed mode, change the boolean value on line 33 in `playwright.config.ts` to `false`

# Report

- There should be a HTML report generated for the run under `./playwright-report/` folder.
