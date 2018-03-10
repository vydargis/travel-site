let fs = require('fs');
let https = require('https');


fs.writeFile(__dirname  + "/index.html", "<h1>NO No</h1>", function(error) {
	if (error) {
		return console.log(error);
	} else {
		return console.log('Congrats');
	}
});


let myPhotoLocation = "https://raw.githubusercontent.com/vydargis/travel-site/master/app/assets/images/first-trip-i.jpg";

https.get(myPhotoLocation, function(response) {
	response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});