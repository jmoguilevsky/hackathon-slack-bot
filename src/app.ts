import * as bp from "body-parser";
import * as express from "express";
import * as helmet from "helmet";
import errorHandling from "./middlewares/errorHandling";
import logging from "./middlewares/logging";
import testRouter from "./routers/test";
import v1Router from "./routers/v1";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

// TODO:
// - Tracing
// - Tests

const app = express();

app.use(helmet());

app.use(bp.json({ strict: true }), bp.text(), bp.urlencoded({ extended: false }));

app.use(logging);

// -- Routers
app.use("/v1", v1Router);
app.use("/test", testRouter);

// -- Final configs
app.use(errorHandling);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => `Listening on port ${PORT}...`);
