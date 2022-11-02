const express=require('express');
const { URL }=require('../Settings/envconf')

const app=express();

//Middware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
app.use(URL,require('../Routers/GetBD'));
app.use(URL,require('../Routers/PostBD'));

module.exports=app;
