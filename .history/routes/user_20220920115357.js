import express from "express";

const router = express.Router();

const users = [
    {
        firstname: "Hoang",
        lastname: "Duy",
        age: 21
    },
    {
        firstname: "GnahYuD",
        lastname: "hihi",
        age: 21
    }
]

router.get('/', (req, res) => {
    console.log(users);
    
    res.send(users);
});

export default router;