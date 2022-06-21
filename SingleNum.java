// class Solution {
//     public int singleNumber(int[] nums) {
//         HashSet <Integer> output = new HashSet<>();
//         for(int i = 0; i < nums.length; i++){
//             if(output.add(nums[i])){
//                 output.add(nums[i]);
//             } else{
//                 output.remove(nums[i]);
//             }
//         }
//         int outputter = 0;
//         for(int key: output){
//             outputter = key;
//         }
//         return outputter;
//     }
// }

class Solution {
    public int singleNumber(int[] nums) {
        int sum = 0;
        for(int num: nums){
            sum ^= num;
        }
        return sum;
    }
}