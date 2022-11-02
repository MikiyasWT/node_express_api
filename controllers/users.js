
import {v4 as uuidv4} from "uuid"

let users = [
    {
        firstName:"Mesfin",
        lastName:"Bekele",
        age:26,
        id: "e10eaaa0-6b9b-40c7-8adc-a12e51c74a69"
        }
]


export const getUsers = (req,res) => {
    res.send(users);
}

 export const getUser = (req,res) => {
    const {id} = req.params
    
    const user = users.filter((user) => user.id == id)

    if(!user) res.send(`user with id of ${id} not found`)

    res.send(user)
}

export const createUser = (req,res) => {
    const user = req.body;
    users.push({...user,id:uuidv4()});
    res.send(`${req.body.firstName} is added to users list`)   
}


export const deleteUser = (req,res) => {
    const {id} = req.params
    
    users = users.filter((user) => user.id !== id)
    res.send(users)
}



export const editUser = (req,res) => {
    const {id} = req.params
    let user = users.find((user) => user.id == id)

    console.log(user)

    const {firstName,lastName,age} = req.body

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age
    
    res.send(`user with id of ${id} is updated`)
}