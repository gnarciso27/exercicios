function fibonacci(n){
    let fib = [];
    let a = 0, b = 1;

    for(let i = 0; i < n; i++){
        fib.push(a);
        let next = a + b;
        a = b;
        b = next;
        
    }
    return fib;
}
const n = 10;
console.log(fibonacci(n));