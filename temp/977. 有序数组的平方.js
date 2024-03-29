/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 */
 var sortedSquares = function(nums) {
    let n = nums.length
    let arr = new Array(n),
        left = 0,
        right = n - 1,
        k = right
    while(left <= right) {
        let l = nums[left] * nums[left],
            r = nums[right] * nums[right]
        if(l < r) {
            arr[k] = r
            right--
        } else {
            arr[k] = l
            left++
        }
        k--
    }
    return arr
};
// @lc code=end

