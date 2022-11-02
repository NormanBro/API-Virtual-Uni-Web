const app=require('./Settings/index');
const {PORT}=require('./Settings/envconf')

app.listen(PORT,()=>{
    console.log("Server port:",PORT);
});