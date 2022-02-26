const app = require("express")();
const PORT = 3003;

//Example importing middleware as a placeholder for future middewares
const test = require("./middlewares").test;
app.use(require("express").json());

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
