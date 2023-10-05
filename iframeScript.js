
function wait(s) {
    return new Promise(resolve => setTimeout(resolve, s));
}

var player;
function onYouTubeIframeAPIReady(){
    player = new YT.Player('youtube-video',{
        events:{
            'onReady': onPlayerReady
        }
    });
    console.log(typeof player.playVideo);
}

function onPlayerReady(event){
    console.log('PlayerIsReady');
}
function playVideo(){
    if (typeof player !== 'undefined' && typeof player.playVideo === 'function'){
        player.playVideo();
    }
}

document.addEventListener('DOMContentLoaded', function() { //initialize by reading from the url.txt
    const url = 'urls.txt';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.text();
        })
        .then(content => {
            let urlList = content.split('\n');
            
            //playVideo(urlList);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
var lastTime;
// function playVideo(urlList) { //initial implementation of video autonext
//     lastTime = Date.now();
//     console.log(lastTime);
//     //pick random video
//     let randomIndex = Math.floor(urlList.length * Math.random());
//     let unitList = urlList[randomIndex].split(' ');
//     //set url to play video
//     let fileContent = document.getElementById('vid');
//     let url = unitList[0].replace('watch?v=', 'embed/') + '?autoplay=1?enablejsapi=1&version=3&playerapiid=ytplayer';

//     fileContent.setAttribute('src', url);
    
//     // setTimeout(function() { playVideo(urlList); }, unitList[1] * 10);//call after certain time
//     // console.log("Video finished in " + unitList[1]);
// }
// new "implementation of video autonext" in progress
// var player;
// function onYouTubePlayerAPIReady() {
//     player = new YT.Player('player', {
//       width: '640',
//       height: '390',
//       videoId: '0Bmhjf0rKe8',
//       events: {
//         onReady: onPlayerReady,
//         onStateChange: onPlayerStateChange
//       }
//     });
// }
// function onPlayerStateChange(event) { //implementation 2      
//     if(event.data === 0) {          
//         alert('done');
//     }
// }

/*Issues
Autonext timer independent of if(video actually plays and at what rate)
*/