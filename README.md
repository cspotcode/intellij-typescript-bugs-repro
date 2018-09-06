Reproduction for several bugs in IntelliJ / Webstorm's support for Typescript with ``"checkJs": true`.

Look at "main.js" for an explanation of the problems.  Supporting type information is declared in "declarations1.d.ts" and
"declarations2.d.ts".  All is valid Typescript.

To verify that TypeScript supports and validates all of the syntax used in this example:

    npm install
    ./node_modules/.bin/tsc -p .

tsconfig has `"allowJs"` and `"checkJs"` enabled.  This project uses TypeScript types within JSDoc annotations.
Continuous integration validates our code using `tsc -p .` to find and reject errors in our `.js`.  Thus it is necessary for the editor to
support the exact same set of type syntax features.  Ideally we should be able to disable non-TypeScript syntax, since
for our purposes, it is invalid and will be rejected by continuous integration.
