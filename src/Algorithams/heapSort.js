const animation = []
export const heapSort = (array) => {
    heapSortH(array)

    return [animation, array]
}

function heapSortH(array) {
    let size = array.length
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
        heapify(array, size, i)
    for (let i = size - 1; i >= 0; i--) {
        let temp = array[0]
        array[0] = array[i]
        array[i] = temp
        animation.push([0, array[0]])
        animation.push([i, array[i]])
        heapify(array, i, 0)
    }
}

function heapify(array, size, i) {
    let max = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    animation.push([max, left, right])
    // animation.push([max,left,right])
    if (left < size && array[left] > array[max]) {
        max = left;
    }
    if (right < size && array[right] > array[max]) {
        max = right
    }
    let tmp = true;
    if (max !== i) {
        let temp = array[i]
        array[i] = array[max]
        array[max] = temp
        animation.push([max, array[max]])
        animation.push([i, array[i]])
        animation.push([max, left, right])
        tmp = false;
        heapify(array, size, max)
    }
    if (tmp) animation.push([max, left, right])
}