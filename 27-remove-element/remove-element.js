/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0, j = nums.length;
    let res = 0;
    // while(i < j){
    //     if(nums[i] === val && nums[j] === val){
    //         j--;
    //         [nums[i], nums[j]] = [nums[j], nums[i]];
    //         res++;
    //     }
    //     else if(nums[i] === val && nums[j] !== val){
    //         [nums[i], nums[j]] = [nums[j], nums[i]];
    //         res++;
    //     }
    //     i++;
    //     j--;
    // }
    let aux = [];
    for(let p = 0; p < j; ++p){
        if(nums[p] === val){
            res++;
            continue;
        }
        else{aux.push(nums[p]);}
    }

    for(let w = 0; w < aux.length; ++w){
        nums[w] = aux[w];
    }
    console.log(res);
    return j - res;
};