const { ObjectID, MongoClient } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID("5ff58d1bde29be08c4b0a9e1")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5ff584fc19d0041f1c3d0075")}, (error, task) => {
        if (error) {
            return console.log(error)
        }
        console.log(task)
    })

    db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
        if (error) {
            return console.log(error)
        }
        console.log(tasks)
    })
})