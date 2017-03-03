"use strict";

const algo = require('./algorithms.js');
const utils = require('./utils.js');

var sortedData = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
var unsortedData = [2, 34, 3, 1, 8, 55, 5, 21, 13, 1];

test('Fibonacci Algorithm', () => {
    expect(algo.fibonacciSequence(10, false).equals(sortedData)).toBeTruthy();
});

test('Insertion Sort on Sorted Array', () => {
    var data = sortedData.slice();
    expect(algo.insertionSort(data, false).equals(sortedData)).toBeTruthy();
});

test('Insertion Sort on Unsorted Array', () => {
    var data = unsortedData.slice();
    expect(algo.insertionSort(data, false).equals(sortedData)).toBeTruthy();
});

test('Selection Sort on Sorted Array', () => {
    var data = sortedData.slice();
    expect(algo.selectionSort(data, false).equals(sortedData)).toBeTruthy();
});

test('Selection Sort on Unsorted Array', () => {
    var data = unsortedData.slice();
    expect(algo.selectionSort(data, false).equals(sortedData)).toBeTruthy();
});