import http from 'node:http';
import mongoose from 'mongoose';
import { APP_PORT, DB } from './constants';
import router from './src/router';

const app = http.createServer(router);

mongoose.connect(DB)
    .then(() => console.log('Connect to MongoDB'))
    .catch((err) => console.log(`Error connect to DB: ${err}`));

app.listen(APP_PORT, (err: Error) => {
    if(err) console.log(`Error on starting app: ${err}`);
    console.log(`App starting at port http://localhost:${APP_PORT}`);
});
