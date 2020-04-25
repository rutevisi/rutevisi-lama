const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoURI = 'mongodb+srv://errbint:visi231rute@cluster-rutevisi-maqxl.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log('Database terhubung, gan'))
        .catch((err)=> console.log(err));

app.get('/', (req, res) => {
    res.send('Assalamualaikum dunia waalaikumsalam');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server mengudara... ketinggian: ${PORT}`))