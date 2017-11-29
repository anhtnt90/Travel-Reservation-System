let express = require('express');
let router = express.Router();
let kafka = require('./kafka/client');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/addFlightData', function(req, res, next) {
    console.log(req.session.username);
    let username = req.session.username;
    //Uncomment when Session issue is resolved
    // if(req.session.username!==null && req.session.username!==undefined){
        console.log(req.body);

    kafka.make_request('addflight_topic', req.body, function(err,results){
        if(err){
            console.log(err);
        }
        else
        {
            console.log(results);
            if(results.status === 200){
                console.log("Local username: "+ username);
                res.status(results.status).send(results.data);
            }
            else if(results.status === 201){
                console.log("Local username: "+ username);
                res.status(results.status).end();
            }
            else {
                res.status(results.status).end();
            }
        }
    });
    // }
    // else {
    //
    // }

    // res.send('respond with a resource');
});


router.post('/addHotel', function(req, res, next) {
    console.log(req.session.username);
    let username = req.session.username;
    //Uncomment when Session issue is resolved
    // if(req.session.username!==null && req.session.username!==undefined){
    console.log(req.body);

    kafka.make_request('addhotel_topic', req.body, function(err,results){
        if(err){
            console.log(err);
        }
        else
        {
            console.log(results);
            if(results.status === 200){
                console.log("Local username: "+ username);
                res.status(results.status).send(results.data);
            }
            else if(results.status === 400){
                console.log("Local username: "+ username);
                res.status(results.status).end();
            }
            else {
                res.status(results.status).end();
            }
        }
    });
    // }
    // else {
    //
    // }

    // res.send('respond with a resource');
});

router.post('/fetchHotels', function(req, res, next) {
    console.log(req.session.username);
    let username = req.session.username;
    //Uncomment when Session issue is resolved
    // if(req.session.username!==null && req.session.username!==undefined){
    console.log(req.body);

    kafka.make_request('fetchhotels_topic', req.body, function(err,results){
        if(err){
            console.log(err);
        }
        else
        {
            console.log(results);
            if(results.status === 200){
                console.log("Local username: "+ username);
                res.status(results.status).send(results.data);
            }
            else if(results.status === 400){
                console.log("Local username: "+ username);
                res.status(results.status).end();
            }
            else {
                res.status(results.status).end();
            }
        }
    });
    // }
    // else {
    //
    // }

    // res.send('respond with a resource');
});


router.post('/addRoomInHotel', function(req, res, next) {
    console.log(req.session.username);
    let username = req.session.username;
    //Uncomment when Session issue is resolved
    // if(req.session.username!==null && req.session.username!==undefined){
    console.log(req.body);

    kafka.make_request('addrooms_topic', req.body, function(err,results){
        if(err){
            console.log(err);
        }
        else
        {
            console.log(results);
            if(results.status === 200){
                console.log("Local username: "+ username);
                res.status(results.status).send(results.data);
            }
            else if(results.status === 400){
                console.log("Local username: "+ username);
                res.status(results.status).end();
            }
            else {
                res.status(results.status).end();
            }
        }
    });
    // }
    // else {
    //
    // }

    // res.send('respond with a resource');
});

module.exports = router;