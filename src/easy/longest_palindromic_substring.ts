function longestPalindrome(s: string): string {
    let longest = "";
    for(let i = 0; i < s.length; i++){
        let pal1 = expand(s,i,i);
        let pal2 = expand(s,i,i+1);

        if(pal1.length > longest.length) longest = pal1;
        if(pal2.length > longest.length) longest = pal2
    }

    return longest;
};

function expand(str: string, left: number, right: number): string{
    while (left >= 0 && right < str.length && str[left] === str[right]){
        left--;
        right++;
    }
    return str.substring(left+1,right);
}

console.log(longestPalindrome("babad"))