const express = require('express');
const cors = require('cors');
const config = require('./config');
const itemRoutes = require('./routes/item.routes');
const mongoose = require('mongoose');
const loadTestData = require('./testData');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', itemRoutes);
app.use(helmet());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

//connect backend code with the database 

mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => 
    console.log('Connection to the database'));
    loadTestData();

db.on('error', (err) => 
    console.log('Error ' + err));

app.listen(config.PORT, function() {    
    console.log('Server is running on port: ', config.PORT);
});