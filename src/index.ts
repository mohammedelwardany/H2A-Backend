import { PORT } from './../constants';
import express from "express";
import cors from "cors";


const app = express();

//#region Middleware
//cors
app.use(cors());
//parse json
app.use(express.json());
//#endregion

//test request
app.get("/", (req:any, res:any) => {
  res.send("Hello World ");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
