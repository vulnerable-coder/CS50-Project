var Player = videojs('VideoPlayer',{
    loop : true,
    playbackRates : [0.25,0.5,0.75,1,1.25,1.5,1.75,2],
    plugins : {
        hotkeys : {
            seekStep : 15
        }
    }
});
var Player = videojs('VideoPlayer2',{
    loop : true,
    playbackRates : [0.25,0.5,0.75,1,1.25,1.5,1.75,2],
    plugins : {
        hotkeys : {
            seekStep : 15
        }
    }
});

