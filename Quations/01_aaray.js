function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

  
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

     
        start++;
        end--;
    }

    return arr;
}


let arr = [5, 6, 7, 8, 9, 11, 2, 1, 7];
let reversedArr = reverseArray(arr);
console.log(reversedArr);
