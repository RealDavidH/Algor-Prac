class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        ArrayList<Integer> out = new ArrayList<Integer>();
        HashMap<Integer, Integer> map  = new HashMap<>();
        
        for(int i = 0; i < nums1.length; i++){
            if(map.containsKey(nums1[i])){
                map.put(nums1[i], map.get(nums1[i]) + 1);
            } else {
                map.put(nums1[i], 1);
            }
        } 
        
        for(int j = 0; j < nums2.length; j++){
            if(map.containsKey(nums2[j]) && map.get(nums2[j]) > 0){
                map.put(nums2[j], map.get(nums2[j]) - 1);
                out.add(nums2[j]);
            } 
        }
        int[] output = new int[out.size()];
        
        for(int k = 0; k < out.size(); k++){
            output[k] = out.get(k);
        }
        
        return output;
    }
}
