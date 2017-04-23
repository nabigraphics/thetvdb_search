const express = require('express');
const bodyParser = require('body-parser');
const TVDB = require('node-tvdb');
const tvdb = new TVDB("INPUT API KEY");

const api = express.Router();

api.use(bodyParser.json());

api.get('/search/:lang/:name',(req,res,next) => {
  tvdb.getSeriesByName(encodeURI(req.params.name),{lang:req.params.lang}).then((data) => {
      return res.json(data);
    }).catch((err) =>{
      return res.status(404).send("Error!");
    })
});

api.get('/series/:lang/:id',(req,res) => {
  tvdb.getSeriesById(encodeURI(req.params.id),{lang:req.params.lang}).then(data => {
    return res.json(data);
  }).catch(error => {
    return res.status(404).send("Error!");
  });
});

api.get('/poster/:id',(req,res) => {
  tvdb.getSeriesPosters(encodeURI(req.params.id)).then(data => {
    return res.json(data[0]);
  }).catch(error => {
    return res.status(404).send("Error!");
  });
});

module.exports = api;
