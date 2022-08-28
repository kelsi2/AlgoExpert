// My Solution

// O(n^2) time && O(n) space
function twoNumberSum(array, targetSum) {
  const resultArr = []
  const map = new Map()

  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], array[i])
    }
    map.forEach((item) => {
      if (item !== array[i] && item + array[i] === targetSum) {
        resultArr.push(item, array[i])
      }
   })
  }

  return resultArr
}

// Video Solutions

// O(n log n) time && O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)

  let left = 0
  let right = array.length - 1

  while (left < right) {
    let currentSum = array[left] + array[right]

    if (currentSum === targetSum) {
      return [array[left], array[right]]
    } else if (currentSum < targetSum) {
      left += 1
    } else if (currentSum > targetSum) {
      right -= 1
    } 
  }
  return []
}

// O(n) time && O(n) space
function twoNumberSum(array, targetSum) {
  const nums = new Map()

  for (let i = 0; i < array.length; i++) {
    const potentialMatch = targetSum - array[i]
    
    if (nums.has(potentialMatch)) {
      return [potentialMatch, array[i]]
    } else {
      nums.set(array[i], true)
    }
  }
  return []
}