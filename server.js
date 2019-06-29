const express  = require("express");
const path     = require("path");
const PORT     = process.env.PORT || 3001;
const mongoose = require("mongoose");
const db       = require("./config/keys").mongoURI;
const passport = require("passport");
const users    = require("./routes/api/users");
const items    = require("./routes/api/items");

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(passport.initialize());
// require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/items", items);

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
