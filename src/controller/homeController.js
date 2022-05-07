import db from  '../config/ConnectDB.js'
import express from 'express'

let home = (req,res) =>{
    return res.status(200).render('index.ejs')
}
let createtb = async (req,res) =>{
    try{
        db.query('CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))')
        return res.status(200).render('index.ejs')
    }
    catch(err){
        console.log(err)
        return res.status(404).render('404.ejs')
    }
   
}
let getUser = async (req,res) =>{
    try{
        let users = await db.query('SELECT * FROM users')
        return res.status(200).json(users[0])
    }
    catch(err){
        console.log(err)
        return res.status(404).render('404.ejs')
    }
}
module.exports ={
    home,
    createtb,
    getUser
}