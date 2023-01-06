function binarySearch(array, left, right, x){
    if (right >= left){
        let mid = left + Math.floor((right - left) / 2);

        if(array[mid] == x)
            return mid;
        
        if(arr[mid] > x)
            return binarySearch(array, left, mid - left, x);

        return binarySearch(array, mid + 1, right, x);
    }

    // 찾지 못했다면 -1 반환
    return -1;
}

let arr = [1,2,3,4,5,6];
let x = 5;

let result = binarySearch(arr, 0, arr.length - 1, x);

(result == -1) ? console.log("찾는 요소가 없습니다.") : console.log(`찾는 요소는 ${result}번 인덱스에 있습니다.`);
