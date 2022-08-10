import app from "./app.js";

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`:D :D Server is up and running on port 5000 :D`);
})
