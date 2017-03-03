(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Algorithms = function () {
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
    function displayAlgorithm(algoTitle, unsortedDataArr, sortedDataArr) {
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

    var runAllAlgorithms = function (size) {
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
    var fibonacciSequence = function (size, toggleDurationDisplay) {
        let data = [];

        var startTime = getTime();
        for (var i = 0; i < size; i++) {
            if (i === 0 || i === 1) {
                data.push(1);
            } else {
                let added = data[i - 2] + data[i - 1];
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
    var insertionSort = function (unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;

        startTime = getTime();
        for (var i = 1; i < data.length; i++) {
            var j = i - 1;
            var currentElement = data[i];
            while (j >= 0 && data[j] > currentElement) {
                // shift elements
                data[j + 1] = data[j];
                j--;
            }
            data[j + 1] = currentElement;
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
    var selectionSort = function (unsortedData, toggleDurationDisplay) {
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
            if (minIndex !== i) {
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
    var bubbleSort = function (unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;

        var iterationSize = data.length;
        var proceed;
        startTime = getTime();
        do {
            proceed = false;
            for (var i = 0; i < iterationSize; i++) {
                if (data[i] > data[i + 1]) {
                    swap(data, i, i + 1);
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
    var shellSort = function (unsortedData, toggleDurationDisplay) {
        let startTime, endTime;
        let data = unsortedData;

        const interval = Math.round(data.length / 3) + 1;
        startTime = getTime();
        for (var i = 0; i < data.length - interval; i++) {
            if (data[i] > data[i + interval]) {
                swap(data, i, i + interval);
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
    var mergeSort = function (unsortedData, toggleDurationDisplay) {
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
    };
};

module.exports = Algorithms();

},{}],2:[function(require,module,exports){
"use strict";

const algo = require("./algorithms.js");

$(document).ready(function () {
    console.log("Document ready.");

    algo.runAllAlgorithms(10000);
    // algo.fibonacciSequence(algo.generateRandomArray(10000), true);
    // algo.insertionSort(algo.generateRandomArray(10000), true);
    // algo.selectionSort(algo.generateRandomArray(10000), true);
    // algo.bubbleSort(algo.generateRandomArray(10000), true);
    // algo.shellSort(algo.generateRandomArray(10000), true);
});

},{"./algorithms.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcYWxnb3JpdGhtcy5qcyIsImpzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLGFBQWEsWUFBVztBQUN4Qjs7O0FBR0EsYUFBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUNsQyxZQUFJLGFBQWEsRUFBakI7QUFDQSxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksSUFBSSxNQUF4QixFQUFnQyxHQUFoQyxFQUFxQztBQUNqQyxnQkFBSSxNQUFNLElBQUksTUFBSixHQUFhLENBQXZCLEVBQTBCO0FBQ3RCLDhCQUFjLElBQUksQ0FBSixJQUFTLElBQXZCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsOEJBQWMsSUFBSSxDQUFKLENBQWQ7QUFDSDtBQUNKO0FBQ0QsZUFBTyxVQUFQO0FBQ0g7QUFDRCxhQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLFFBQW5CLEVBQTZCLFFBQTdCLEVBQXVDO0FBQ25DLFlBQUksT0FBTyxJQUFJLFFBQUosQ0FBWDtBQUNBLFlBQUksUUFBSixJQUFnQixJQUFJLFFBQUosQ0FBaEI7QUFDQSxZQUFJLFFBQUosSUFBZ0IsSUFBaEI7QUFDSDtBQUNELGFBQVMsbUJBQVQsQ0FBNkIsSUFBN0IsRUFBbUM7QUFDL0IsWUFBSSxXQUFXLEVBQWY7QUFDQSxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksSUFBcEIsRUFBMEIsR0FBMUIsRUFBK0I7QUFDM0IscUJBQVMsQ0FBVCxJQUFjLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixHQUEzQixDQUFkO0FBQ0g7O0FBRUQsZUFBTyxRQUFQO0FBQ0g7QUFDRCxhQUFTLFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0MsY0FBaEMsRUFBZ0QsWUFBaEQsRUFBOEQ7QUFDMUQsZ0JBQVEsR0FBUixDQUFZLFlBQVksaUJB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RUEsTUFBTSxPQUFPLFFBQVEsaUJBQVIsQ0FBYjs7QUFFQSxFQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDM0IsWUFBUSxHQUFSLENBQVksaUJBQVo7O0FBRUEsU0FBSyxnQkFBTCxDQUFzQixLQUF0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQVREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIEFsZ29yaXRobXMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIEhlbHBlciBmdW5jdGlvbnNcclxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3RyaW5nRnJvbUFycmF5KGFycikge1xyXG4gICAgICAgIHZhciB0ZW1wU3RyaW5nID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPT0gYXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBTdHJpbmcgKz0gYXJyW2ldICsgXCIsIFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGVtcFN0cmluZyArPSBhcnJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzd2FwKGFyciwgc3JjSW5kZXgsIHRndEluZGV4KSB7XHJcbiAgICAgICAgdmFyIGNvcHkgPSBhcnJbc3JjSW5kZXhdO1xyXG4gICAgICAgIGFycltzcmNJbmRleF0gPSBhcnJbdGd0SW5kZXhdO1xyXG4gICAgICAgIGFyclt0Z3RJbmRleF0gPSBjb3B5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21BcnJheShzaXplKSB7XHJcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG9nRHVyYXRpb24oYWxnb1RpdGxlLCBzdGFydFRpbWVNaWxpcywgZW5kVGltZU1pbGlzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxnb1RpdGxlICsgXCIgfCBUaW1lIHRha2VuOiBcIiArIE1hdGgucm91bmQoZW5kVGltZU1pbGlzIC0gc3RhcnRUaW1lTWlsaXMpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGdvcml0aG0gKGFsZ29UaXRsZSwgdW5zb3J0ZWREYXRhQXJyLCBzb3J0ZWREYXRhQXJyKSB7XHJcbiAgICAgICAgbGV0IHVuc29ydGVkRGF0YVN0cmluZyA9IGdlbmVyYXRlU3RyaW5nRnJvbUFycmF5KHVuc29ydGVkRGF0YUFycik7XHJcbiAgICAgICAgbGV0IHNvcnRlZERhdGFTdHJpbmcgPSBnZW5lcmF0ZVN0cmluZ0Zyb21BcnJheShzb3J0ZWREYXRhQXJyKTtcclxuXHJcbiAgICAgICAgLy8gLy8gQ2xvbmUgZWxlbWVudHNcclxuICAgICAgICAvLyB2YXIgJGNsb25lZEVsID0gJChcIltkYXRhLWNsb25lPSdvcmlnaW5hbCddXCIpLmNsb25lKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAvLyBSZW1vdmUgZGF0YS1jbG9uZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyAkY2xvbmVkRWwucmVtb3ZlQXR0cignZGF0YS1jbG9uZScpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy8gUmVwbGFjZSBkYXRhXHJcbiAgICAgICAgLy8gJGNsb25lZEVsLmZpbmQoXCIuYWxnb3JpdGhtLXRpdGxlXCIpLnRleHQoYWxnb1RpdGxlKTtcclxuICAgICAgICAvLyAkY2xvbmVkRWwuZmluZChcIi5hbGdvcml0aG0tdW5zb3J0ZWQtZGF0YS1jb250YWluZXIgLmFsZ29yaXRobS1kYXRhXCIpLnRleHQodW5zb3J0ZWREYXRhU3RyaW5nKTtcclxuICAgICAgICAvLyAkY2xvbmVkRWwuZmluZChcIi5hbGdvcml0aG0tc29ydGVkLWRhdGEtY29udGFpbmVyIC5hbGdvcml0aG0tZGF0YVwiKS50ZXh0KHNvcnRlZERhdGFTdHJpbmcpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy8gdW5oaWRlXHJcbiAgICAgICAgLy8gJGNsb25lZEVsLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAvLyAkY2xvbmVkRWwuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlOiBcIiArIGFsZ29UaXRsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVbnNvcnRlZDogXCIgKyB1bnNvcnRlZERhdGFTdHJpbmcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29ydGVkICA6IFwiICsgc29ydGVkRGF0YVN0cmluZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgcnVuQWxsQWxnb3JpdGhtcyA9IGZ1bmN0aW9uKHNpemUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgQWxsIEFsZ29yaXRobXMgd2l0aCBTaXplID0gXCIgKyBzaXplKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICBmaWJvbmFjY2lTZXF1ZW5jZShzaXplLCB0cnVlKTtcclxuICAgICAgICBpbnNlcnRpb25Tb3J0KGdlbmVyYXRlUmFuZG9tQXJyYXkoc2l6ZSksIHRydWUpO1xyXG4gICAgICAgIHNlbGVjdGlvblNvcnQoZ2VuZXJhdGVSYW5kb21BcnJheShzaXplKSwgdHJ1ZSk7XHJcbiAgICAgICAgYnViYmxlU29ydChnZW5lcmF0ZVJhbmRvbUFycmF5KHNpemUpLCB0cnVlKTtcclxuICAgICAgICBzaGVsbFNvcnQoZ2VuZXJhdGVSYW5kb21BcnJheShzaXplKSwgdHJ1ZSk7XHJcbiAgICB9OyBcclxuXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICBGaWJvbmFjY2kgU2VxdWVuY2VcclxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIHZhciBmaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKHNpemUsIHRvZ2dsZUR1cmF0aW9uRGlzcGxheSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcblxyXG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkZGVkID0gZGF0YVtpLTJdICsgZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGFkZGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZW5kVGltZSA9IGdldFRpbWUoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodG9nZ2xlRHVyYXRpb25EaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIGxvZ0R1cmF0aW9uKFwiRmlib25hY2NpIFNlcXVlbmNlXCIsIHN0YXJ0VGltZSwgZW5kVGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIEluc2VydGlvbiBTb3J0XHJcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICB2YXIgaW5zZXJ0aW9uU29ydCA9IGZ1bmN0aW9uKHVuc29ydGVkRGF0YSwgdG9nZ2xlRHVyYXRpb25EaXNwbGF5KSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGltZSwgZW5kVGltZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHVuc29ydGVkRGF0YTtcclxuXHJcbiAgICAgICAgc3RhcnRUaW1lID0gZ2V0VGltZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaiA9IGkgLSAxO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoaiA+PSAwICYmIGRhdGFbal0gPiBjdXJyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2hpZnQgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgIGRhdGFbaisxXSA9IGRhdGFbal07XHJcbiAgICAgICAgICAgICAgICBqLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YVtqKzFdID0gY3VycmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbmRUaW1lID0gZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAodG9nZ2xlRHVyYXRpb25EaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIGxvZ0R1cmF0aW9uKFwiSW5zZXJ0aW9uIFNvcnRcIiwgc3RhcnRUaW1lLCBlbmRUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICBTZWxlY3Rpb24gU29ydFxyXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgdmFyIHNlbGVjdGlvblNvcnQgPSBmdW5jdGlvbih1bnNvcnRlZERhdGEsIHRvZ2dsZUR1cmF0aW9uRGlzcGxheSkge1xyXG4gICAgICAgIGxldCBzdGFydFRpbWUsIGVuZFRpbWU7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB1bnNvcnRlZERhdGE7XHJcblxyXG4gICAgICAgIHZhciBtaW5JbmRleCA9IDA7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gZ2V0VGltZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtaW5JbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhW2pdIDwgZGF0YVttaW5JbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5JbmRleCA9IGo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobWluSW5kZXggIT09IGkpIHtcclxuICAgICAgICAgICAgICAgIHN3YXAoZGF0YSwgbWluSW5kZXgsIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbmRUaW1lID0gZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAodG9nZ2xlRHVyYXRpb25EaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIGxvZ0R1cmF0aW9uKFwiU2VsZWN0aW9uIFNvcnRcIiwgc3RhcnRUaW1lLCBlbmRUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIEJ1YmJsZSBTb3J0XHJcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICB2YXIgYnViYmxlU29ydCA9IGZ1bmN0aW9uKHVuc29ydGVkRGF0YSwgdG9nZ2xlRHVyYXRpb25EaXNwbGF5KSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGltZSwgZW5kVGltZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHVuc29ydGVkRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaXRlcmF0aW9uU2l6ZSA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIHZhciBwcm9jZWVkO1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IGdldFRpbWUoKTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHByb2NlZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25TaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldID4gZGF0YVtpKzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhcChkYXRhLCBpLCBpKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2NlZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdGlvblNpemUtLTtcclxuICAgICAgICB9IHdoaWxlIChwcm9jZWVkKTtcclxuXHJcbiAgICAgICAgZW5kVGltZSA9IGdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRvZ2dsZUR1cmF0aW9uRGlzcGxheSkge1xyXG4gICAgICAgICAgICBsb2dEdXJhdGlvbihcIkJ1YmJsZSBTb3J0XCIsIHN0YXJ0VGltZSwgZW5kVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICBTaGVsbCBTb3J0XHJcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICB2YXIgc2hlbGxTb3J0ID0gZnVuY3Rpb24odW5zb3J0ZWREYXRhLCB0b2dnbGVEdXJhdGlvbkRpc3BsYXkpIHtcclxuICAgICAgICBsZXQgc3RhcnRUaW1lLCBlbmRUaW1lO1xyXG4gICAgICAgIGxldCBkYXRhID0gdW5zb3J0ZWREYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IE1hdGgucm91bmQoZGF0YS5sZW5ndGggLyAzKSArIDE7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gZ2V0VGltZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggLSBpbnRlcnZhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID4gZGF0YVtpK2ludGVydmFsXSkge1xyXG4gICAgICAgICAgICAgICAgc3dhcChkYXRhLCBpLCBpK2ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF0YUFmdGVySW5zZXJ0aW9uU29ydCA9IGluc2VydGlvblNvcnQoZGF0YSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBlbmRUaW1lID0gZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAodG9nZ2xlRHVyYXRpb25EaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIGxvZ0R1cmF0aW9uKFwiU2hlbGwgU29ydFwiLCBzdGFydFRpbWUsIGVuZFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YUFmdGVySW5zZXJ0aW9uU29ydDtcclxuICAgIH07XHJcblxyXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgTWVyZ2UgU29ydFxyXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgdmFyIG1lcmdlU29ydCA9IGZ1bmN0aW9uKHVuc29ydGVkRGF0YSwgdG9nZ2xlRHVyYXRpb25EaXNwbGF5KSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGltZSwgZW5kVGltZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHVuc29ydGVkRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzdGFydFRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tQXJyYXk6IGdlbmVyYXRlUmFuZG9tQXJyYXksXHJcbiAgICAgICAgcnVuQWxsQWxnb3JpdGhtczogcnVuQWxsQWxnb3JpdGhtcyxcclxuICAgICAgICBmaWJvbmFjY2lTZXF1ZW5jZTogZmlib25hY2NpU2VxdWVuY2UsXHJcbiAgICAgICAgaW5zZXJ0aW9uU29ydDogaW5zZXJ0aW9uU29ydCxcclxuICAgICAgICBzZWxlY3Rpb25Tb3J0OiBzZWxlY3Rpb25Tb3J0LFxyXG4gICAgICAgIGJ1YmJsZVNvcnQ6IGJ1YmJsZVNvcnQsXHJcbiAgICAgICAgc2hlbGxTb3J0OiBzaGVsbFNvcnQsXHJcbiAgICAgICAgbWVyZ2VTb3J0OiBtZXJnZVNvcnRcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWxnb3JpdGhtcygpOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgYWxnbyA9IHJlcXVpcmUoXCIuL2FsZ29yaXRobXMuanNcIik7XHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudCByZWFkeS5cIik7XHJcbiAgICBcclxuICAgIGFsZ28ucnVuQWxsQWxnb3JpdGhtcygxMDAwMCk7XHJcbiAgICAvLyBhbGdvLmZpYm9uYWNjaVNlcXVlbmNlKGFsZ28uZ2VuZXJhdGVSYW5kb21BcnJheSgxMDAwMCksIHRydWUpO1xyXG4gICAgLy8gYWxnby5pbnNlcnRpb25Tb3J0KGFsZ28uZ2VuZXJhdGVSYW5kb21BcnJheSgxMDAwMCksIHRydWUpO1xyXG4gICAgLy8gYWxnby5zZWxlY3Rpb25Tb3J0KGFsZ28uZ2VuZXJhdGVSYW5kb21BcnJheSgxMDAwMCksIHRydWUpO1xyXG4gICAgLy8gYWxnby5idWJibGVTb3J0KGFsZ28uZ2VuZXJhdGVSYW5kb21BcnJheSgxMDAwMCksIHRydWUpO1xyXG4gICAgLy8gYWxnby5zaGVsbFNvcnQoYWxnby5nZW5lcmF0ZVJhbmRvbUFycmF5KDEwMDAwKSwgdHJ1ZSk7XHJcbn0pOyJdfQ==
