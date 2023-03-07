const express=require('express');
const app=express();
const studentroute=require('./router/routerstudent')

app.use(studentroute)





app.listen(5000,()=>console.log('serveur connecter'))