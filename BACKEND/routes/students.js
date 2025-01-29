const router = require("express").Router();
let Student = require("../models/student");

router.route("/add").POST((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;

    const newStudent = new Student({
        name,
        age,
        gender,
        address
    })

    newStudent.save().then(() =>{
        res.json("Student added")
    }).catch(()=>{
        console.log(err);
    })
})


router.route("/").GET((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
}) 


module.exports = router;
