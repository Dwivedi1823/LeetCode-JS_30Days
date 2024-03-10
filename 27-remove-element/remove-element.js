/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0; // i points to the position where the next non-val element should be placed

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]; // copy the non-val element to the correct position
      i++;
    }
  }

  return i; // i represents the number of elements not equal to val
};
