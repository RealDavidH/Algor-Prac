var wiggleMaxLength = function (nums) {
    let longestSeq = 0;
    let posOrNeg = null;
    if(nums.length == 1){
        longestSeq++;
        return longestSeq;
    }
    for (let i = 0; i <= nums.length; i++) {
        if(posOrNeg == null){
            if (nums[i] < nums[i + 1]) {
                longestSeq++;
                posOrNeg = "neg";
            } else if (nums[i] > nums[i + 1]) {
                longestSeq++;
                posOrNeg = "pos";
            } else if( nums[i] == nums[i + 1] ){
                posOrNeg == null;
            }
        }

        if (i == nums.length - 1) {
            if (nums[i - 1] > nums[i] && posOrNeg == "pos") {
                console.log("we here");
                longestSeq++;
                posOrNeg = "neg";
            } else if (nums[i - 1] < nums[i] && posOrNeg == "neg") {
                longestSeq++;
                posOrNeg = "pos";
            } else if( nums[i] == nums[i- 1] ){
                longestSeq++;
                posOrNeg = "pos";
            }
            break;
        }
        if (nums[i] < nums[i + 1] && posOrNeg == "pos") {
            longestSeq++;
            posOrNeg = "neg";
        } else if (nums[i] > nums[i + 1] && posOrNeg == "neg") {
            longestSeq++;
            posOrNeg = "pos";
        } 
    }
    return longestSeq;
};
const nums1 = [1, 7, 4, 9, 2, 5];
const nums2 = [84];
const nums3 = [0,0];
const nums4 = [3,3,3,2,5]

console.log(wiggleMaxLength(nums1));
console.log(wiggleMaxLength(nums2));
console.log(wiggleMaxLength(nums3));
console.log(wiggleMaxLength(nums4));