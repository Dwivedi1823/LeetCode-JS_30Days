/**
 * @param {number[]} prices
 * @return {number}
 */
// function calProfit(list){
//     let res = 0; 
//     for(let i = 1; i < list.length; ++i){
//         res = Math.max(res, list[i]-list[0]);
//     }
//     return res;
// }

var maxProfit = function(prices) {
    let res = 0;
    // for(let i = 0; i < prices.length - 1; ++i){
    //     let curr = prices[i];
    //     let temp = Math.max(...(prices.slice(i+1)));

    //     if(temp- curr > res) res = temp - curr;
    // }

    let buy = prices[0];
    for(let i = 1; i < prices.length; ++i){
        if(prices[i] < buy) buy = prices[i];
        else if(prices[i] - buy > res) res = prices[i] - buy;
    }
    return res > 0 ? res : 0;
};