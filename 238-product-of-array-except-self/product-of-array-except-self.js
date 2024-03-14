/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function product(arr, ind){
    let ans = 1;
    for(let i = 0; i < arr.length; ++i){
        if(i === ind) continue;
        ans *= arr[i];
    }
    return ans;
 }
var productExceptSelf = function(nums) {
    let res = [];
    let left = right = 1;
    // let proAll = product(nums, -1);
    // for(let i = 0; i < nums.length; ++i){
    //     answer[i] = product(nums, i);
    // }
    // for(let i = 0; i < nums.length; ++i){
    //     ifif(nums[i] === 0)
    // }/
    for(let i = 0; i < nums.length; ++i){
        res[i] = left;
        left *= nums[i];
    }
    for(let i = nums.length - 1; i >= 0; --i){
        res[i] = right*res[i];
        right *= nums[i];
    }

    return res;
};