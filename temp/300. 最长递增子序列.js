/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/longest-increasing-subsequence/
 */
var lengthOfLIS = function(nums) {
    let n = nums.length
    let dp = new Array(n).fill(1)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};