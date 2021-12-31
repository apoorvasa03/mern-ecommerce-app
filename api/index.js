const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop')
.then(() => console.log('DB is connected'))
.catch((err) => console.log(err))

console.log('Welcome to api server')