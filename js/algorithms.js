"use strict";

var Algorithms = function() {
    /* =============================================
     Helper functions
     * ============================================== */
    function generateStringFromArray(arr) {
        var tempString = "";
        for (let i = 0; i < arr.length; i++) {
            if (i !== arr.length - 1) {
                tempString += arr[i] + ", ";
            } else {
                tempString += arr[i];
            }
        }
        return tempString;
    }
    function swap(arr, srcIndex, tgtIndex) {
        var copy = arr[srcIndex];
        arr[srcIndex] = arr[tgtIndex];
        arr[tgtIndex] = copy;
    }
    function generateRandomArray(size) {
        var newArray = [];
        for (var i = 0; i < size; i++) {
            newArray[i] = Math.floor(Math.random() * 100);
        }

        return newArray;
    }
    function logDuration(algoTitle, startTimeMilis, endTimeMilis) {
        console.log(algoTitle + " | Time taken: " + Math.round(endTimeMilis - startTimeMilis));
    }
    function displayAlgorithm (algoTitle, unsortedDataArr, sortedDataArr) {
        let unsortedDataString = generateStringFromArray(unsortedDataArr);
        let sortedDataString = generateStringFromArray(sortedDataArr);

        // // Clone elements
        // var $clonedEl = $("[data-clone='original']").clone();
        //
        // // Remove data-clone attribute
        // $clonedEl.removeAttr('data-clone');
        //
        // // Replace data
        // $clonedEl.find(".algorithm-title").text(algoTitle);
        // $clonedEl.find(".algorithm-unsorted-data-container .algorithm-data").text(unsortedDataString);
        // $clonedEl.find(".algorithm-sorted-data-container .algorithm-data").text(sortedDataString);
        //
        // // unhide
        // $clonedEl.removeClass('hidden');
        // $clonedEl.appendTo("body");

        console.log("Title: " + algoTitle);
        console.log("Unsorted: " + unsortedDataString);
        console.log("Sorted  : " + sortedDataString);
        console.log("=====");
    }
    function getTime() {
        return new Date().getTime();
    }
    
    var runAllAlgorithms = function(size) {
        console.log("Running All Algorithms with Size = " + size);
        console.log("***************************************");
        fibonacciSequence(size, true);
        insertionSort(generateRandomArray(size), true);
        selectionSort(generateRandomArray(size), true);
        bubbleSort(generateRandomArray(size), true);
        shellSort(generateRandomArray(size), true);
    }; 

    /* =============================================
     Fibonacci Sequence
     * ============================================== */
    var fibonacciSequence = function(size, toggleDurationDisplay) {
        let data = [];

        var startTime = getTime();
        for (var i = 0; i < size; i++) {
            if (i === 0 || i === 1) {
                data.push(1);
            } else {
                let added = data[i-2] + data[i-1];
                data.push(added);
            }
        }
        var endTime = getTime();
        
        if (toggleDurationDisplay) {
            logDuration("Fibonacci Sequence", startTime, endTime);
        }

        return data;
    };
    
    /* =============================================
     Insertion Sort
     * ============================================== */
    var insertionSort = function(unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;

        startTime = getTime();
        for (var i = 1; i < data.length; i++) {
            var j = i - 1;
            var currentElement = data[i];
            while (j >= 0 && data[j] > currentElement) {
                // shift elements
                data[j+1] = data[j];
                j--;
            }
            data[j+1] = currentElement;
        }

        endTime = getTime();

        if (toggleDurationDisplay) {
            logDuration("Insertion Sort", startTime, endTime);
        }
        return data;
    };
    
    /* =============================================
     Selection Sort
     * ============================================== */
    var selectionSort = function(unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;

        var minIndex = 0;
        startTime = getTime();
        for (var i = 0; i < data.length; i++) {
            minIndex = i;
            for (var j = i + 1; j < data.length; j++) {
                if (data[j] < data[minIndex]) {
                    minIndex = j;
                }
            }
            if(minIndex !== i) {
                swap(data, minIndex, i);
            }
        }

        endTime = getTime();

        if (toggleDurationDisplay) {
            logDuration("Selection Sort", startTime, endTime);
        }
        return data;
    };

    /* =============================================
     Bubble Sort
     * ============================================== */
    var bubbleSort = function(unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;
        
        var iterationSize = data.length;
        var proceed;
        startTime = getTime();
        do {
            proceed = false;
            for (var i = 0; i < iterationSize; i++) {
                if (data[i] > data[i+1]) {
                    swap(data, i, i+1);
                    proceed = true;
                }
            }
            iterationSize--;
        } while (proceed);

        endTime = getTime();

        if (toggleDurationDisplay) {
            logDuration("Bubble Sort", startTime, endTime);
        }
        return data;
    };

    /* =============================================
     Shell Sort
     * ============================================== */
    var shellSort = function(unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;

        const interval = Math.round(data.length / 3) + 1;
        startTime = getTime();
        for (var i = 0; i < data.length - interval; i++) {
            if (data[i] > data[i+interval]) {
                swap(data, i, i+interval);
            }
        }
        var dataAfterInsertionSort = insertionSort(data, false);

        endTime = getTime();

        if (toggleDurationDisplay) {
            logDuration("Shell Sort", startTime, endTime);
        }
        return dataAfterInsertionSort;
    };

    /* =============================================
     Merge Sort
     * ============================================== */
    var mergeSort = function(unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;
        
        startTime = getTime();
    };
    
    return {
        generateRandomArray: generateRandomArray,
        runAllAlgorithms: runAllAlgorithms,
        fibonacciSequence: fibonacciSequence,
        insertionSort: insertionSort,
        selectionSort: selectionSort,
        bubbleSort: bubbleSort,
        shellSort: shellSort,
        mergeSort: mergeSort
    }
};

module.exports = Algorithms();