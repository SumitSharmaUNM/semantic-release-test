Instructions for installing the package:

## How to Install and Use

This is a private package published to GitHub Packages. To install it in your project (e.g., `[property-portal-web](https://github.com/The-Unmarketing-Agency/property-portal-web)`), you must first authenticate `pnpm` with GitHub.

### 1. One-Time Authentication

You only need to do this once per machine.

1.  Create a [GitHub Personal Access Token (PAT)](https://github.com/settings/tokens) with the **`read:packages`** scope.
2.  Log in to the GitHub package registry using `pnpm`. Run the following command and paste your PAT when prompted for a password:

    ```bash
    pnpm login --registry=[https://npm.pkg.github.com/](https://npm.pkg.github.com/)
    ```

### 2. Configure Your Project

In the root of _your_ project (e.g., `property-portal-web`), create a file named `.npmrc` (with the dot) and add the following line. This tells `pnpm` where to find this package.

@The-Unmarketing-Agency:registry=https://npm.pkg.github.com/

### 3. Install the Package

Now you can install the package just like any other:

```bash
pnpm add @The-Unmarketing-Agency/shared-utils
```

### 4. How to Use

```
import { capitalizeFirst, formatCurrency } from '@The-Unmarketing-Agency/shared-utils';

console.log(capitalizeFirst('hello')); // 'Hello'
console.log(formatCurrency(100));     // 'AED 100.00'
```
