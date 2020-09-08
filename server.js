const express = require("express");
const morgan = require("morgan")
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080

const app = express();
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
