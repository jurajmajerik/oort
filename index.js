const express = require('express');
const strava = require('strava-v3');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/stats', (req, res, next) => {
  strava.athlete.get({'access_token':'ccdf5c28de331198586f66423e5c5afdd853a62b'}, function(err, payload, limits) {
    if (!err) {
      res.send(payload);
    } else {
      console.log(err);
    }
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on 4000...");
});
