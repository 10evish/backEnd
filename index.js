const express = require("express");
const app = express();
const connectDB = require("./server/database/connection");
const router = require("./server/router/router");
const cors = require("cors");
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// mongodb connection
connectDB();

// load routers
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
