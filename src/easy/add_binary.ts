function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";
    while(i >= 0 || j >= 0 || carry > 0){
        let val1 = i >= 0 ? parseInt(a[i]!) : 0;
        let val2 = j >= 0 ? parseInt(a[j]!) : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 2);
        result = (sum % 2) + result;
        i--;
        j--;
    }
    return result;
}

let sum = addBinary("1010","1011")
console.log(sum)
