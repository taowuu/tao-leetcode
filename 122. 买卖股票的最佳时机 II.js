/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 */
 var maxProfit = function(prices) {
    // 贪心
    if(prices.length === 1) return 0
    let res = 0
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1]
        }
    }
    return res
};
// @lc code=end

