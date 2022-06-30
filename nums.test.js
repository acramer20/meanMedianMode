const {
    findMean,
    findMedian,
    findMode,
  } = require("./nums");

describe("#findMedian", function(){
  it("finds the median of an even set", function(){ 
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
  })
  it("finds the median of an odd set", function () { 
    expect(findMedian([1, -1, 4])).toEqual(1)
  })
})

describe("#findMode", () => {
    it("finds the mode of a set", () => {
        expect(findMode([1,2,1,3,1,2,4])).toEqual(1)
    })
})

describe("#findMean", () => {
    it("finds the mean of an array", () => {
        expect(findMean([1,2,3,4,5])).toEqual(3)
    })
    it("finds the mean of an empty array", () => {
        expect(findMean([])).toEqual(0)
    })
})