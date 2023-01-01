function countingSort(arr){
    const n = arr.length;
    const output = Array.from({length: n}, (_, i) => 0);
    const count = Array.from({length: 256}, (_, i) => 0);
 
    for (let i = 0; i < n; ++i)
        ++count[arr[i].charCodeAt(0)];

    for (let i = 1; i <= 255; ++i)
        count[i] += count[i - 1];

    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
        --count[arr[i].charCodeAt(0)];
    }
 
    for (let i = 0; i < n; ++i)
        arr[i] = output[i];
     return arr;
}
 
let arr = [ 'h', 'e', 'l', 'l', 'o', 'w', 'o',
                   'r', 'l', 'd', 'a', 'b', 'c' ];
 
arr = countingSort(arr);
console.log("Sorted character array is ");
for (var i = 0; i < arr.length; ++i)
    console.log(arr[i]);
