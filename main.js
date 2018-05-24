/**
 * @type {AmbientInterface['complexSubObject']}
 * Hover over the type annotation above ^.
 * WebStorm reports "invalid type syntax", whereas TypeScript's
 * language service understands the type and offers relevant code completion.
 */
var a = { // <-- highlight b and invoke Webstorm's "Expression Type" command.  The type displayed is incorrect because
          //     Webstorm doesn't understand our @type annotation.
    foo: true,
    bar: true
};


/**
 * @type {Declarations1.DeclaredInterface['complexSubObject']}
 * Hover over the type annotation above ^.
 * Webstorm reports "invalid type syntax", whereas editors using TypeScript's
 * language service understand the type and offer code completion.
 */
var b = { // <-- highlight b and run Webstorm's "Expression Type" command.  The type shown is incorrect because
          //     Webstorm can't parse our @type annotation.
    foo: true,
    bar: true
};

/**
 * @type {Declarations1.DeclaredInterface}
 * WebStorm reports "Unresolved variable or type 'DeclaredInterface'"
 * This is incorrect because DeclaredInterface is declared in declarations1.d.ts
 * TypeScript's language service understands this, but WebStorm does not.
 */
var c;

/**
 * @type {AmbientInterface}
 */
var intentionalTypeError = 123; // <-- intentional type error to prove that Typescript is checking this file.