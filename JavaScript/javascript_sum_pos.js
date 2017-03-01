var nums = [1, -2, 3];
var sum = 0;
function sumOfPos(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum = sum + nums[i];
    }
  }
  console.log(sum);
}

sumOfPos(nums);
