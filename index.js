const app = require("express")();
const PORT = 3003;

/**
 * Database testing, connected and made insertions but couldn't retrieve data
 * Swith methods to overwrite .json
 */
// const testing = require("./managers/PostManager");
// testing(console.error);

//Example importing middleware as a placeholder for future middewares
const test = require("./middlewares").test;
app.use(require("express").json());

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
