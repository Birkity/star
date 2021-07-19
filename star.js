function pattern(y) {
    
    for (let i = 0; i < y; i++) {
        for (let k=0; k<=(y-i); k++) {
            console.log(" ");
        }
        for (let j = 0; j <= i; j++) {
            console.log("*");
            
        }
        console.log("\n");
    }
}

pattern(6);