var increasingTriplet = function(nums) {
    
    let count = 1
    let lowest = nums[0]
    let current = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        
        // if nums[i] is greater, add to count, and set new lowest
        if (nums[i] > current) {
            current = nums[i]
            count++
            if (count === 3) return true
        }
        
        // if nums[i] is smaller, restart the count and lowest
        else if (nums[i] < lowest) {
            if (nums[i+1] > nums[i] && nums[i+1] <= current) { // guarantees that count at nums[i+1] will be > 1
                lowest = nums[i]
                current = nums[i]
                count = 1
            }
        }
        
        // if there's a next possible number < current 
        if (nums[i] < current && nums[i] > lowest) {
            count = 2
            current = nums[i]
        }
    }

    return false
};

// shorter solution
var increasingTriplet = function(nums) {
    let min = nums[0]
    let secondMinUpdatedAfterMin = Infinity

    for (let val of nums) {
        if (val <= min) {
            min = val
        } else if (val <= secondMinUpdatedAfterMin) {
            secondMinUpdatedAfterMin = val
        } else { // min < secondMinUpdatedAfterMin < val
            return true 
        }
    }
    return false
}