function romanToInt(s: string): number {
    s = s.toUpperCase();
    let sum = 0;
    const numMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    } as const;

    for (let i = 0; i < s.length; i++) {
        let curr = s[i]! as keyof typeof numMap;
        let next = s[i + 1]! as keyof typeof numMap;
        if ((next && numMap[next]) > numMap[curr]) {
            sum -= numMap[curr]
        } else {
            sum += numMap[curr]
        }
    }
    return sum;
}
/**
 * XI
 * V
 * IV
 * III
 * II
 * XV
 */

console.log(romanToInt("iv"))