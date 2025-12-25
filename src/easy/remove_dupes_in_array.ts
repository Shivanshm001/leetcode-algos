function removeDuplicates(nums: number[]): number{
    let set = new Set(nums);
    return Array.from(set).length;
};

console.log(removeDuplicates([1,1,2]))