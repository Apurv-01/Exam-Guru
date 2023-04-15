const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('landing page');
})
app.get('/operating-system',(req,res)=>{
    res.render('operating-system');
})

app.get('/computer-networks',(req,res)=>{
    res.render('computer-networks');
})
app.listen(3000,()=>{
    console.log('started at port 3000');
})