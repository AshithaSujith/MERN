const fs=require('fs');
fs.writeFile('output.txt','HELLO ABCD',function(err,data){
    if(err){
        console.error(err);
        return;
    }
    console.log('file written successfully');
});