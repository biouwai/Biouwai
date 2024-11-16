function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  // 选基底
  for (let i = 0; i <= 0; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    let total = 0;
    while (l < r) {
      if (nums[l] === nums[l - 1] && l > i + 1) {
        l++;
        continue;
      }
      total = nums[i] + nums[l] + nums[r];
      if (total === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
      } else if (total > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
