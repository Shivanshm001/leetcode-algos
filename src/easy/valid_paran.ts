function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false; // If s.length is odd , paranthesis' are not balanced.
    let stack: string[] = [];
    let brackets: Record<string, string> = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    let i = 0;
    while(i < s.length){
        const curr = s.charAt(i);
        if(curr in brackets) stack.push(curr);
        else {
            if(stack.length === 0) return false;
            let top = stack.pop();
            if(!top) return false;
            if(brackets[top] !== curr) return false;            
        };
        i++;
    }

    if(stack.length === 0) return true;
    else return false;
}

const v =isValid("()")

console.log({v})