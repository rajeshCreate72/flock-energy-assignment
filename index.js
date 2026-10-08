const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const meterRoutes = require("./routes/meterRoutes");
const transformerRoutes = require("./routes/transformerRoutes");
const login = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
            <title>API service</title>
            <h1>Flock energy api service</h1>
        </html>
        `);
});

app.use("/meters", meterRoutes);
app.use("/transformers", transformerRoutes);
app.use("/login", login);

app.listen(8000, () => {
  console.log("Running at port http://localhost:8000/");
});
