import mongoose from 'mongoose';
import UjianSchema from '../../models/tesModel';

const connectToMongo = async () => {
  const connection = await mongoose.createConnection(
    'mongodb+srv://errbint:visi321rute@cluster-rutevisi-maqxl.mongodb.net/rutevisi?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true
    }
  );

  const Ujian = connection.model("Ujian", UjianSchema);

  return {
    connection,
    models: {
      Ujian
    }
  };
}

export default connectToMongo;