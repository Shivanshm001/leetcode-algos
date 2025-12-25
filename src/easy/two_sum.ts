function twoSum(nums: number[], target: number) {
    let map: Record<number,number> = {};
    for(let i = 0; i < nums.length; i++){
        const num: number = nums[i]!;
        const diff: number = target - num;

        if(map[diff] !== undefined){
            return [map[diff],i];
        }
        map[num] = i;
    }
}

console.log(twoSum([1,2,3,4],6))