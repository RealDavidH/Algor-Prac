class Solution {
    public int[] plusOne(int[] digits) {
        int remainder = 1;
        for(int i = digits.length - 1; i >= 0; i--){
            int sum = remainder + digits[i];
            remainder = sum / 10;
            digits[i] = sum % 10;
        
        }
        if(remainder > 0){
            int[] out = new int[digits.length + 1];
            out[0] = remainder;
            return out;
        }
        
        return digits;
    }
}
