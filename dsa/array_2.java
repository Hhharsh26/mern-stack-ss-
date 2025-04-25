public class Solution {
    public static int missingNumber(int []a, int N) {
        // Write your code here.
        int length=a.length;
        int sum=0;
        for(int i=0;i<length;i++)
        {
            sum+=a[i];
        }
        int total_sum=(N*(N+1))/2;
        int res=total_sum-sum;
        return res;
    }
}
