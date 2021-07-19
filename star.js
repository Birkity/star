function pattern(y) {
    for (let i = 0; i <= y; i++) {
        for (let j = 0; j <= y; j++) {
            if (i>=j) {
                console.log("*");
            }else{
                console.log(" ");
            }
            console.log("\n");
           
         }
        
        
    }
}
pattern(5);