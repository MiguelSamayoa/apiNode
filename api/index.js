const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const boom = require('@hapi/boom');

const { LogsErrors, ErrorHandle, BoomErrorHandle } = require('./middlewares/httpErrorsHandle');
const app = express();
const port = 3000;

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(boom.forbidden ("No permitido") );
    }
  }
}

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
})


routerApi(app);

app.use(LogsErrors);
app.use(BoomErrorHandle);
app.use(ErrorHandle);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
