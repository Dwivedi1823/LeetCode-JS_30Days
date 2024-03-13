/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let minJumps = 0;
    let currentMaxReach = 0;
    let lastMaxReach = 0;
    for(let i = 0;i < nums.length - 1; ++i){
        currentMaxReach = Math.max(currentMaxReach, i + nums[i]);

        if(lastMaxReach === i){
            minJumps++;
            lastMaxReach = currentMaxReach;
        }
    }
    return minJumps;
};