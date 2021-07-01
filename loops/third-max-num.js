// const thirdMax = function(nums) {
//   const sortedArr = nums.sort((a, b) => a - b)
//   let a = [...new Set(nums)]
//   return (a.length < 3) ? a[a.length - 1] : a[a.length - 3] 
// };

const thirdMax = function (nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== first && nums[i] !== second && nums[i] !== third) {
            if (nums[i] > first) {
                first = nums[i]
            } else if (nums[i] > second && nums[i] < first) {
                second = nums[i]
            }
        }
    }
    return { first, second, third }
};

thirdMax([3, 6, 2, 1])