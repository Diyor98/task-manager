require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete("5ff6ea1673402837a0ef4c1e").then(result => {
//     console.log(result)
//     return Task.countDocuments({completed : false})
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}

deleteTaskAndCount('5ff7034437d8f73b48ce8cdc', false).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})