import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ExpressGraphQL from "express-graphql";
require('dotenv').config();

import { dbconnection } from "./app/connection";
import schema from "./app/schema";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// mongoose connection
dbconnection();
console.log("hello"); // eslint-disable-line
// GraphQL
app.use('/graphql', ExpressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log('APP is listening on port:', port); // eslint-disable-line
});