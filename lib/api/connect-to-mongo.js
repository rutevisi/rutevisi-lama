import mongoose from 'mongoose';
import UserSchema from '../../models/userModel'
import UjianSchema from '../../models/tesModel';

const connectToMongo = async () => {
  const connection = await mongoose.createConnection(
    'mongodb+srv://errbint:visi321rute@cluster-rutevisi-maqxl.mongodb.net/rutevisi?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );

  const Ujian = connection.model("Ujian", UjianSchema);
  const User = connection.model("User", UserSchema);

  return {
    connection,
    models: {
      Ujian,
      User
    }
  };
}

export default connectToMongo;