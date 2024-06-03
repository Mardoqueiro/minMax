function findMinMax() {
    console.log("Original array:", [50, 60, 20, 10, 40, 5]);

    let Arr = [50, 60, 20, 10, 40, 5];

    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
    
    console.log("Minimum element is:", minValue);
    console.log("Maximum Element is:", maxValue);
}

findMinMax()
