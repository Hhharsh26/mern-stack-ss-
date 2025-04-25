classSolution {
    publicbooleancontainsDuplicate(int[] nums) {
        intn=nums.length;
        Arrays.sort(nums);
        for(inti=1;i<n;i++)
        {
            if(nums[i]==nums[i-1])
            {
                returntrue;
            }
        }
        returnfalse;
    }
}
