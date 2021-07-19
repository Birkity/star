function pattern(y) {
    
    for (let i = 1; i <=y; i++) {
        for (let k = y-i; k > 0; k--) {
            console.log(" ");
        }
        for (let j = 1; j <= i; j++) {
            console.log("* ");
            
        }
        console.log("\n");
    }
}

pattern(6);