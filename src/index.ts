import { PORT } from './../constants';
import express from "express";
import cors from "cors";
import { connect } from './config/db';


const app = express();


//#region Middleware
//cors
app.use(cors());
//parse json
app.use(express.json());
//#endregion

//test request
app.get("/", (req:express.Request, res:express.Response) => {
  res.send("Hello World ");
});

connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
