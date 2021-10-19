const express = require("express");
app = express();

const PORT = 5000;

app.use("/data/", require("./routes/dataRout"));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}.`);
});
