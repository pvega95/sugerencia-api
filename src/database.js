const mongoose = require ('mongoose');

// const URI = 'mongodb+srv://admin:admin@cluster0-joinl.mongodb.net/test?retryWrites=true&w=majority';
const URI = 'mongodb://localhost/mean-crud';

// mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });

mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true , useFindAndModify: false })
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err))
    
module.exports = mongoose;