

const 
    express = require('express'),

    mongoose = require('mongoose'),

    bodyParser = require('body-parser'),

    config = require('./config/dev'),

    FakeDb = require('./Fake-db'),

    Rental = require('./models/rental'),

    rentalRoutes = require('./routes/rentals'),

    userRoutes = require('./routes/users');


mongoose.connect(config.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});


const app = express();

app.use(bodyParser.json());
app.use('/api/v1/rentals',rentalRoutes);
app.use('/api/v1/users',userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT,function(){
    console.log('I am running');
});