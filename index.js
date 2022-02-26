const app = require("express")();
const bodyParser = require("body-parser");
const PORT = 3003;

/**
 * Database testing, connected and made insertions but couldn't retrieve data
 * Swith to overwrite .json
 */
// const testing = require("./managers/PostManager");
// testing(console.error);

//Example importing middleware as a placeholder for future middlewares
const test = require("./middlewares").test;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
