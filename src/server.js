const express = require('express')

const app = express();
app.use(express.json());
const port = 5000;
app.get('/', (req, res) => {
  res.send('<H1>hello World </H1>')
})

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}/`);
});