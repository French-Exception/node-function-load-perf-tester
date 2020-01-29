# About

Simple wrapping execution of function n'th times around performance = and returns average.

Purpose here is to facilitate coding of functional tests with load-testing.

Bear in mind that most of CI tests CAN run under heavy-load.

# Installation

```bash
npm i --save @frenchex/function-load-perf-tester-lib
```

# Basic usage

```typescript
import {expect} from 'chai';

it('is performant construction', async function () {
        const tester = new FunctionLoadTesterSpecs();

        (await tester
            .measureAverage(async () => {
                    // your code here
                },
                100, // execute 100 times to generate an average
                expect // wrapping function for resulting average
            ))
            .to.be.lte(1, `Construction must be lte`); //which let us fluently test return

    });
```
