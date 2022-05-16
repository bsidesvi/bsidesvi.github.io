const express = require('express');
const app = express();
const port = 3030;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`dev app listening on port http://localhost:${port}`)
})
