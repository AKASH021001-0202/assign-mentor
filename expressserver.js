import express from "express";

import mentorRouter from "./router/teacherdb.js";

import mongooseDb from "./db.utils/mongoose-connection.js";
import studentRouter from "./router/studentdb.js";



const server = express();

await mongooseDb();
server.use(express.json());


server.use("/students", studentRouter);
server.use("/mentors", mentorRouter);

const port = 8000;
server.listen(port, () => {
  console.log("server is running on port", port);
});

