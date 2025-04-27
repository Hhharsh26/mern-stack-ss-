class Solution {
    public int countSubarrays(int[] nums) {
        int cnt=0;
        for(int i=0;i<nums.length -2;i++){
            int f=nums[i];
            int s=nums[i+1];
            int t=nums[i+2];
            if((f+t)==(s/2))
            if (nums[i]+nums[i+2]==nums[i+1]/2.0)
            {
                cnt++;
            }
        }
        return cnt;
    }
}