const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('.'));
app.get('/form', function (req, res) {
   res.sendFile( __dirname + "/index.html");
});

app.get('/process_get', (req,res) =>{
    response = {
        Title:req.query.title,
        First_Name:req.query.first_name,
        Middle_Name:req.query.middle_name,
        Last_Name:req.query.last_name,
        Email:req.query.email,
        Contact_Number:req.query.number,
        Airline:req.query.airline,
        Destination:req.query.destination,
        Departure:req.query.departure,
        Return:req.query.return,
        Cost:req.query.cost,
        Customer_Visit:req.query.visit,
        Payment_method:req.query.pmu,
        Visit_Purpose:req.query.purpose,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
})