/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * https://leetcode.cn/problems/reverse-string/submissions/
 */
 var reverseString = function(s) {
    let left = 0,
        right = s.length - 1
    while(left <= right) {
        [s[left], s[right]] = [s[right], s[left]]
        right--
        left++
    }
};
// @lc code=end

