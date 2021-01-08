require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('5ff7004f1d4b6803cca8fee9', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})