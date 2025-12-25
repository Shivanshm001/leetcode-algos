function searchInsert(nums: number[], num: number): number {
    let left, right, mid;
    left = 0,
    right = nums.length - 1;

    while(left <= right){
        mid = left + Math.floor((right - left) / 2);
        console.log(mid)
        if(num === nums[mid]){
            return mid;
        }
        if(num < nums[mid]!){
            right = mid - 1;
        }
        else{
            console.log({mid})
            left = mid + 1;
        }
    }
    console.log({left})
    return left;
};

console.log(searchInsert([1,3,5,6], 2))