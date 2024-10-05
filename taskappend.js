const fs=require('fs');
fs.appendFile('task.txt','adding more text to the file',function(err,data){
    if(err){
        console.error(err);
        return;
    }
    console.log('file written successfully');
});