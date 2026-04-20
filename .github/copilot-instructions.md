# Copilot Instructions for CypressFinal

This is a **Cypress E2E testing project** for web application automation and testing.

## Project Structure

```
cypress/
├── e2e/                     # Test specs organized by category
│   ├── 1-getting-started/   # Beginner-level tests (contact-us.js, todo.cy.js)
│   └── 2-advanced-examples/ # Feature-specific tests (actions, assertions, navigation, etc.)
├── support/                 # Shared test utilities
│   ├── commands.js         # Custom Cypress commands (for extension/reuse)
│   └── e2e.js              # Global test configuration & setup
└── fixtures/               # Test data files (example.json)
```

## Architecture & Design Patterns

**Test Organization**: Tests are grouped by complexity level and feature area. Each test file follows a `describe()` > `it()` structure with `beforeEach()` hooks for setup (e.g., `cy.visit()` URLs).

**External Test Targets**: Tests primarily target external websites:
- `https://www.webdriveruniversity.com/` (form testing)
- `https://example.cypress.io/` (Cypress command examples)

**Custom Commands**: The project supports custom Cypress commands in `cypress/support/commands.js`. Currently minimal—extend as needed for cross-test patterns (e.g., login flows, form fills).

## Key Developer Workflows

### Running Tests

```bash
# Open Cypress GUI (interactive test runner)
npx cypress open

# Open specific test file in GUI
npx cypress open --config testFiles="cypress/e2e/1-getting-started/contact-us.js"

# Run all tests headless (CLI mode) - requires test script in package.json
npm test
```

### Test File Naming Convention

Files use `.cy.js` extension (e.g., `actions.cy.js`). Pattern matches `cypress/e2e/**/*.{js,jsx,ts,tsx,feature}` in `cypress.config.js`.

### Writing New Tests

1. Create file in `cypress/e2e/{category}/` with `.cy.js` suffix
2. Import Cypress types: `/// <reference types="cypress" />`
3. Structure: `context()` or `describe()` > `beforeEach()` > `it()`
4. Use chainable Cypress commands: `cy.visit()`, `cy.get()`, `cy.type()`, `.should()`, `.click()`
5. Example pattern from `contact-us.js`:
   ```javascript
   describe("Feature Name", () => {
     it("test description", () => {
       cy.visit("https://target-url.com")
       cy.get("selector").type("input").click()
       cy.get("result").should("have.text", "expected")
     })
   })
   ```

## Testing Patterns & Conventions

**Selectors**: Use direct attribute selectors (`input[name='field_name']`) or class selectors (`.action-email`). Avoid brittle DOM paths.

**Assertions**: Chain assertions using `.should()`:
- Content: `.should("have.text", "...")` or `.should("contain.text", "...")`
- Attributes: `.should("have.class", "...")`
- Visibility: `.should("be.visible")`
- Values: `.should("have.value", "...")`

**Chainable API**: Leverage Cypress method chaining to avoid repetition:
```javascript
cy.get('.assertion-table')
  .find('tbody tr:last')
  .should('have.class', 'success')
  .find('td')
  .first()
  .should('have.text', 'Column content')
```

## Configuration

**`cypress.config.js`**: Defines spec pattern, node event setup, and environment flags (`allowCypressEnv: false`).

**`cypress/support/e2e.js`**: Auto-loaded before all tests. Imports custom commands from `commands.js`.

## Dependencies

- **cypress**: ^15.14.0 (E2E testing framework)
- **Node.js**: Required (no version specified; use LTS recommended)

## AI Agent Guidance

- **When adding tests**: Follow existing `.cy.js` file patterns in `cypress/e2e/`. Use descriptive test names and selector strategies matching the context (form tests use `input[name='...']`, example tests use class selectors).
- **When extending commands**: Add reusable logic to `cypress/support/commands.js` for DRY patterns (e.g., form submission helpers, login sequences).
- **When debugging**: Use Cypress GUI (`npx cypress open`) for interactive debugging with time-travel and step-through capabilities.
- **External dependencies**: Tests depend on live external URLs—verify URL availability before test creation or mark as flaky if needed.
