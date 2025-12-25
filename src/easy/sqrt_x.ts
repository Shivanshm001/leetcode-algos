function newton_f(g: number,N: number){
    return 0.5 * (g + (N/g));
};
function mySqrt(N: number){
    if(N <= 0) return 0;
    let g = N;
    while(Math.abs(g*g -N) > 0.00001){
        g = newton_f(g,N);
    }
    return Math.floor(g);
}

console.log(mySqrt(4))