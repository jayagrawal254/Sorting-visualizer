const animation = [];
export const mergeSort = (array) => {
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
    return [animation, array];
}
const mergeSortHelper = (mainArray, startIdx, endIdx, auxiliaryArray) => {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}

const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animation.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animation.push([k, auxiliaryArray[i]])
            animation.push([i, j]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animation.push([k, auxiliaryArray[j]])
            animation.push([i, j]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animation.push([i, i])
        animation.push([k, auxiliaryArray[i]])
        animation.push([i, i])
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animation.push([j, j])
        animation.push([k, auxiliaryArray[j]])
        animation.push([j, j])
        mainArray[k++] = auxiliaryArray[j++];
    }
}