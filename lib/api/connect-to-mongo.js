import mongoose from 'mongoose';
import UserSchema from '../../models/userModel'
import UjianSchema from '../../models/tesModel';
import mbtiQuestionSchema from '../../models/mbtiModel'
import fakboiQuestionSchema from '../../models/fakboiModel'
import negaraManaQuestionSchema from '../../models/negaraModel'

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
  const MBTIQuestion = connection.model("MBTIQuestion", mbtiQuestionSchema);
  const FakboiQuestion = connection.model("FakboiQuestion", fakboiQuestionSchema);
  const NegaraManaQuestion = connection.model("NegaraManaQuestion", negaraManaQuestionSchema);
  
  return {
    connection,
    models: {
      Ujian,
      User,
      MBTIQuestion,
      FakboiQuestion,
      NegaraManaQuestion
    }
  };
}

export default connectToMongo;