import Mongoose from 'mongoose'

const connection = {};

async function dbConnect(){
    if( connection.isConnected ){
        return;
    }

    const db = await Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
        .catch(err => { console.log(err.message)});

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;