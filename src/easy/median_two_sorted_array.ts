// const isEven = (n: number) => n % 2 === 0;

// function medianOfTwoSortedArray(arr1: number[], arr2: number[]): number {
//     let median = 0;
//     let sortedArr = arr1.concat(arr2).sort((a,b) => a - b);
//     let len = sortedArr.length;
    
//     if(isEven(len)){
//         console.log(len)
//         let i1 = Math.floor(len/2) - 1;
//         let i2 = (i1+1);
//         console.log(sortedArr[i1], sortedArr[i2])
//         median = (sortedArr[i1]! + sortedArr[i2]!) / 2 
//     } else{
//         let index = len / 2;
//         median = sortedArr[index]!
//     }
//     return median
// }

// Works but premetive

// Skipping because category HARD , 23.12.2025
function findMedian(nums1: number[], nums2: number[]): number {
    let median = 0
    if(nums2.length > nums1.length){
        let temp: number[];
        temp = nums1;
        nums1 = nums2;
        nums2 = nums1;
    };

    let totalLen = nums1.length + nums2.length;
    let half = totalLen / 2;
    let low = 0;
    let high = nums1.length;
    let i = 0,j = 0;
    while(low <= high){
        i = (low + high) / 2;

        low++;
    }
    return median;
}