function lengthOfLastWord(s: string): number {
    let len = 0;
    const regex = new RegExp('[a-zA-Z]',"i");
    for(let i = s.length; i >= 0; i--){
        const char = s[i];
        if(char && (char !== " ") && char.match(regex)) len++;
        if(len > 0 && char === " ") break;
    }
    return len;
}

console.log(lengthOfLastWord("luffy is still joy boy."))