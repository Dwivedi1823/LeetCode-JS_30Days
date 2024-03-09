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
    rev(nums, 0, n-k);
    console.log(nums);
    rev(nums, n-k,n);
    console.log(nums);
    rev(nums, 0, n);

};