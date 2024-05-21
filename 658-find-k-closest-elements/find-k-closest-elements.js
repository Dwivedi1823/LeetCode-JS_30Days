/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let pq = [];
    let res = [];
    let n = arr.length;

    for(let i = 0; i < k; ++i){
        pq.push([Math.abs(arr[i] - x), i]);
    }
    for(let i = k; i < n; ++i){
        let diff = Math.abs(arr[i] - x);
        if(diff >= pq[0][0]) continue;
        pq.shift();
        pq.push([diff, i]);
    }

    while(pq.length > 0){
        res.push(arr[pq[0][1]]);
        pq.shift();
    }
    return res;
};