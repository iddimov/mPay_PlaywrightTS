The project is using Playwright with Typescript.

**Dependencies**
1. Install Node.JS
2. Install VS Code
3. Via VS Code install playwright (if needed)

**How to run the project**
1. Option: via VS Code Test explorer:
* Open the test explorer and all tests should be listed
2. Option: via Terminal
* Open the terminal and type: "npx playwright test --ui" (with via Playwright's UI) or execute all tests without UI: "npx playwright test"

**Tests in the solution:**
1. AC1: Create and verify a new Natural User
2. AC2: Create and verify a new Wallet for a User

**Tests that are not included in the solution:**
1. Edge Cases - handling of special characters in creation scenarios
2. Boundary Cases - Max. and Max. length in different fields like "Description"
3. Boundary Cases - Min. and Max. amount in the Wallet after creation

**Improvement ideas**
1. Using "dotenv" library:
* to pass different parameters (for example credentials, using the benefit of "process.env.__" etc)
* to have multiple playwright/test config files
* More flexability in integration with DevOps
2. Test logic to be more generic and to accept test parameters and data, for example via CSV files, multiple JSONs etc
