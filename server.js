var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db/connection.js');
var favicon = require('serve-favicon');
var https = require('https');
var http = require('http');
var fs = require('fs');
var sendmail = require('sendmail')();

var app = express();
//
// var options = {
//   cert: fs.readFileSync('./cert/client-cert.pem'),
//   key: fs.readFileSync('./cert/client-key.pem')
// };

app.use(favicon(path.join(__dirname, './public/img/favicon.png')));
app.set('views', path.join(__dirname, '/public'));
app.set('view engine','ejs');
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/bower_components'));
app.use(express.static('public/img'));
app.use(express.static('public/partials'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);

app.post('/sendSubscription', function(req, res) {
    if (typeof(req.body.Email) === 'string') {
        sendmail({
            from: 'team@doctorpedia.com',
            to: req.body.Email,
            bcc: 'todd@doctorpedia.com',
            subject: 'Welcome To Doctorpedia News Letters!',
            html: '<b>Thank you for subscribing to Doctorpedia News!</b>'
        }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
    } else {
        res.send('notworkin');
    }
    res.send('sent');
});

app.post('/sendContactForm', function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var message = req.body.message;
    if ( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ) {
        sendmail({
            from: email,
            to: 'todd@doctorpedia.com',
            subject: firstName + ' ' + lastName + ' - Inquiry',
            html: '<b>' + message + '</b>'
        }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
    } else {
        console.log('invalid email');
    }
    res.send('sent')
});
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, './public/404/routing.html'));
// });

app.get('/', function(req, res) {
    res.render('Index_A.ejs');
});

app.get('/A', function(req, res) {
    res.render('Index_A.ejs');
});

app.get('/B', function(req, res) {
    res.render('Index_B.ejs');
});

app.get('/C', function(req, res) {
    res.render('Index_C.ejs');
});

app.get('/D', function(req, res) {
    res.render('Index_D.ejs');
});

app.get('/E', function(req, res) {
    res.render('Index_E.ejs');
});

app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/search.html'));
});

app.get('/article', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/article.html'));
});

app.get('/article-video', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/article_video.html'));
});

app.get('/contact-us', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/contact_us.html'));
});

app.get('/play-video', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/video_singular.html'))
});

app.get('/treatments-therapies', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/treatment_therapies.html'))
})

app.get('/nutrition-fitness', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/nutrition_fitness.html'))
})

app.get('/non-profit', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/non_profit.html'))
})

app.get('/news-information', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/news_information.html'))
})

app.get('/new-treatments-therapies', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/new_treatment.html'))
})

app.get('/health-tip-1', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/health_tip_1.html'))
})

app.get('/health-tip-2', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/health_tip_2.html'))
})

app.get('/community-support', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/community_support.html'))
})

app.get('/digital-apps', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/digital_apps.html'))
})

app.get('/blog-1', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/blog-1.html'))
})

app.get('/blog-2', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/blog-2.html'))
})

app.get('/blog-3', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/blog-3.html'))
})

app.get('/blog-4', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/blog-4.html'))
})

app.get('/blog-5', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/articles/blog-5.html'))
})

app.get('/privacy-policy', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/privacy_policy.html'))
})

app.get('/terms-of-use', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/terms_of_use.html'))
})

app.get('/not-found', function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/non-existant.html'))
})

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, './public/templates/non-existant.html'))
})


app.listen(3000, function() {
    console.log('Listening On http://138.68.248.193:8080/');
});

// app.listen(8080, '138.68.248.193', function() {
//     console.log('Listening On http://138.68.248.193:8080/');
// });

// app.listen(8080, '138.68.248.193', function() {
//     console.log('Listening On http://138.68.248.193:8080/');
// });
