/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = new Set(nums);
    nums.length = 0;
    for(let ind of res){
        console.log(ind);
        nums.push(ind);
    }
    // nums.length = 0;
    // nums = Array.from(res);
    return nums.length;
};