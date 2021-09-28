const express = require('express')
const app = express()

// app.use(logger)
app.use(express.static("public"))

app.set('view engine', 'ejs')

//only see next when creating middleware
//can have multiple middlewares in the function
// app.get("/", logger, (req, res) => {
//     res.render('index', { text: 'world' })
// })
//would use this instead of a public folder

const userRouter = require('./routes/users')

//created a subfolder for routes that are specific to the /user base url extension
app.use('/users', userRouter)

function logger(req, res, next) {
    //having issues consoling req
    next()
}

app.listen(3000, () => console.log('connected'))