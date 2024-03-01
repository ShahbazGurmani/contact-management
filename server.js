//Creating express server here
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
//define port
const PORT = process.env.PORT;
connectDB();

//simple test api
// app.get("/api/contacts", (req, resp) => {
//   resp.status(200).json({ message: "Getting all Contact" });
// });

//use method work as a middleware
app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts/", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`Server Running On this ${PORT}`);
});
