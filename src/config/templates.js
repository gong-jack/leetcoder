const TEMPLATES = [
  {
    name: "1. Two Sum",
    url: "https://leetcode.com/problems/two-sum",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/two-sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    
};
`,
  },
  {
    name: "21. Merge Two Sorted Lists",
    url: "https://leetcode.com/problems/merge-two-sorted-lists",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/merge-two-sorted-lists
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    
};
`,
  },
  {
    name: "31. Next Permutation",
    url: "https://leetcode.com/problems/next-permutation",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/next-permutation
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    
};
`,
  },
  {
    name: "32. Longest Valid Parentheses",
    url: "https://leetcode.com/problems/longest-valid-parentheses",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-valid-parentheses
 *
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
    
};
`,
  },
  {
    name: "179. Largest Number",
    url: "https://leetcode.com/problems/largest-number",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/largest-number
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
    
};
`,
  },
  {
    name: "7. Reverse Integer",
    url: "https://leetcode.com/problems/reverse-integer",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/reverse-integer
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    
};
`,
  },
  {
    name: "41. First Missing Positive",
    url: "https://leetcode.com/problems/first-missing-positive",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
    
};
`,
  },
  {
    name: "221. Maximal Square",
    url: "https://leetcode.com/problems/maximal-square",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/maximal-square
 *
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
    
};
`,
  },
  {
    name: "73. Set Matrix Zeroes",
    url: "https://leetcode.com/problems/set-matrix-zeroes",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/set-matrix-zeroes
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
    
};
`,
  },
  {
    name: "632. Smallest Range Covering Elements from K Lists",
    url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
const smallestRange = function(nums) {
    
};
`,
  },
  {
    name: "108. Convert Sorted Array to Binary Search Tree",
    url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {

};
`,
  },
  {
    name: "101. Symmetric Tree",
    url: "https://leetcode.com/problems/symmetric-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/symmetric-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
    
};
`,
  },
  {
    name: "74. Search a 2D Matrix",
    url: "https://leetcode.com/problems/search-a-2d-matrix",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/search-a-2d-matrix
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    
};
`,
  },
  {
    name: "104. Maximum Depth of Binary Tree",
    url: "https://leetcode.com/problems/maximum-depth-of-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/maximum-depth-of-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {

};
`,
  },
  {
    name: "105. Construct Binary Tree from Preorder and Inorder Traversal",
    url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    
};
`,
  },
  {
    name: "416. Partition Equal Subset Sum",
    url: "https://leetcode.com/problems/partition-equal-subset-sum",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/partition-equal-subset-sum
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function(nums) {

};
`,
  },
  {
    name: "206. Reverse Linked List",
    url: "https://leetcode.com/problems/reverse-linked-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/reverse-linked-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    
};
`,
  },
  {
    name: "236. Lowest Common Ancestor of a Binary Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    
};
`,
  },
  {
    name: "62. Unique Paths",
    url: "https://leetcode.com/problems/unique-paths",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/unique-paths
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

};
`,
  },
  {
    name: "121. Best Time to Buy and Sell Stock",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    
};
`,
  },
  {
    name: "33. Search in Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/search-in-rotated-sorted-array
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    
};
`,
  },
  {
    name: "9. Palindrome Number",
    url: "https://leetcode.com/problems/palindrome-number",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/palindrome-number
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    
};
`,
  },
  {
    name: "37. Sudoku Solver",
    url: "https://leetcode.com/problems/sudoku-solver",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/sudoku-solver
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
    
};
`,
  },
  {
    name: "48. Rotate Image",
    url: "https://leetcode.com/problems/rotate-image",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/rotate-image
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
    
};
`,
  },
  {
    name: "110. Balanced Binary Tree",
    url: "https://leetcode.com/problems/balanced-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/balanced-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
    
};
`,
  },
  {
    name: "621. Task Scheduler",
    url: "https://leetcode.com/problems/task-scheduler",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/task-scheduler
 *
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
    
};
`,
  },
  {
    name: "67. Add Binary",
    url: "https://leetcode.com/problems/add-binary",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/add-binary
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    
};
`,
  },
  {
    name: "103. Binary Tree Zigzag Level Order Traversal",
    url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
    
};
`,
  },
  {
    name: "169. Majority Element",
    url: "https://leetcode.com/problems/majority-element",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/majority-element
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    
};
`,
  },
  {
    name: "217. Contains Duplicate",
    url: "https://leetcode.com/problems/contains-duplicate",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/contains-duplicate
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    
};
`,
  },
  {
    name: "3. Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-substring-without-repeating-characters
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    
};
`,
  },
  {
    name: "212. Word Search II",
    url: "https://leetcode.com/problems/word-search-ii",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/word-search-ii
 *
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(board, words) {
    
};
`,
  },
  {
    name: "417. Pacific Atlantic Water Flow",
    url: "https://leetcode.com/problems/pacific-atlantic-water-flow",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/pacific-atlantic-water-flow
 *
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function(heights) {
    
};
`,
  },
  {
    name: "198. House Robber",
    url: "https://leetcode.com/problems/house-robber",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/house-robber
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {

};
`,
  },
  {
    name: "139. Word Break",
    url: "https://leetcode.com/problems/word-break",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/word-break
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

};
`,
  },
  {
    name: "268. Missing Number",
    url: "https://leetcode.com/problems/missing-number",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/missing-number
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {

};
`,
  },
  {
    name: "19. Remove Nth Node From End of List",
    url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {

};
`,
  },
  {
    name: "5. Longest Palindromic Substring",
    url: "https://leetcode.com/problems/longest-palindromic-substring",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-palindromic-substring
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    
};
`,
  },
  {
    name: "721. Accounts Merge",
    url: "https://leetcode.com/problems/accounts-merge",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/accounts-merge
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function(accounts) {

};
`,
  },
  {
    name: "155. Min Stack",
    url: "https://leetcode.com/problems/min-stack",
    code: `const MinStack = function() {
    
};
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
};
/**
 * leetcode problem link: https://leetcode.com/problems/min-stack
 *
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};
/** 
 * Your MinStack object will be instantiated and called as such:
 * const obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * const param_3 = obj.top()
 * const param_4 = obj.getMin()
 */
