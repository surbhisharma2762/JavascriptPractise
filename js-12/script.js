let progress = document.getElementById("progress");
let song = document.getElementById("songs");
let ctrlIcon = document.getElementById('cntrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
    }
}
if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime //with this slider starts moving
    }, 500);
}

progress.onchange = function(){
    song.play();                        //whenever any change made it plays song
    song.currentTime = progress.value;  //updates the progress value
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play")
}