const { bubbleSort } = require("./01BubbleSort");
const { insertionSort } = require("./02InsertionSort");
const { mergeSort } = require("./03MergeSort");
const { quickSortFromStart, quickSortFromEnd } = require("./04QuickSort");
const { selectionSort } = require("./05SelectionSort");

console.log(bubbleSort([5, 3, 8, 2, 1])); // Expected output: [1, 2, 3, 5, 8]

console.log(insertionSort([5, 3, 8, 2, 1])); // Expected output: [1, 2, 3, 5, 8]
console.log(insertionSort([9, 4, 7, 1, 6])); // Expected output: [1, 4, 6, 7, 9]
console.log(insertionSort([2, 5, 1, 3, 4])); // Expected output: [1, 2, 3, 4, 5]

console.log(mergeSort([5, 3, 8, 2, 1])); // Expected output: [1, 2, 3, 5, 8]
console.log(mergeSort([9, 4, 7, 1, 6])); // Expected output: [1, 4, 6, 7, 9]
console.log(mergeSort([2, 5, 1, 3, 4])); // Expected output: [1, 2, 3, 4, 5]

console.log(quickSortFromStart([5, 3, 8, 2, 1])); // Expected output: [1, 2, 3, 5, 8]
console.log(quickSortFromStart([9, 4, 7, 1, 6])); // Expected output: [1, 4, 6, 7, 9]
console.log(quickSortFromStart([2, 5, 1, 3, 4])); // Expected output: [1, 2, 3, 4, 5]
console.log(quickSortFromEnd([5, 3, 8, 2, 1])); // Expected output: [1, 2, 3, 5, 8]
console.log(quickSortFromEnd([9, 4, 7, 1, 6])); // Expected output: [1, 4, 6, 7, 9]
console.log(quickSortFromEnd([2, 5, 1, 3, 4])); // Expected output: [1, 2, 3, 4, 5]

console.log(selectionSort([5, 3, 8, 2, 1])); // Expected output: [1, 2, 3, 5, 8]
console.log(selectionSort([9, 4, 7, 1, 6])); // Expected output: [1, 4, 6, 7, 9]
console.log(selectionSort([2, 5, 1, 3, 4])); // Expected output: [1, 2, 3, 4, 5]
