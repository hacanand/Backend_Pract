const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.send("hello word")
})
app.post('/home',   (req, res)=> {
    res.send('welcome to home page');

})
app.patch('/home', function (req, res) {
    res.json({
        message: "this is a patch request",
        success: true,
    })
})
app.listen(PORT, function process() {
    console.log("server is running at",PORT);
})