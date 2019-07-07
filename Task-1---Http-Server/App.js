const express = require('express');
const app = express();

//Set Static Path
app.use(express.static('./Public'));

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

app.listen(8080, function(){
    console.log('Server Has Started On Port 8080');
});