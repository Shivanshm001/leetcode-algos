function longestCommonPrefix(strs: string[]): string {
    const first = strs[0]!;

    for(let i =0; i < first.length; i++){
        const currentChar = first[i];

        for(let j = 1; j < strs.length; j++){
            const str = strs[j]!
            if(str[i] !== currentChar){
                return first.substring(0,i)
            }
        }
    }
    return first;
};

// console.log(longestCommonPrefix(["floz`wer","flow","floght"]));
console.log(longestCommonPrefix(["a"]))