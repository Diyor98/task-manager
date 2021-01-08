require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete("5ff6ea1673402837a0ef4c1e").then(result => {
    console.log(result)
    return Task.countDocuments({completed : false})
}).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})