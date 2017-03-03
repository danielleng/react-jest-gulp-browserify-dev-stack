"use strict";

const algo = require("./algorithms.js");

$( document ).ready(function() {
    console.log("Document ready.");
    
    algo.runAllAlgorithms(10000);
    // algo.fibonacciSequence(algo.generateRandomArray(10000), true);
    // algo.insertionSort(algo.generateRandomArray(10000), true);
    // algo.selectionSort(algo.generateRandomArray(10000), true);
    // algo.bubbleSort(algo.generateRandomArray(10000), true);
    // algo.shellSort(algo.generateRandomArray(10000), true);
});