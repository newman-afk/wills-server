const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "https://wills-rust.netlify.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/wills", require("./router/wills"));

app.use("/mywill", require("./router/mywill"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
