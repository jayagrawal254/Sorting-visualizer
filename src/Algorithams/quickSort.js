const animations = [];
export const quickSort = (array) => {
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1);
    console.log(array)
    return [animations, array];
}

function quickSortHelper(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSortHelper(arr, low, pi - 1);
        quickSortHelper(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            i++; // increment index of smaller element
            swap(arr, i, j);
        }
        if (i >= 0) {
            animations.push([i, j])
            animations.push([i, arr[i]])
            animations.push([j, arr[j]])
            animations.push([i, j])
        }
    }
    swap(arr, i + 1, high)
    animations.push([i + 1, high])
    animations.push([i + 1, arr[i + 1]])
    animations.push([high, arr[high]])
    animations.push([i + 1, high])
    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}