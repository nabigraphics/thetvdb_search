const express = require('express');
const path = require('path');
const serve = require('serve-static');
const router = require('./router');
const app = express();


app.use('/api',router);
app.use(serve('dist'));
app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
})
app.get('/series/:lang/:name',(req,res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(25252,function (){
  console.log("TVDB_Search App Open!");
});
