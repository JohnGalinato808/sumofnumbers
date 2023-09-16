function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor([1, 3, 5, 7]));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile([1, 3, 5, 7]));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion([1, 3, 5, 7]));

const sumTheSimpleWay = (nums) => {
  _.reduce(nums, function (memo, num) { return memo + num; }, 0);
};

console.log(sumTheSimpleWay([1, 3, 5, 7]));
