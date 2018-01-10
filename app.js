const express = require('express')
const Feed = require('rss-to-json')
const app = express()

app.get('/', function(req, res){
	Feed.load('http://beercast.com.br/feed/', function(err, rss){
    	res.send(rss)
	});
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
