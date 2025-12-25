function strStr(haystack: string, needle: string): number {
    if (needle === "") return -1;
    let len_needle = needle.length;
    let len_haystack = haystack.length;

    if (len_haystack < len_needle) return -1;

    for (let i = 0; i <= (len_haystack - len_needle); i++) {
        let found = true;

        for(let j = 0; j < len_needle; j++){
            if(haystack[i+j] !== needle[j]){
                found = false;
                break;
            }
        }
        if (found) return i;
    }
    return -1;
};


console.log(strStr("mango", "ng"))
/**
 * Hay : "mango", Needle: ang
 * WindowSize = 3
 * Wrong Approach :
 *  For i < len(haystack); i += len(needle):
 *      Iter 1 : Compares Man <-> ang (False)
 *      Iter 2 : Compares go <-> ang (i += len(needle) skips characters inbetween) (False)
 * 
 * Right Approach:
 *  For i = 0; i <= (len(haystack) - len(needle)); i++; (i) represents the current starting point of the fixed window.
 * 
 *      Found = true;
 *      
 *      For j = 0; j < len(needle); j++; This loop compares strings, Here (j) represents offset inside the window. (We compare char by char inside the window )
 *          If haystack[i+j] != needle[j]:
 *              Found = false;
 *              End Loop
 *   If Found: Return True
 *  
 *   Default Return -1
 */