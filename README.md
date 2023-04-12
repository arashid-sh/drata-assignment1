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

# Environment Variables

If you are running the project locally, you will need a .env file in the root of the project with the appropriate required environment variables as described in the table below. Simply copy the **.env.sample** file to a local **.env file** in the root of the project and set the values as required.

| Variable | Description                           | Required | Example              |
| -------- | ------------------------------------- | -------- | -------------------- |
| BASE_URL | Sets the url to execute tests against | Yes      | `http://www.url.com` |

# Project Breakdown

All of the code is under the `src` folder. I have used the page object model as a design pattern for storing selectors and performing tasks that require more than one action for a step. The main test is in the `test` folder and the page classes are in the `pages` folder. I also used creational design patterns with playwright fixtures (https://zoopla.blog/posts/2023/test-framework-migration/) to make using the page classes more cleaner and easier. I also created a user factory that returns a user type with username and password fields. This way we can easily create the a user anywhere in the framework; be it for tests or if you want to send user credentials via an api call.
