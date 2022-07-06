class Solution {
    public int climbStairs(int n) {
        HashMap<Integer, Integer> values = new HashMap<Integer, Integer>();
        values.put(1, 1);
        values.put(2, 2);
        values.put(3, 3);
        if(!values.containsKey(n)){
            for(int i = 3; ; i++){
                if(i == n){
                    return values.get(i-1) + values.get(i-2);
                }
                values.put(i, values.get(i-1) + values.get(i-2));
            }
        }else {
            return values.get(n);
        }
       
    }
    
    
    
}