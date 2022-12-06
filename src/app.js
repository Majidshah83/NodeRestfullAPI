const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get("/student", (req,res) => {
    res.send('helo majid shah');

});
app.listen(port, () => {
    console.log('conection');
});
