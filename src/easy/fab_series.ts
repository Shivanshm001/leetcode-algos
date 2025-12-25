// Fn = F(n - 1) + F(n-2);
function fabbonacci(num: number, memo: Record<number, number> = {}): number {
    if (num < 0) return 0;
    if (num <= 2) return num;
    if (memo[num]) {
        return memo[num]
    } else {
        memo[num] = fabbonacci(num - 1) + fabbonacci(num - 2);
    }
    return memo[num];
}


console.log(fabbonacci(5))