"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../src/merge");
test('merge example collections', () => {
    const c1 = [1, 3, 5];
    const c2 = [6, 4, 2];
    const c3 = [0, 7, 8];
    expect((0, merge_1.merge)(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});
