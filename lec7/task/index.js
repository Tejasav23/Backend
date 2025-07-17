const fs = require("fs")

fs.readFile("../users.txt", "utf-8", function(err, data1){
    if(err) return console.log(err);
    let user1 = JSON.parse(data1)
    console.log(user1)

    fs.readFile("../users2.txt", "utf-8", function(err, data2){
        if(err) return console.log(err);
        let user2 = JSON.parse(data2)
        console.log(user2)

        let result = user1.concat(user2);
        fs.writeFile("./result.txt", JSON.stringify(result), function(err){
            console.log(result);
            if(err) return console.log(err);
            console.log("done");
        })
    })
})
