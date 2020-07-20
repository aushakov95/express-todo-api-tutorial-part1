import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", routes.todos);

app.listen(9000, () =>
  console.log(`Express Todo Api app listening on port 9000`)
);
