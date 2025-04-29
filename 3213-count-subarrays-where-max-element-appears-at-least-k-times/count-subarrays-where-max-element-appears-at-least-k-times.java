class Solution {
    public long countSubarrays(int[] nums, int k) {
        int maxValue = Integer.MIN_VALUE;
        for (int num : nums) {
            maxValue = Math.max(maxValue, num);
        }

        long maxCount = 0;
        long result = 0;
        int left = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] == maxValue) {
                maxCount++;
            }

            while (maxCount >= k) {
                result += (nums.length - right);
                if (nums[left] == maxValue) {
                    maxCount--;
                }
                left++;
            }
        }

        return result;
    }
}
