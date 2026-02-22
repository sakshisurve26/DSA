function fibonaci (n) {
    let a=5, b=6;
    console.log("fibonaci series:");
    for (let i=0; i<n; i++) {
        console.log (a);
        let c=a+b;
        a=b;
        b=c;
    }
}
fibonaci(15);