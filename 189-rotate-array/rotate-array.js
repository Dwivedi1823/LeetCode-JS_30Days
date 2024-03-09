/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function rev(arr, start, end) {
  while (start < end - 1) {
    [arr[start], arr[end - 1]] = [arr[end - 1], arr[start]];
    start++;
    end--;
  }
}
var rotate = function(nums, k) {
    n = nums.length;
    k = k%n;
    // rev(nums, 0, n-k);
    // console.log(nums);
    // rev(nums, n-k,n);
    // console.log(nums);
    // rev(nums, 0, n);
    for(let i = 0; i < Math.floor((n-k)/2); ++i){
        [nums[i], nums[n-k-i-1]] = [nums[n-k-i-1], nums[i]];
    }
    for(let i = n-k, j = 1; j <= Math.floor(k/2); ++i, ++j){
        [nums[i], nums[n-j]] = [nums[n-j], nums[i]];
    }

    for(let i = 0; i < Math.floor(n/2); ++i){
        [nums[i], nums[n-i-1]] = [nums[n-i-1], nums[i]]
    }
    console.log(nums);
};