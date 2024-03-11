/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let arr = new Array(5 * (10**4)).fill(0);
    // for(let i = 0; i < nums.length; ++i){
    //     arr[nums[i]] += 1;
    // }
    // let res = 0;
    // for(let i = 0; i < arr.length; ++i){
    //     console.log(i, arr[i])
    //     if(arr[i] > (nums.length/2)){
    //         res = i;
    //         return i;
    //     }
    // }
    // return res;

    let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
};