`,
  },
  {
    name: "16. 3Sum Closest",
    url: "https://leetcode.com/problems/3sum-closest",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/3sum-closest
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    
};
`,
  },
  {
    name: "230. Kth Smallest Element in a BST",
    url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/kth-smallest-element-in-a-bst
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {

};
`,
  },
  {
    name: "227. Basic Calculator II",
    url: "https://leetcode.com/problems/basic-calculator-ii",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/basic-calculator-ii
 *
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
    
};
`,
  },
  {
    name: "658. Find K Closest Elements",
    url: "https://leetcode.com/problems/find-k-closest-elements",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/find-k-closest-elements
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function(arr, k, x) {
    
};
`,
  },
  {
    name: "199. Binary Tree Right Side View",
    url: "https://leetcode.com/problems/binary-tree-right-side-view",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/binary-tree-right-side-view
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function(root) {
    
};
`,
  },
  {
    name: "22. Generate Parentheses",
    url: "https://leetcode.com/problems/generate-parentheses",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/generate-parentheses
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {

};
`,
  },
  {
    name: "98. Validate Binary Search Tree",
    url: "https://leetcode.com/problems/validate-binary-search-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/validate-binary-search-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
    
};
`,
  },
  {
    name: "704. Binary Search",
    url: "https://leetcode.com/problems/binary-search",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/binary-search
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    
};
`,
  },
  {
    name: "226. Invert Binary Tree",
    url: "https://leetcode.com/problems/invert-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/invert-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
    
};
`,
  },
  {
    name: "295. Find Median from Data Stream",
    url: "https://leetcode.com/problems/find-median-from-data-stream",
    code: `const MedianFinder = function() {
    
};
/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
};
/**
 * leetcode problem link: https://leetcode.com/problems/find-median-from-data-stream
 *
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
};
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * const obj = new MedianFinder()
 * obj.addNum(num)
 * const param_2 = obj.findMedian()
 */
`,
  },
  {
    name: "328. Odd Even Linked List",
    url: "https://leetcode.com/problems/odd-even-linked-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/odd-even-linked-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function(head) {
    
};
`,
  },
  {
    name: "25. Reverse Nodes in k-Group",
    url: "https://leetcode.com/problems/reverse-nodes-in-k-group",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/reverse-nodes-in-k-group
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
    
};
`,
  },
  {
    name: "11. Container With Most Water",
    url: "https://leetcode.com/problems/container-with-most-water",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    
};
`,
  },
  {
    name: "208. Implement Trie (Prefix Tree)",
    url: "https://leetcode.com/problems/implement-trie-prefix-tree",
    code: ` * leetcode problem link: https://leetcode.com/problems/implement-trie-prefix-tree
 *
