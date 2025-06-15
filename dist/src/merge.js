"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection1, collection2, collection3) {
    let result = [];
    let i = 0, j = collection2.length - 1, k = 0;
    while (i < collection1.length && j >= 0 && k < collection3.length) {
        const candidates = [collection1[i], collection2[j], collection3[k]];
        const min = Math.min(...candidates);
        if (min === collection1[i]) {
            result.push(collection1[i++]);
        }
        else if (min === collection2[j]) {
            result.push(collection2[j--]);
        }
        else {
            result.push(collection3[k++]);
        }
    }
    while (i < collection1.length && j >= 0) {
        if (collection1[i] <= collection2[j]) {
            result.push(collection1[i++]);
        }
        else {
            result.push(collection2[j--]);
        }
    }
    while (i < collection1.length && k < collection3.length) {
        if (collection1[i] <= collection3[k]) {
            result.push(collection1[i++]);
        }
        else {
            result.push(collection3[k++]);
        }
    }
    while (j >= 0 && k < collection3.length) {
        if (collection2[j] <= collection3[k]) {
            result.push(collection2[j--]);
        }
        else {
            result.push(collection3[k++]);
        }
    }
    while (i < collection1.length) {
        result.push(collection1[i++]);
    }
    while (j >= 0) {
        result.push(collection2[j--]);
    }
    while (k < collection3.length) {
        result.push(collection3[k++]);
    }
    return result;
}
