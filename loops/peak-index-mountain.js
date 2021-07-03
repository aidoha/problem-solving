const peakIndexInMountainArray = (arr) => {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] < arr[i + 1])) {
            index = i;
            break;
        }
    }
    return index
};

peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
