
function customSort(arr, order) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (
                (order === "asc"  && arr[j] > arr[j + 1]) ||
                (order === "desc" && arr[j] < arr[j + 1])
            ) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }
    return arr;
}
const numbers = [5, 2, 9, 1, 7];
customSort(numbers, "asc");
console.log(numbers);
customSort(numbers, "desc");
console.log(numbers);