const Trie = function() {
    
};
/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};
/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};
/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};
/** 
 * Your Trie object will be instantiated and called as such:
 * const obj = new Trie()
 * obj.insert(word)
 * const param_2 = obj.search(word)
 * const param_3 = obj.startsWith(prefix)
 */
`,
  },
  {
    name: "338. Counting Bits",
    url: "https://leetcode.com/problems/counting-bits",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/counting-bits
 *
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    
};
`,
  },
  {
    name: "152. Maximum Product Subarray",
    url: "https://leetcode.com/problems/maximum-product-subarray",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/maximum-product-subarray
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    
};
`,
  },
  {
    name: "78. Subsets",
    url: "https://leetcode.com/problems/subsets",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/subsets
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    
};
`,
  },
  {
    name: "543. Diameter of Binary Tree",
    url: "https://leetcode.com/problems/diameter-of-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/diameter-of-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
    
};
`,
  },
  {
    name: "36. Valid Sudoku",
    url: "https://leetcode.com/problems/valid-sudoku",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/valid-sudoku
 *
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    
};
`,
  },
  {
    name: "50. Pow(x, n)",
    url: "https://leetcode.com/problems/powx-n",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/powx-n
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
    
};
`,
  },
  {
    name: "815. Bus Routes",
    url: "https://leetcode.com/problems/bus-routes",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/bus-routes
 *
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
const numBusesToDestination = function(routes, source, target) {
    
};
`,
  },
  {
    name: "49. Group Anagrams",
    url: "https://leetcode.com/problems/group-anagrams",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/group-anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {

};
`,
  },
  {
    name: "242. Valid Anagram",
    url: "https://leetcode.com/problems/valid-anagram",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/valid-anagram
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    
};
`,
  },
  {
    name: "383. Ransom Note",
    url: "https://leetcode.com/problems/ransom-note",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/ransom-note
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    
};
`,
  },
  {
    name: "525. Contiguous Array",
    url: "https://leetcode.com/problems/contiguous-array",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/contiguous-array
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function(nums) {
    
};
`,
  },
  {
    name: "235. Lowest Common Ancestor of a Binary Search Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    
};
`,
  },
  {
    name: "380. Insert Delete GetRandom O(1)",
    url: "https://leetcode.com/problems/insert-delete-getrandom-o1",
    code: `const RandomizedSet = function() {
    
};
/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    
};
/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
};
/**
 * leetcode problem link: https://leetcode.com/problems/insert-delete-getrandom-o1
 *
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
};
/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * const obj = new RandomizedSet()
 * const param_1 = obj.insert(val)
 * const param_2 = obj.remove(val)
 * const param_3 = obj.getRandom()
 */
