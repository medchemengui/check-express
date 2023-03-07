const express=require('express')
const route=express.Router()
const bodyparser=express.urlencoded({extended:true})

var students=[
    {id:0,firstname:"MED"},
    {id:1,firstname:"AHEMED"}
]

route.get('/students',(req,res)=>{
    res.send(students)

})

route.get('/student/:id',(req,res)=>{
    let newstudent=students.find(student=>student.id==req.params.id);
    if(newstudent){
        res.send(newstudent)
    }else{
        res.send('we dont have')
    }
})

app.delete('/deletestudent/:id',(req,res)=>{
    let Student=students.find(student=>student.id===req.params.id);
    position=students.indexOf(Student);
    students.splice(position,1)
    res.send(students)

})

route.post('/addstudent',bodyparser,(req,res)=>{
    let newstudent={
        id:req.body.id,
        firstname:req.body.firstname
    }
    students.push(newstudent)
    res.send(students)
})

route.patch('/updatestudent/:id',bodyparser,(req,res)=>{
    let Student=students.find(student=>student.id===req.params.id)
    Student.id=req.body.id
    Student.firstname=req.body.firstname
    res.send(Student)
})

module.exports=route

