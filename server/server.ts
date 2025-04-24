import http from "http";
import express from "express";
import cors from "cors";
import bodyPar from "body-parser";
import mysql from "mysql";
import { createHandler } from "graphql-http/lib/use/express";
const expressPlayground =
  require("graphql-playground-middleware-express").default;
const schemaa = require("./schema");

const root = {
  users() {
    return [{ id: 1, name: "Jhon" }];
  },
  async Getdata() {
    return new Promise((res, rej) => {
      con.query("select * from myinput", (err: any, val: any) => {
        if (err) rej(err);
        res(Object.values(JSON.parse(JSON.stringify(val))));
      });
    });
  },
  async getUser(id) {
    return new Promise((res, rej) => {
      con.query(
        `select * from myinput where id=${id}`,
        (err: any, val: any) => {
          if (err) rej(err);
          res(Object.values(JSON.parse(JSON.stringify(val))));
        }
      );
    });
  },
};

const app = express();
app.use(bodyPar.json());
app.use(
  bodyPar.urlencoded({
    extended: true,
  }),
  express.static("./dist/")
);
app.use(express.static("./dist/"));
app.use(
  cors({
    Credential: true,
    origin: "*",
  })
);

const con = mysql.createConnection({
  host: "localhost",
  user: "roots",
  password: "admin",
  database: "my-tests",
});

con.connect(function (err: any) {
  if (err) throw err;
  console.log("Connected!");
});

app.all(
  "/graphql",
  createHandler({
    schema: schemaa,
    rootValue: root,
  })
);
app.get("/myget", expressPlayground({ endpoint: "/graphql" }));

app.get("/myvalue", (req: any, res: any) => {
  if (req) {
    con.query("select * from myinput", (err: any, val: any) => {
      if (!err) {
        res.status(200).send({ response: val, error: null }).end();
      } else {
        res.status(404).send(err);
      }
    });
  }
});

app.put("/saveVal", (req: any, res: any) => {
  if (req) {
    let { name, city, mob, id }: any = req.body;
    con.query(
      `update myinput set id="null", name="${name}",city="${city}", mobile="${mob}" where id=${id}`,
      (err: any, val: any) => {
        if (!err) {
          res.status(200).send({ response: val, error: null }).end();
        } else {
          res.status(404).send(err);
        }
      }
    );
  }
});

let port = 4500;
app.listen(port, () => {
  console.log(`Connecting Port is ${port}`);
});
