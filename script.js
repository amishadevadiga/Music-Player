console.log("Welcome to Spotify")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let audioElement = new Audio("songs/1.mp3");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songIndex = 0;
song = [
    { songName: "Justin Beiber", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Khamoshiya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Kurbaniya", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "ALone", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Spectrum", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Play Duration", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Hello Hello", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Hear me", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Korean Girl Group", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "BTS", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]
songItems.forEach((element, i) => {
    element.getElementsByTagName('span')[0].innerText = song[i].songName;
})

//Handle Play
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        //Handling MiniPlayItem
       currplay = document.getElementById(`${songIndex}`);
       currplay.classList.remove('fa-play-circle');
       currplay.classList.add('fa-pause-circle');

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
        //Handling MiniPlayItem
       currplay = document.getElementById(`${songIndex}`);
       currplay.classList.remove('fa-pause-circle');
       currplay.classList.add('fa-play-circle');
    }
})

//Handle ProgressBar
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate")
    //Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () => {
    lapse = myProgressBar.value;
    audioElement.currentTime = (lapse / 100) * audioElement.duration;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('MiniPlayItem')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}
// Array.from(document.getElementsByClassName('MiniPlayItem')).forEach((element, i) => {
//     element.addEventListener('click', (e) => {
//         songIndex = parseInt(e.target.id);
//         makeAllPlays();
//         e.target.classList.remove("fa-play-circle");
//         e.target.classList.add("fa-pause-circle");
//         audioElement.src = `songs/${songIndex}.mp3`;
//         audioElement.currentTime = 0;
//         masterSongName.innerText = song[songIndex-1].songName;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');

//     })
// })

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 10;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = song[songIndex-1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    playing = document.getElementById(songIndex);
    playing.classList.remove('fa-play-circle');
    playing.classList.add('fa-pause-circle')
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 1;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = song[songIndex-1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    playing = document.getElementById(songIndex);
    playing.classList.remove('fa-play-circle');
    playing.classList.add('fa-pause-circle')
})


Array.from(document.getElementsByClassName('MiniPlayItem')).forEach((element, i) => {
    element.addEventListener('click', (e) => {


        if(e.target.classList.contains("fa-play-circle")){
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        masterSongName.innerText = song[songIndex-1].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        }
        else{
            audioElement.pause();
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
    })
})

// durationList = [];
// song.forEach((element, i)=>{
//     nwa = new Audio(element.filePath);
//     console.log(nwa);
//     console.log(nwa.duration)
// })
// nwa = new Audio('songs/3.mp3');
// console.log(typeof(nwa.duration));
// console.log(parseInt(nwa.duration));
// console.log(parseInt(audioElement.duration))