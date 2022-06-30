/**
 * Building a frequency counter from the array. 
 * @param {Array} arr any array
 */
 function arrOfFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }

  /**
 * Find the element that appears the most. ie: most common. 
 * @param {Array} arr any array
 */
function findMode(arr) {
    let freqCounter = arrOfFrequencyCounter(arr);

    let count = 0;
    let mostCommon;

    for (key in freqCounter){
        if (freqCounter[key] > count) {
            mostCommon = key
            count = freqCounter[key]
        }
    }

    return +mostCommon
}

/**
 * Convert the array of strings into numbers
 * @param {Array} numsAsStrs array of strings
 * @returns {Array|Error} an array or an error object
 */
 function convertAndValidateNumsArray(numsAsStrs) {
    let result = [];
  
    for (let i = 0; i < numsAsStrs.length; i++) {
      let valToNumber = Number(numsAsStrs[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrs[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }

  function findMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
      return acc + cur;
    }) / nums.length
  }
  
  function findMedian(nums){
    // sort and get the middle element
  
    nums.sort((a, b) => a - b);
  
    let middleIndex = Math.floor(nums.length / 2);
    let median;
  
    if (nums.length % 2 === 0) {
      median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
      median = nums[middleIndex];
    }
    return median
  }
  
  module.exports = {
    arrOfFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
  };

