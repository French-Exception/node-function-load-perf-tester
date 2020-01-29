/// <reference types="chai" />
import ExpectStatic = Chai.ExpectStatic;
export declare class FunctionLoadTester {
    measureAverage(fn: () => Promise<void>, times: number, expect: ExpectStatic): Promise<Chai.Assertion>;
}
