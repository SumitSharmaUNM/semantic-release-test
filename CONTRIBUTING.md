# Contributing to shared-utils

We're excited that you want to contribute to this shared library! This document outlines the standards and procedures for all contributions.

## Our Philosophy

- **Robustness:** Utilities must be "production-ready." They should be robust against invalid inputs (`null`, `undefined`, wrong types) and return safe values instead of crashing.
- **Testability:** Every new function _must_ be accompanied by unit tests.
- **Consistency:** Code must adhere to the project's linting and formatting standards.

## How to Add a New Utility

1.  **Find the Right File:** Add your new function to the appropriate file in the `src/` directory (e.g., `src/string.ts`, `src/number.ts`). If a new category is needed, create a new file (e.g., `src/object.ts`).
2.  **Export Your Function:** Be sure to export your new function from `src/index.ts` so it becomes part of the package's public API.
3.  **Write TSDoc Comments:** Add TSDoc comments (`/** ... */`) above your function. This is how our documentation website is automatically generated.
4.  **Add Unit Tests:** Add a corresponding test file in the `__tests__` folder (e.g., `__tests__/string.test.ts`).

## Writing Unit Tests

Your tests **must** cover all of the following:

1.  **The "Happy Path":** Test the function with a standard, valid input.
2.  **Edge Cases:** Test with any tricky but valid inputs (e.g., `0`, `""` (empty string), negative numbers).
3.  **Invalid Inputs:** This is critical. You must add tests to prove your function does not crash when given invalid data. Use `test.each` to test for `null`, `undefined`, and incorrect types (like numbers passed to a string function).

**Example Test for Invalid Inputs:**

```typescript
test.each([
  { input: null, name: 'null' },
  { input: undefined, name: 'undefined' },
  { input: 99, name: 'a number' },
])('should return an empty string when passed $name', ({ input }) => {
  // We use 'any' to bypass TypeScript for this runtime test
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(yourFunction(input as any)).toBe('');
});
```

## Running Checks Locally

Before you commit, you can run all CI checks locally to make sure your code is clean.

```bash
# Run all unit tests
pnpm test

# Run the linter
pnpm lint

# Fix any formatting issues
pnpm format
```

## Submitting a Pull Request

This repository uses `lint-staged` and `husky` to run a pre-commit hook. This hook will automatically run `eslint --fix` and `prettier --write` on your staged files.

1. Commit your changes. The pre-commit hook will run and may make fixes. If it does, you'll need to `git add` the changes it made and amend your commit.

2. Push your branch and open a Pull Request against the `main` branch.

3. The CI Pipeline will automatically run all checks. Your PR cannot be merged until all checks are green.
