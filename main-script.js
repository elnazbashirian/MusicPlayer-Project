let allMusic = [
  {
    name: "Easy on Me",
    singer: "Adele",
    img: "/img/download (1).jpg",
    audio: "/audio/Adele-Easy-On-Me.mp3",
    mainTime: "3:43",
  },
  {
    name: "Perfect",
    singer: "Ed Sheeran",
    img: "/img/download.jpg",
    audio: "/audio/Ed_Sheeran_-_Perfect_(thinknews.com.ng).mp3",
    mainTime: "4:20",
  },
  {
    name: "Get You The Moon",
    singer: "Kina",
    img: "/img/moon.jpg",
    audio: "/audio/Kina-Get-You-The-Moon-Ft-Snow.mp3",
    mainTime: "2:59",
  },
];
const mylist = document.querySelector(".mylist");
function AddMusic() {
  mylist.className = "mylist";
  for (var i = 0; i < allMusic.length; i++) {
    var listElements = document.createElement("li");
    var MySongs = document.createElement("div");
    MySongs.className = "names";
    var songName = document.createElement("div");
    songName.appendChild(document.createTextNode(`${allMusic[i].name}`));
    var singerName = document.createElement("div");
    singerName.appendChild(document.createTextNode(`${allMusic[i].singer}`));
    MySongs.appendChild(songName);
    MySongs.appendChild(singerName);
    var mytime = document.createElement("span");
    mytime.appendChild(document.createTextNode(`${allMusic[i].mainTime}`));
    listElements.appendChild(MySongs);
    listElements.appendChild(mytime);
    mylist.appendChild(listElements);
  }
}
AddMusic();

let allmusics = document.querySelector(".AllMusics");
let closeButton = document.querySelector(".close");
let moreMusicBtn = document.querySelector(".open");
let playPauseBtn = document.querySelector(".play-icon");
const container = document.querySelector(".container");
let Alloptions = document.querySelectorAll("li");
let musicImg = document.querySelector("img");
let musicName = document.querySelector(".song-name");
let musicArtist = document.querySelector(".singer-name");
let mainAudio = document.querySelector("#MyAudio");
let mainTime = document.querySelector(".main-time");
let previousSong = document.querySelector(".skip-pre");
let NextSong = document.querySelector(".skip-next");
let repeatBtn = document.querySelector(".repeat");

closeButton.addEventListener("click", () => {
  allmusics.style.display = "none";
});
moreMusicBtn.addEventListener("click", () => {
  allmusics.style.display = "block";
});

Alloptions.forEach((option) => {
  option.addEventListener("click", () => {
    let OptionTime = option.querySelector("span").innerText;
    for (let i = 0; i < allMusic.length; i++) {
      if (OptionTime === allMusic[i].mainTime) {
        musicName.innerText = allMusic[i].name;
        musicArtist.innerText = allMusic[i].singer;
        musicImg.src = allMusic[i].img;
        mainAudio.src = "http://127.0.0.1:5501" + allMusic[i].audio;
        mainTime.innerText = allMusic[i].mainTime;
      }
    }
    mainAudio.play();
    playPauseBtn.querySelector("i").innerText = "pause";
    option.querySelector("span").innerText = "played";
  });
});
playPauseBtn.addEventListener("click", () => {
  if (mainAudio.paused) {
    mainAudio.play();
    playPauseBtn.querySelector("i").innerText = "pause";
  } else {
    mainAudio.pause();
    playPauseBtn.querySelector("i").innerText = "play_arrow";
  }
});

previousSong.addEventListener("click", () => {
  for (let i = 0; i < allMusic.length; i++) {
    let source = "http://127.0.0.1:5501" + allMusic[i].audio;
    if (mainAudio.src === source) {
      musicName.innerText = allMusic[i - 1].name;
      musicArtist.innerText = allMusic[i - 1].singer;
      musicImg.src = allMusic[i - 1].img;
      mainAudio.src = "http://127.0.0.1:5501" + allMusic[i - 1].audio;
      mainTime.innerText = allMusic[i - 1].mainTime;
      break;
    }
  }
  mainAudio.play();
  playPauseBtn.querySelector("i").innerText = "pause";
});

NextSong.addEventListener("click", () => {
  for (let i = 0; i < allMusic.length; i++) {
    let source = "http://127.0.0.1:5501" + allMusic[i].audio;
    if (mainAudio.src === source) {
      musicName.innerText = allMusic[i + 1].name;
      musicArtist.innerText = allMusic[i + 1].singer;
      musicImg.src = allMusic[i + 1].img;
      mainAudio.src = "http://127.0.0.1:5501" + allMusic[i + 1].audio;
      mainTime.innerText = allMusic[i + 1].mainTime;
      break;
    }
  }
  mainAudio.play();
  playPauseBtn.querySelector("i").innerText = "pause";
});

repeatBtn.addEventListener("click", () => {
  for (let i = 0; i < allMusic.length; i++) {
    let source = "http://127.0.0.1:5501" + allMusic[i].audio;
    if (mainAudio.src === source) {
      mainAudio.src = allMusic[i].audio;
      mainAudio.play();
    }
  }
});
let slider = document.getElementById("slider");
let timetext = document.querySelector(".current-time");
mainAudio.addEventListener("timeupdate", () => {
  let time = mainAudio.currentTime * (100 / mainAudio.duration);
  slider.value = time;
  let minute = Math.floor(mainAudio.currentTime / 60);
  let second = Math.floor(mainAudio.currentTime - minute * 60);
  if (second < 10) {
    second = "0" + second;
  }
  timetext.innerHTML = minute + ":" + second;
});
slider.addEventListener("change", () => {
  let AudioTime = mainAudio.duration * (slider.value / 100);
  mainAudio.currentTime = AudioTime;
});