`,
  },
  {
    name: "24. Swap Nodes in Pairs",
    url: "https://leetcode.com/problems/swap-nodes-in-pairs",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/swap-nodes-in-pairs
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    
};
`,
  },
  {
    name: "287. Find the Duplicate Number",
    url: "https://leetcode.com/problems/find-the-duplicate-number",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {

};
`,
  },
  {
    name: "200. Number of Islands",
    url: "https://leetcode.com/problems/number-of-islands",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    
};
`,
  },
  {
    name: "146. LRU Cache",
    url: "https://leetcode.com/problems/lru-cache",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/lru-cache
 *
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
    
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
};
/** 
 * Your LRUCache object will be instantiated and called as such:
 * const obj = new LRUCache(capacity)
 * const param_1 = obj.get(key)
 * obj.put(key,value)
 */
`,
  },
  {
    name: "336. Palindrome Pairs",
    url: "https://leetcode.com/problems/palindrome-pairs",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/palindrome-pairs
 *
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = function(words) {
    
};
`,
  },
  {
    name: "211. Design Add and Search Words Data Structure",
    url: "https://leetcode.com/problems/design-add-and-search-words-data-structure",
    code: `const WordDictionary = function() {

};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {

};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

};

/**
 * leetcode problem link: https://leetcode.com/problems/design-add-and-search-words-data-structure
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
`,
  },
  {
    name: "17. Letter Combinations of a Phone Number",
    url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/letter-combinations-of-a-phone-number
 *
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    
};
`,
  },
  {
    name: "239. Sliding Window Maximum",
    url: "https://leetcode.com/problems/sliding-window-maximum",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/sliding-window-maximum
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
    
};
`,
  },
  {
    name: "15. 3Sum",
    url: "https://leetcode.com/problems/3sum",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/3sum
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    
};
`,
  },
  {
    name: "76. Minimum Window Substring",
    url: "https://leetcode.com/problems/minimum-window-substring",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/minimum-window-substring
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
    
};
`,
  },
  {
    name: "143. Reorder List",
    url: "https://leetcode.com/problems/reorder-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/reorder-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
    
};
`,
  },
  {
    name: "437. Path Sum III",
    url: "https://leetcode.com/problems/path-sum-iii",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/path-sum-iii
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function(root, targetSum) {
    
};
`,
  },
  {
    name: "100. Same Tree",
    url: "https://leetcode.com/problems/same-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/same-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    
};
`,
  },
  {
    name: "224. Basic Calculator",
    url: "https://leetcode.com/problems/basic-calculator",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/basic-calculator
 *
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
    
};
`,
  },
  {
    name: "283. Move Zeroes",
    url: "https://leetcode.com/problems/move-zeroes",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/move-zeroes
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    
};
`,
  },
  {
    name: "14. Longest Common Prefix",
    url: "https://leetcode.com/problems/longest-common-prefix",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-common-prefix
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    
};
`,
  },
  {
    name: "973. K Closest Points to Origin",
    url: "https://leetcode.com/problems/k-closest-points-to-origin",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/k-closest-points-to-origin
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    
};
`,
  },
  {
    name: "528. Random Pick with Weight",
    url: "https://leetcode.com/problems/random-pick-with-weight",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/random-pick-with-weight
 *
 * @param {number[]} w
 */
const Solution = function(w) {
    
};
/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
};
/** 
 * Your Solution object will be instantiated and called as such:
 * const obj = new Solution(w)
 * const param_1 = obj.pickIndex()
 */
`,
  },
  {
    name: "876. Middle of the Linked List",
    url: "https://leetcode.com/problems/middle-of-the-linked-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/middle-of-the-linked-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {

};
`,
  },
  {
    name: "57. Insert Interval",
    url: "https://leetcode.com/problems/insert-interval",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/insert-interval
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
    
};
`,
  },
  {
    name: "234. Palindrome Linked List",
    url: "https://leetcode.com/problems/palindrome-linked-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/palindrome-linked-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {

};
`,
  },
  {
    name: "134. Gas Station",
    url: "https://leetcode.com/problems/gas-station",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/gas-station
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
    
};
`,
  },
  {
    name: "91. Decode Ways",
    url: "https://leetcode.com/problems/decode-ways",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/decode-ways
 *
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {

};
`,
  },
  {
    name: "55. Jump Game",
    url: "https://leetcode.com/problems/jump-game",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/jump-game
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {

};
`,
  },
  {
    name: "51. N-Queens",
    url: "https://leetcode.com/problems/n-queens",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/n-queens
 *
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
    
};
`,
  },
  {
    name: "844. Backspace String Compare",
    url: "https://leetcode.com/problems/backspace-string-compare",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/backspace-string-compare
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
    
};
`,
  },
  {
    name: "232. Implement Queue using Stacks",
    url: "https://leetcode.com/problems/implement-queue-using-stacks",
    code: `const MyQueue = function() {
    
};
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
};
/**
 * leetcode problem link: https://leetcode.com/problems/implement-queue-using-stacks
 *
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
};
/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
};
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
};
/** 
 * Your MyQueue object will be instantiated and called as such:
 * const obj = new MyQueue()
 * obj.push(x)
 * const param_2 = obj.pop()
 * const param_3 = obj.peek()
 * const param_4 = obj.empty()
 */
`,
  },
  {
    name: "994. Rotting Oranges",
    url: "https://leetcode.com/problems/rotting-oranges",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/rotting-oranges
 *
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
    
};
`,
  },
  {
    name: "8. String to Integer (atoi)",
    url: "https://leetcode.com/problems/string-to-integer-atoi",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/string-to-integer-atoi
 *
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    
};
`,
  },
  {
    name: "75. Sort Colors",
    url: "https://leetcode.com/problems/sort-colors",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/sort-colors
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {

};
`,
  },
  {
    name: "102. Binary Tree Level Order Traversal",
    url: "https://leetcode.com/problems/binary-tree-level-order-traversal",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/binary-tree-level-order-traversal
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    
};
`,
  },
  {
    name: "2. Add Two Numbers",
    url: "https://leetcode.com/problems/add-two-numbers",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/add-two-numbers
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {

};
`,
  },
  {
    name: "424. Longest Repeating Character Replacement",
    url: "https://leetcode.com/problems/longest-repeating-character-replacement",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-repeating-character-replacement
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {

};
`,
  },
  {
    name: "322. Coin Change",
    url: "https://leetcode.com/problems/coin-change",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/coin-change
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    
};
`,
  },
  {
    name: "148. Sort List",
    url: "https://leetcode.com/problems/sort-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/sort-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function(head) {

};
`,
  },
  {
    name: "210. Course Schedule II",
    url: "https://leetcode.com/problems/course-schedule-ii",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/course-schedule-ii
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(numCourses, prerequisites) {
    
};
`,
  },
  {
    name: "215. Kth Largest Element in an Array",
    url: "https://leetcode.com/problems/kth-largest-element-in-an-array",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/kth-largest-element-in-an-array
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
    
};
`,
  },
  {
    name: "46. Permutations",
    url: "https://leetcode.com/problems/permutations",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/permutations
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    
};
`,
  },
  {
    name: "787. Cheapest Flights Within K Stops",
    url: "https://leetcode.com/problems/cheapest-flights-within-k-stops",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/cheapest-flights-within-k-stops
 *
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function(n, flights, src, dst, k) {
    
};
`,
  },
  {
    name: "42. Trapping Rain Water",
    url: "https://leetcode.com/problems/trapping-rain-water",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/trapping-rain-water
 *
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {

};
`,
  },
  {
    name: "56. Merge Intervals",
    url: "https://leetcode.com/problems/merge-intervals",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/merge-intervals
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {

};
`,
  },
  {
    name: "977. Squares of a Sorted Array",
    url: "https://leetcode.com/problems/squares-of-a-sorted-array",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/squares-of-a-sorted-array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    
};
`,
  },
  {
    name: "133. Clone Graph",
    url: "https://leetcode.com/problems/clone-graph",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/clone-graph
 *
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function(node) {
    
};
`,
  },
  {
    name: "61. Rotate List",
    url: "https://leetcode.com/problems/rotate-list",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/rotate-list
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {

};
`,
  },
  {
    name: "278. First Bad Version",
    url: "https://leetcode.com/problems/first-bad-version",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/first-bad-version
 *
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
    };
};
`,
  },
  {
    name: "79. Word Search",
    url: "https://leetcode.com/problems/word-search",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/word-search
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    
};
`,
  },
  {
    name: "13. Roman to Integer",
    url: "https://leetcode.com/problems/roman-to-integer",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/roman-to-integer
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    
};
`,
  },
  {
    name: "733. Flood Fill",
    url: "https://leetcode.com/problems/flood-fill",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/flood-fill
 *
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, color) {
    
};
`,
  },
  {
    name: "1235. Maximum Profit in Job Scheduling",
    url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/maximum-profit-in-job-scheduling
 *
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = function(startTime, endTime, profit) {

};
`,
  },
  {
    name: "409. Longest Palindrome",
    url: "https://leetcode.com/problems/longest-palindrome",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-palindrome
 *
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    
};
`,
  },
  {
    name: "692. Top K Frequent Words",
    url: "https://leetcode.com/problems/top-k-frequent-words",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/top-k-frequent-words
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    
};
`,
  },
  {
    name: "895. Maximum Frequency Stack",
    url: "https://leetcode.com/problems/maximum-frequency-stack",
    code: `const FreqStack = function() {

};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {

};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {

};

/** 
 * leetcode problem link: https://leetcode.com/problems/maximum-frequency-stack
 *
 * Your FreqStack object will be instantiated and called as such:
 * const obj = new FreqStack()
 * obj.push(val)
 * const param_2 = obj.pop()
 */
`,
  },
  {
    name: "435. Non-overlapping Intervals",
    url: "https://leetcode.com/problems/non-overlapping-intervals",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/non-overlapping-intervals
 *
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
    
};
`,
  },
  {
    name: "23. Merge k Sorted Lists",
    url: "https://leetcode.com/problems/merge-k-sorted-lists",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/merge-k-sorted-lists
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    
};
`,
  },
  {
    name: "84. Largest Rectangle in Histogram",
    url: "https://leetcode.com/problems/largest-rectangle-in-histogram",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/largest-rectangle-in-histogram
 *
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
    
};
`,
  },
  {
    name: "128. Longest Consecutive Sequence",
    url: "https://leetcode.com/problems/longest-consecutive-sequence",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-consecutive-sequence
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    
};
`,
  },
  {
    name: "54. Spiral Matrix",
    url: "https://leetcode.com/problems/spiral-matrix",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/spiral-matrix
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {

};
`,
  },
  {
    name: "300. Longest Increasing Subsequence",
    url: "https://leetcode.com/problems/longest-increasing-subsequence",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-increasing-subsequence
 *
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    
};
`,
  },
  {
    name: "739. Daily Temperatures",
    url: "https://leetcode.com/problems/daily-temperatures",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/daily-temperatures
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    
};
`,
  },
  {
    name: "189. Rotate Array",
    url: "https://leetcode.com/problems/rotate-array",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/rotate-array
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    
};
`,
  },
  {
    name: "124. Binary Tree Maximum Path Sum",
    url: "https://leetcode.com/problems/binary-tree-maximum-path-sum",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/binary-tree-maximum-path-sum
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function(root) {
    
};
`,
  },
  {
    name: "136. Single Number",
    url: "https://leetcode.com/problems/single-number",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/single-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    
};
`,
  },
  {
    name: "438. Find All Anagrams in a String",
    url: "https://leetcode.com/problems/find-all-anagrams-in-a-string",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/find-all-anagrams-in-a-string
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    
};
`,
  },
  {
    name: "4. Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/median-of-two-sorted-arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    
};
`,
  },
  {
    name: "113. Path Sum II",
    url: "https://leetcode.com/problems/path-sum-ii",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/path-sum-ii
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function(root, targetSum) {
    
};
`,
  },
  {
    name: "153. Find Minimum in Rotated Sorted Array",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    
};
`,
  },
  {
    name: "20. Valid Parentheses",
    url: "https://leetcode.com/problems/valid-parentheses",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    
};
`,
  },
  {
    name: "238. Product of Array Except Self",
    url: "https://leetcode.com/problems/product-of-array-except-self",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/product-of-array-except-self
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    
};
`,
  },
  {
    name: "310. Minimum Height Trees",
    url: "https://leetcode.com/problems/minimum-height-trees",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/minimum-height-trees
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {

};
`,
  },
  {
    name: "329. Longest Increasing Path in a Matrix",
    url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/longest-increasing-path-in-a-matrix
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function(matrix) {
    
};
`,
  },
  {
    name: "127. Word Ladder",
    url: "https://leetcode.com/problems/word-ladder",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/word-ladder
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function(beginWord, endWord, wordList) {
    
};
`,
  },
  {
    name: "53. Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/maximum-subarray
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    
};
`,
  },
  {
    name: "141. Linked List Cycle",
    url: "https://leetcode.com/problems/linked-list-cycle",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/linked-list-cycle
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    
};
`,
  },
  {
    name: "125. Valid Palindrome",
    url: "https://leetcode.com/problems/valid-palindrome",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/valid-palindrome
 *
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    
};
`,
  },
  {
    name: "735. Asteroid Collision",
    url: "https://leetcode.com/problems/asteroid-collision",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/asteroid-collision
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
    
};
`,
  },
  {
    name: "662. Maximum Width of Binary Tree",
    url: "https://leetcode.com/problems/maximum-width-of-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/maximum-width-of-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = function(root) {
    
};
`,
  },
  {
    name: "150. Evaluate Reverse Polish Notation",
    url: "https://leetcode.com/problems/evaluate-reverse-polish-notation",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/evaluate-reverse-polish-notation
 *
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    
};
`,
  },
  {
    name: "863. All Nodes Distance K in Binary Tree",
    url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const distanceK = function(root, target, k) {
    
};
`,
  },
  {
    name: "70. Climbing Stairs",
    url: "https://leetcode.com/problems/climbing-stairs",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/climbing-stairs
 *
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    
};
`,
  },
  {
    name: "377. Combination Sum IV",
    url: "https://leetcode.com/problems/combination-sum-iv",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/combination-sum-iv
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
    
};
`,
  },
  {
    name: "981. Time Based Key-Value Store",
    url: "https://leetcode.com/problems/time-based-key-value-store",
    code: ` * leetcode problem link: https://leetcode.com/problems/time-based-key-value-store
 *
const TimeMap = function() {
    
};
/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    
};
/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    
};
/** 
 * Your TimeMap object will be instantiated and called as such:
 * const obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * const param_2 = obj.get(key,timestamp)
 */
`,
  },
  {
    name: "207. Course Schedule",
    url: "https://leetcode.com/problems/course-schedule",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/course-schedule
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
    
};
`,
  },
  {
    name: "394. Decode String",
    url: "https://leetcode.com/problems/decode-string",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/decode-string
 *
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    
};
`,
  },
  {
    name: "560. Subarray Sum Equals K",
    url: "https://leetcode.com/problems/subarray-sum-equals-k",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/subarray-sum-equals-k
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {

};
`,
  },
  {
    name: "542. 01 Matrix",
    url: "https://leetcode.com/problems/01-matrix",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/01-matrix
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
    
};
`,
  },
  {
    name: "572. Subtree of Another Tree",
    url: "https://leetcode.com/problems/subtree-of-another-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/subtree-of-another-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(root, subRoot) {
    
};
`,
  },
  {
    name: "190. Reverse Bits",
    url: "https://leetcode.com/problems/reverse-bits",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/reverse-bits
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    
};
`,
  },
  {
    name: "297. Serialize and Deserialize Binary Tree",
    url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/serialize-and-deserialize-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
    
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
`,
  },
  {
    name: "39. Combination Sum",
    url: "https://leetcode.com/problems/combination-sum",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/combination-sum
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {

};
`,
  },
  {
    name: "191. Number of 1 Bits",
    url: "https://leetcode.com/problems/number-of-1-bits",
    code: `/**
 * leetcode problem link: https://leetcode.com/problems/number-of-1-bits
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {

};
`,
  },
  {
    name: "178 · Graph Valid Tree",
    url: "https://www.lintcode.com/problem/178/?utm_source=%5B%27sc-tianchi-sz-21jan%27%5D",
    code: `export class Solution {
      /**
       * leetcode 유료 문제로 lintcode 사이트로 대체했습니다.
       * @param n: An integer
       * @param edges: a list of undirected edges
       * @return: true if it's a valid tree, or false
       */
      validTree(n, edges) {
        // write your code here
      }
    }
    `,
  },
  {
    name: "1730 - Shortest Path to Get Food",
    url: "https://www.lintcode.com/problem/1563/",
    code: `export class Solution {
      /**
       * leetcode 유료 문제로 lintcode 사이트로 대체했습니다.
       * @param targetMap: 
       * @return: 
       */
      shortestPath(targetMap) {
        // Write your code here
      }
    }
    `,
  },
  {
    name: "269. Alien Dictionary",
    url: "https://www.lintcode.com/problem/892/",
    code: `export class Solution {
      /**
       * leetcode 유료 문제로 lintcode 사이트로 대체했습니다.
       * @param words: a list of words
       * @return: a string which is correct order
       */
      alienOrder(words) {
        // Write your code here
      }
    }
    `,
  },
  {
    name: "252. Meeting Rooms",
    url: "https://www.lintcode.com/problem/920/",
    code: `import {
      Interval,
    } from '/opt/node/lib/lintcode/index.js';
    
    /**
     * leetcode 유료 문제로 lintcode 사이트로 대체했습니다.
     * Definition of Interval:
     * class Interval {
     *   constructor(start, end) {
     *     this.start = start;
     *     this.end = end;
     *   }
     * }
     */
    
    export class Solution {
      /**
       * @param intervals: an array of meeting time intervals
       * @return: if a person could attend all meetings
       */
      canAttendMeetings(intervals) {
        // Write your code here
      }
    }
    `,
  },
  {
    name: "253. Meeting Rooms",
    url: "https://www.lintcode.com/problem/919/",
    code: `import {
      Interval,
    } from '/opt/node/lib/lintcode/index.js';
    
    /**
     * leetcode 유료 문제로 lintcode 사이트로 대체했습니다.
     * Definition of Interval:
     * class Interval {
     *   constructor(start, end) {
     *     this.start = start;
     *     this.end = end;
     *   }
     * }
     */
    
    export class Solution {
      /**
       * @param intervals: an array of meeting time intervals
       * @return: the minimum number of conference rooms required
       */
      minMeetingRooms(intervals) {
        // Write your code here
      }
    }
    `,
  },
  {
    name: "759. Employee Free Time",
    url: "https://www.lintcode.com/problem/850/",
    code: `import {
      Interval,
    } from '/opt/node/lib/lintcode/index.js';
    
    /**
     * leetcode 유료 문제로 lintcode 사이트로 대체했습니다.
     * Definition of Interval:
     * class Interval {
     *   constructor(start, end) {
     *     this.start = start;
     *     this.end = end;
     *   }
     * }
     */
    
    export class Solution {
      /**
       * @param schedule: a list schedule of employees
       * @return: Return a list of finite intervals 
       */
      employeeFreeTime(schedule) {
        // Write your code here
      }
    }
    `,
  },
];

export default TEMPLATES;
