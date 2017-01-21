var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var ora = require('ora');

var port = process.env.PORT || 3000;

var app = express();
var compiler = webpack(config);

var spinner = ora({
  interval: 100
});

function failAndExit(err) {
  spinner.fail();
  console.error(err.stack);
  process.exit(1);
}

app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/css', express.static(__dirname + '/src/css'));

app.use(stormpath.init(app, {
  expand: {
    customData: true
  },
  web: {
    // Add input field called 'describes' to registration form.
    // User must enter in 'seeker' or 'employer'. This info will be saved to
    // user's account automatically when he registers.
    register: {
      form: {
        fields: {
          describes: {
            enabled: false,
            label: 'Position',
            name: 'describes',
            placeholder: 'e.g. employer, seeker',
            required: true,
            type: 'text'
          }
        }
      }
    }
  },
  // After the user registers, inspect his custom data and see if he entered in
  // 'seeker' or 'employer'
  // Add him to the appropriate group depending on the value in custom data.
  postRegistrationHandler: function (account, req, res, next) {
    var seekerHref = 'https://api.stormpath.com/v1/groups/1R92UrB4Rn1EJpMpTvP6uW';
    var employerHref = 'https://api.stormpath.com/v1/groups/1kIrveqKGm2KVNkWoWwV5E';

    account.getCustomData(function(err, customData) {
      if (customData.describes === "seeker") {
        //Adding to seeker group
        account.addToGroup(seekerHref, function(err, membership) {
          console.log('Added user to seeker group:', membership);
        });
      } else if (customData.describes === "employer") {
        //Adding to the employer group
        account.addToGroup(employerHref, function(err, membership) {
          console.log('Added user to employer group:',membership);
        });
      }

      // Remove the value from custom data (since the user is now in the 'seeker' or 'employer' group)
      customData.remove('describes');
      customData.save(function(err) {
        if (err) throw err;
      });
    });

    next();
  }
}));


app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

//this needs to be changed
  function saveAccount() {
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }
  saveAccount();
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

spinner.text = 'Starting Dev Sever on port ' + port,
spinner.start();

app.on('error', failAndExit);
app.on('stormpath.error', failAndExit);

app.listen(port, function () {
  spinner.succeed();
  spinner.text = 'Initializing Stormpath';
  spinner.start();
  app.on('stormpath.ready', function () {
    spinner.succeed();
    console.log('\nListening at http://localhost:' + port);
    // Now bring back error logging.
    app.get('stormpathLogger').transports.console.level = 'error';
  });
});