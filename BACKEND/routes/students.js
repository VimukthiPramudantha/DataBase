const router = require("express").Router();
let Student = require("../models/student");

router.route("/add").POST((req,res)=>{

    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
})
