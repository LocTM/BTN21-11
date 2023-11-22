// BT1
// let arr1 = [1, 2, 3, 5, 7, 0];
// let arr2 = [2, 3, 5, 7, 10];
//
// function reverseArr(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }
//
// let reversedArr1 = reverseArr(arr1);
// console.log(reversedArr1);
//
// let reversedArr2 = reverseArr(arr2);
// console.log(reversedArr2);

// BT2
let arr1 = ["a", "b", "c", "d", "a", "c", "a"];
let char1 = "a";
function inArr(arr, char) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (char === arr[i]) {
            count++;
        }
    }
    if (count !== 0)
        return count;
    return -1;
}
console.log(inArr(arr1, char1));

