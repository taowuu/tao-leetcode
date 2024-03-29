/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */
 var twoSum = function(numbers, target) {
    // 反向双指针
    let left = 0,
        right = numbers.length - 1
    while(left <= right) {
        let sum = numbers[left] + numbers[right]
        if(sum === target) return [left + 1, right + 1]
        else if(sum < target) left++
        else right--
    }
};
// @lc code=end

