/*
    Author: Shourya Ranka
    Objective: Sort array of values / objects effeciently.
    Method used is Merge Sort. 
    Time Complexity : O(nlogn)
*/

const mergeArrays = (array1, array2, key) => {
    let i = 0, j = 0, results = [];
    while (i < array1.length && j < array2.length) {
        if (key) {
            if (array1[i][key] < array2[j][key]) {
                results.push(array1[i++]);
            } else {
                results.push(array2[j++]);
            }
        }
        else {
            if (array1[i] < array2[j]) {
                results.push(array1[i++]);
            } else {
                results.push(array2[j++]);
            }
        }
    }
    return results.concat(array1.slice(i), array2.slice(j));
}

const sortItems = (arrayToSort, keyName) => {
    if (!(arrayToSort instanceof Array)) return null; // validate input
    if (arrayToSort.length < 2) return arrayToSort; // return list as is if sorting not required
    let listBreakPoint = Math.floor(arrayToSort.length / 2),
        subArray1 = arrayToSort.slice(0, listBreakPoint),
        subArray2 = arrayToSort.slice(listBreakPoint, arrayToSort.length);
    return mergeArrays(sortItems(subArray1, keyName), sortItems(subArray2, keyName), keyName);
}

// Test1: for invalid input
console.log(sortItems("abc"));

// Test1: for inputs that do not require sorting
console.log(sortItems([]));
console.log(sortItems([{ testValue: 4 }], "testValue"));

// Test1: for inputs that do not require sorting
console.log(sortItems([4, 2, 10]));
console.log(sortItems([{ testValue: 4 }, { testValue: 2 }, { testValue: 10 }], "testValue"));