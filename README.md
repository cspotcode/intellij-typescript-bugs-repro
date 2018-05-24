Reproduction for several bugs in IntelliJ / Webstorm's support for Typescript with "checkJs".

To confirm that TypeScript supports all of the syntax used in this example:

    npm install
    ./node_modules/.bin/tsc -p .

tsconfig has "allowJs" and "checkJs" enabled.  This project uses TypeScript types within JSDoc annotations.
Continuous integration validates our code using `tsc -p .` to find errors.
