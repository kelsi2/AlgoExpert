// My Solution

// O(n) time && O(1) space
function isValidSubsequence(array, sequence) {
  let sequencePositon = 0
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequencePositon]) {
      sequencePositon++
    } 
  }
    return sequencePositon === sequence.length
}

// Video Solutions

// O(n) time && O(1) space
function isValidSubsequence(array, sequence) {
  let arrIndex = 0
  let seqIndex = 0

  while (arrIndex < array.length && seqIndex < sequence.length) {
    if (array[arrIndex] === sequence[seqIndex]) {
      seqIndex++
    }
    arrIndex++
  }
  return seqIndex === sequence.length
}

// O(n) time && O(1) space
function isValidSubsequence(array, sequence) {
  let seqIndex = 0

  for (let value of array) {
    if (seqIndex === sequence.length) {
      break
    }
    
    if (sequence[seqIndex] === value) {
      seqIndex++
    }
  }
  return seqIndex === sequence.length
}