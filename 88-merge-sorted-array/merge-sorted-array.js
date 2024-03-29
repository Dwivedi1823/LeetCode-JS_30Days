/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // for(let i = 0; i < n; ++i){
    //     nums1[i + m] = nums2[i];
    // }
    // //nums1.sort((a,b)=>a-b);
    
    let i = m-1, j = n-1;
    let k = m + n - 1;
    while(i >=0 && j >= 0){
        if(nums1[i] > nums2[j]){  nums1[k--] = nums1[i--];}
        else { nums1[k--] = nums2[j--];}
    }
    while(i >= 0){ nums1[k--] = nums1[i--];}
    while(j >= 0){nums1[k--] = nums2[j--];}
};