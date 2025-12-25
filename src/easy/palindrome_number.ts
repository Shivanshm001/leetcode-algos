function isPalindrome(n: number): boolean {
    if(n < 0) return false;
    const str = String(n);
    let left = 0, right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome(112211))