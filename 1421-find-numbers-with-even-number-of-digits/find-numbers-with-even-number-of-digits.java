class Solution {
    public int cnt(int n){
        int c=0;
        while(n>0){
            int r=n%10;
            n/=10;
            c++;
        }
        return c;
    }
    public int findNumbers(int[] nums) {
        int ans=0;
        for(int i=0;i<nums.length;i++){
            
            if(cnt(nums[i])%2==0){
                ans++;
            }
        }
        return ans;
    }
}