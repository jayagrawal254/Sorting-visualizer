export const bubbleSort = (array) => {
    const arr = array.slice();
    const animation = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // animation.push([i,j]);
            animation.push([j, j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            animation.push([j, arr[j]]);
            animation.push([j + 1, arr[j + 1]]);
            animation.push([j, j + 1]);
        }
    }
    return [animation, arr];
}