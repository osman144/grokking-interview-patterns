// Medium
// ============ Longest Substring with K Distinct Characters ==============

/*
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
**/ 

function longestDistinctSubstring(str, k){
  if(k < 1) return null;
  let arr = str.split('');
  let obj = {};
  let left = 0;
  let length = 0;

  // a  r  a  a  c  i
  //             l  r

  /*
    {
      c:1,
      i:1
    }
  */

  for(let right=0; right<arr.length; right++){
    let rightChar = arr[right]
    if(!(rightChar in obj)){
      obj[rightChar] = 0
    }
    obj[rightChar] = obj[rightChar] + 1;

    // let size = Object.keys(obj).length; // 3

    while(Object.keys(obj).length > k){
      let leftChar = arr[left]
      obj[leftChar] = obj[leftChar] - 1;
      if(obj[leftChar] === 0){
        delete obj[leftChar];
      }
      
      left = left + 1;
    }
    let currentLength = right - left + 1; // 2

    length = Math.max(length, currentLength); // 4
  }

  return length;
}

console.log(longestDistinctSubstring("cbbebi", 3));