/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = nums.length - 1;
    if(nums.length <= 2) return nums.length;
    while(i > 0){
        if(nums[i] === nums[i - 1] && nums[i - 1] === nums[i-2]){
            nums.splice(i,1);
        }
        i--;
    }
    return nums.length;
};