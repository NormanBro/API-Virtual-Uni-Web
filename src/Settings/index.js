const express=require('express');
const { URL }=require('../Settings/envconf')
const Cors=require('cors')

const app=express();

const WhiteList=["http://localhost:4200/"]

//Middware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
app.use(URL,require('../Routers/GetBD'));
app.use(URL,require('../Routers/PostBD'));

//Confg
app.use(Cors({
    origin:WhiteList
}));

module.exports=app;
