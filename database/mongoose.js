const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager')

.then(()=>{
    console.log('Database Successfully Connected');
})
.catch((error)=>{
    console.log("Error Occured while DB connection",error);
});

module.exports = mongoose;

