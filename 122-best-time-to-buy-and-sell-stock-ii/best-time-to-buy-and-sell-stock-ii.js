/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0; 
    let buy = prices[0];
    for(let i = 1; i < prices.length; ++i){
        if(buy > prices[i]) buy = prices[i];
        else if(prices[i]-buy > 0) {
            res += (prices[i] - buy);
            buy = prices[i];
        }
    }
    return res;
};