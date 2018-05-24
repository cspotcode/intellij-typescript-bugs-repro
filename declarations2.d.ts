export {};

declare global {
    interface AmbientInterface {
        ambientFooProp: number;
        ambientBarProp: number;
        complexSubObject: Declarations1.DeclaredInterface['complexSubObject'];
    }
}