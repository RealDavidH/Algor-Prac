class Solution {
    public void moveZeroes(int[] nums) {
        int j = nums.length;
        int k = 0;
        for(int i = 0; i < j;i++){
            if(nums[i]==0){
                k++;
            } else if(k!=0){
                nums[i-k]=nums[i];
                nums[i]=0;
            }
        }
        
    }
}





// while(i < nums.length - 1 ){
//             if(nums[i] == 0 && nums[j] == 0 || nums[i] == 0){
//                 i++;
//             }
//             if(nums[j] == 0 && nums[i] != 0){
//                 nums[j] = nums[i];
//                 nums[i] = 0;
//                 j++;
//                 i = j;
//             }
//             if(nums[j] != 0 && nums[i] != 0){
//                 j++;
//                 i++;
//             }
//         }
// for(int i = 0; i < nums.length; i++){
//             for(int j = 0; j < nums.length; j++){
//                 if(nums[j] == 0 && j+1 != nums.length){
//                     nums[j] = nums[j+1];
//                     nums[j+1] = 0;
//                 }
//             }
        