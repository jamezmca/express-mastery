//for url extension /users
const express = require('express')
const router = express.Router()
//can have router.use(logger) and define the router function at the bottom

router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send("User List")
  })

router.get("/new", (req, res) => {
    res.render("users/new")
  })

router.post('/', (req, res) => {
    console.log(req.body.firstName)
    res.send('create user')
})


//dynamic parameter for a variable route
//need to have these last because it reads routes from top to bottom
//static routes always go above dynamic routes
//.route also replaces the need to have independant get put delete requests
//in the case that they all use the /:id 
router.route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`get user with id ${req.params.id}`)
    }).put((req, res) => {
        res.send(`update user with id ${req.params.id}`)
    }).delete((req, res) => {
        res.send(`delete user with id ${req.params.id}`)

    })
// router.get('/:id', (req ,res) => {
//     //pulls the id number from the url
// })
// router.put('/:id', (req ,res) => {
//     //put the id number from the url
// })
// router.delete('/:id', (req ,res) => {
//     //delete the id number from the url
//     res.send(`delete user with id ${req.params.id}`)
// })

const users = [{ name: 'James' }, { name: 'Bexy' }]
//whenever you go to a route that has an id paramater,
//eg all the routes just above, run this code with the request
//response, next and id
//param is a type of middleware (which runs before responses)
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next() //go onto next piece of middleware
})

module.exports = router