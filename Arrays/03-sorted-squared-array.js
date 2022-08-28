// My Solution

// O(n log n) [due to sorting] time && O(n) space
function sortedSquaredArray(array) {
  const squaredArr = []

  for (let i = 0; i < array.length; i++) {
    squaredArr.push(array[i] ** 2)
  }

  squaredArr.sort((a, b) => a - b)
  return squaredArr
}

// Video Solutions

// O(n log n) [due to sorting] time && O(n) space
function sortedSquaredArray(array) {
  const sortedSquares = []

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    sortedSquares.push(value * value)
  }

  sortedSquares.sort((a, b) => a - b)
  return sortedSquares
}

// O(n) time && O(n) space
function sortedSquaredArray(array) {
  const squaredArray = new Array(array.length).fill(0)
  let start = 0
  let end = array.length - 1

  for (let i = array.length - 1; i >= 0; i--) {
    let smallerValue = array[start]
    let largerValue = array[end]

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      squaredArray[i] = smallerValue * smallerValue
      start++
    } else {
      squaredArray[i] = largerValue * largerValue
      end--
    }
  }
  
  return squaredArray
}