/**
 * Initialize your data structure here.
 * @param {number} size
 * 
 * just keep track of the three numbers for the average
 * use shift() to get rid of the number you dont, and also subtract it
 */


var MovingAverage = function(size) {
    this.size = size
    this.list = []
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.list.push(val)
    
    if (this.list.length > this.size) {
        this.sum -= this.list.shift()
    }
    
    this.sum += val
    return this.sum/this.list.length
};