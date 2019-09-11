export declare class ImmutabilityHelper {
    static getType(variable: any): string;
    static immute<T>(variable: any): T;
    static copy<T>(variable: any): T;
    constructor();
}
