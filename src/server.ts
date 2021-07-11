
import "reflect-metadata";
import * as express from "express";

import "./database/index.ts.dkp";

const app = express();

app.listen(3000,()=>console.log('Rodando...'));

