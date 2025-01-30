const router = require("express").Router();
let Student = require("../models/student");

router.route("/add").post((req, res) =>{

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


router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
}) 

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name , age , gender , address} = req.body;

    const updateStudent = {
        name,
        age,
        gender,
        address
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{
        res.status(200).send({
            "status" : "User updated"
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({
            "status" : "Error with updating data",Error:err.message
        });
    })  
})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({
            "status":"User Deleted"
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({
                "status":"Error with deleting user",Error:err.message
            });          
        })
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await Student.findById(userId).then((student)=>{
        res.status(200).send({
            status:"User fetched",student
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({
                status:"Error with fetching user",Error:err.message
        });
        })
    })
})

module.exports = router;
