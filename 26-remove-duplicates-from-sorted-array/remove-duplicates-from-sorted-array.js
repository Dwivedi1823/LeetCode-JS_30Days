/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let res = new Set(nums);
    // nums.length = 0;
    // for(let ind of res){
    //     console.log(ind);
    //     nums.push(ind);
    // }
    // nums.length = 0;
    // nums = Array.from(res);
    let i = nums.length - 1, j;
    while(i > 0){
        if(nums[i] === nums[i-1]){ nums.splice(i, 1);}
        i--;
    }
    return nums.length;
};