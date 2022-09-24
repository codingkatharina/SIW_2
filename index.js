const prompt = require('prompt');
prompt.get([num1, num2, op], function(result,err) {
    if (err) {
        console.log(err);
    }
    console.log(result.num1);
    console.log(result.num2);
    console.log(result.op);
}) 