const path = require('path');
const express = require('express');

const port = process.env.PORT || 6868;

let app = express();
// ENDPOINT:  /api/summary/data/:id'

app.listen(port, () => console.log('listening on port:' + port));