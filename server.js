const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); 

const app = express();

app.use(cors());
app.use(express.json());

//DB CONNECTION
const mongoURI = process.env.ATLAS_URI;
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
        .then(()=> console.log('Database terhubung, gan'))
        .catch((err)=> console.log(`DB Connection Error: ${err.message}`));

//ROUTING address
app.get('/', (req, res) => {
    res.send('Assalamualaikum dunia waalaikumsalam');
})

const usersRouter = require('./routes/users');
const ujianRouter = require('./routes/ujian');

app.use('/api/users', usersRouter);
app.use('/api/ujian', ujianRouter);

//PORT SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server mengudara... ketinggian: ${PORT}`))