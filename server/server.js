const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.listen(config.PORT, function() {    
    console.log('Server is running on port: ', config.PORT);
});