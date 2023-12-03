<<<<<<< HEAD
httpGet = function(theUrl){
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}//get return after prompting the server

swapVideos = function(){	
	var theVideos = httpGet('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLP_Wb75xS9wDOChuGRBpuNSMIkrJ2FaeP&key=AIzaSyDTadHGdvVsI9YGG72CT60Qh23FYO51UIU'); //key is the API access key, shouldn't share
    //console.log(theVideos);
	var videoCount = JSON.parse(theVideos).items.length;
    console.log(JSON.parse(theVideos).items.length);
    console.log(JSON.parse(theVideos).items[JSON.parse(theVideos).items.length-1]);
	var randomNumber = Math.floor((Math.random() * videoCount));
	var playlistURL = "https://www.youtube.com/watch?v=iffR3fWv4xw&list=PLyYlLs02rgBYRWBzYpoHz7m2SE8mEZ68w&index=5";
    
	// var videoEmbed = document.getElementById('vid');
	// 	videoEmbed.setAttribute('src', playlistURL);
=======
httpGet = function(theUrl) {
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}//get return after prompting the server

swapVideos = function() {
  var theVideos = httpGet('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLP_Wb75xS9wDOChuGRBpuNSMIkrJ2FaeP&key=AIzaSyDTadHGdvVsI9YGG72CT60Qh23FYO51UIU'); //key is the API access key, shouldn't share
  //console.log(theVideos);
  var videoCount = JSON.parse(theVideos).items.length;
  console.log(JSON.parse(theVideos).items.length);
  console.log(JSON.parse(theVideos).items[JSON.parse(theVideos).items.length - 1]);
  var randomNumber = Math.floor((Math.random() * videoCount));
  var playlistURL = "https://www.youtube.com/watch?v=iffR3fWv4xw&list=PLyYlLs02rgBYRWBzYpoHz7m2SE8mEZ68w&index=5";

  // var videoEmbed = document.getElementById('vid');
  // 	videoEmbed.setAttribute('src', playlistURL);
>>>>>>> origin/main
}
swapVideos();