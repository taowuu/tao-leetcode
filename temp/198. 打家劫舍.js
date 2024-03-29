/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/house-robber/
 */
 var rob = function(nums) {
    if(nums.length === 1) return nums[0]
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    let res = Math.max(dp[0], dp[1])
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
        res = Math.max(dp[i], res)
    }
    return res
};
// @lc code=end

