import express from 'express';
import { router } from './routes/routes';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(router);

const Startup = async () => {
  try {
    await mongoose.connect(
      'mongodb://birdsquawk-mongo-service:27017/birdsquawk'
    );
    console.log('connected to mongo');
  } catch (err) {
    console.log(err);
  }

  app.listen(5000, () => console.log('Server started on port 5000 🚀'));
};

Startup();
