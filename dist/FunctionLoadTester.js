"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const average = require("average");
class FunctionLoadTester {
    async measureAverage(fn, times, expect) {
        const durations_ms = [];
        const performanceObserver = new perf_hooks_1.PerformanceObserver((items, observer) => {
            for (const item of items.getEntries()) {
                durations_ms.push(item.duration);
            }
        });
        performanceObserver.observe({ entryTypes: ['measure'] });
        const promises = [];
        for (var i = 0; i < times; i++)
            promises.push((async () => {
                perf_hooks_1.performance.mark('micro.start');
                await fn();
                perf_hooks_1.performance.mark('micro.end');
                perf_hooks_1.performance.measure('start to end', 'micro.start', 'micro.end');
            })());
        await Promise.all(promises);
        performanceObserver.disconnect();
        const avg = average(durations_ms);
        return expect(avg);
    }
}
exports.FunctionLoadTester = FunctionLoadTester;
//# sourceMappingURL=FunctionLoadTester.js.map