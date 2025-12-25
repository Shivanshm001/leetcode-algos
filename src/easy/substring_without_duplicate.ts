// function substringWithoutDuplicates(str: string): string {
//     let substring = "";
//     let p1 = 0; 
//     let p2 = 1;

//     for(let i = 0; i < str.length; i++){
//         if(str[p1] === str[p2]){
//             substring = str.substring(p1,(p2 - 1));
//             p1 = p2
//         } else {
//             p2++;
//         }
//     }
//     return substring;
// }

function substringWithoutDuplicates(str: string): number {
    let set = new Set<string>();
    let left = 0;
    let max_len = 0;

    for(let right = 0; right < str.length; right++){
        let curr_string = str[right]!
        while(set.has(curr_string)){
            set.delete(str[left]!);
            left++;
        }

        set.add(curr_string);
        max_len = Math.max(max_len, right - left + 1)
    }

    return max_len;
}
console.log(substringWithoutDuplicates("abcabcbb"));