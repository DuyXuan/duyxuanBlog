const image = document.querySelector(".song-image");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

//get song list from json

let jsonServer = "http://localhost:3000/songs";

function getSong(callback) {
  fetch(jsonServer)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function start() {
  getSong(function (course) {
    render(course);
  });
}
start();
function render(course) {
  let songs = course;

  // Current Song
  let songIndex = 0;

  // Previous Song
  function prevSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  // Next Song
  function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  // On Load - Select First Song
  loadSong(songs[songIndex]);

  // Set Progress Bar
  function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
  }

  // Event Listeners
  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);
  music.addEventListener("ended", nextSong);
  music.addEventListener("timeupdate", updateProgressBar);
  progressContainer.addEventListener("click", setProgressBar);

  //play when click
  const songName = document.querySelector(".song-name");
  const songMenu = document.querySelector(".music-list");
  const songImage = document.querySelector(".song-img");

  //add song to menu

  (function add() {
    for (let i = 0; i < songs.length; i++) {
      let newSong = document.createElement("li");
      newSong.innerHTML = `<div class="song-img">
  <img src= "img/${songs[i].name}.jpg" alt="">
  </div>
  <div class="song-detail">
  <h4 class="song-name">${songs[i].displayName}</h4>
  <p class="song-author">${songs[i].artist}</p>
  </div>`;
      songMenu.appendChild(newSong);
    }
  })();

  (function SongMenuAction() {
    const listItem = document.querySelectorAll(".music ul li");
    for (let i = 0; i < listItem.length; i++) {
      // listItem[i].index = i;

      listItem[i].addEventListener(
        "click",
        function (e) {
          loadSong(songs[i]);
          playSong();
        },
        false
      );
    }
  })();
}
// Check if Playing
let isPlaying = false;
// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}
// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}
// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}
//if image url not exits then set default image
(function defaultImage() {
  const image = document.querySelectorAll(".music img");
  for (let i = 0; i < image.length; i++) {
    image[i].onerror = function () {
      this.onerror = null;
      this.src = "img/default.jpg";
    };
  }
})();
