// Bubble SORT.

// define the function takes the parameter as array.
// define the variable.
// for loop iterate through each element in the array.
// for loop to control the number of comparisons.
// if condition to check the biggest number.
// true, switch the number.
// return the array.



function BubbleSort(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let array = [5, 1, 9, 4, 3, 7];
console.log(BubbleSort(array));
