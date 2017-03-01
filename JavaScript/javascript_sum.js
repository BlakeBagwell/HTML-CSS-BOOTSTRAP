var nums = [1, 2, 3];
var sum = 0;
function sumOf(nums) {
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log(sum);
}

sumOf(nums);
