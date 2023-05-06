import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({limit:"30mb", extended: "true"}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: "true"}));
app.use(cors());

/*Code version of MONGODB*/
const CONNECTION_URL = "mongodb+srv://uygurberkaytravelpad:123456Asd@cluster0.x0dcbwf.mongodb.net/"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT,() => console.log(`Server running on port: ${PORT}`))
    })
    .catch((err)=> console.log(err.message));

mongoose.set('useFindAndModify', false);
