// import { PORT } from './../constants';
// import express from "express";
// import cors from "cors";
// import { connect } from './config/db';
// import { mainRouter } from './routes';
// import { errorHandler } from './middleware/errorHandler';

// import path from 'path';



// const app = express();



// //#region Middleware
// //cors
// app.use(cors());
// //parse json
// app.use(express.json());

// // save the images in server in static folder which can we get from it the images
// app.use('/images', express.static(path.join(__dirname, '../public/images')));
// //#endregion

// //test request
// app.get("/", (req:express.Request, res:express.Response) => {
//   res.send("Hello World ");
// });



// app.use('/api/v1',mainRouter)

// app.use(errorHandler)

// connect();

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import { connect } from '../src/config/db';
import { mainRouter } from '../src/routes';
import { errorHandler } from '../src/middleware/errorHandler';
import path from 'path';

import { VercelRequest, VercelResponse } from '@vercel/node';

const app = express();

//#region Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../public/images')));
//#endregion

// Test route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/v1', mainRouter);
app.use(errorHandler);

// Connect to DB (do it once, not every request)
connect();

// Export the app as a handler for Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
