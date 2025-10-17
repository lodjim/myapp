const express = require('express')
const path = require('path');
// let mysql = require('mysql');

// let con = mysql.createConnection({
//   host: "mysql",
//   user: "root",
//   password: "root123",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const app = express()
const port = 3000

app.get('/', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
