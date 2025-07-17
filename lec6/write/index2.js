const fs=require("fs");

fs.writeFile("../demo1.txt","second file",function(err,data){
    if(err) return console.log(err);
    console.log("Success");   
});