const router = require("express").Router()
const { 
    createUsers, 
    readUsers, 
    readUserById, 
    deleteUsers, 
    updateUsers 
} = require('../controller/controllers')

router.post("/create", createUsers)
router.get("/read", readUsers)
router.get("/read/:id", readUserById)
router.put("/update/:id", updateUsers)
router.delete("/delete/:id" , deleteUsers)

module.exports = router