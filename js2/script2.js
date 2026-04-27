let audio = new Audio();
let currentsong = "";
let currentfolder;
let songs = [];

let play = document.getElementById("play");
let previous = document.getElementById("previous");
let next = document.getElementById("next");

// format time
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";

    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    return `${mins}:${secs}`;
}

// GET SONGS FROM songs2/songs.json
async function getsongs(folder) {
    currentfolder = folder;

    let res = await fetch("songs2/songs.json");
    let data = await res.json();

    songs = data[folder];
    return songs;
}

// render songs
function renderSongs(songs) {
    let songul = document.querySelector(".songlist ul");
    songul.innerHTML = "";

    for (const song of songs) {
        songul.innerHTML += `
        <li>
            <img src="img/music.svg" alt="">
            <div class="info">
                <div>${song}</div>
            </div>
        </li>`;
    }

    Array.from(songul.getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            playmusic(e.querySelector(".info div").innerHTML.trim());
        });
    });
}

// play music
function playmusic(song, pause = false) {
    currentsong = song;

    audio.src = `songs2/${currentfolder}/${song}`;

    if (!pause) {
        audio.play();
        play.src = "img/pause.svg";
    } else {
        play.src = "img/play.svg";
    }

    document.querySelector(".songinfo").innerHTML = song;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

// LOAD ALBUMS FROM songs2/albums.json
async function displayalbums() {
    let res = await fetch("songs2/albums.json");
    let data = await res.json();

    let cardcontainer = document.querySelector(".cardcontainer");
    cardcontainer.innerHTML = "";

    data.forEach(album => {
        cardcontainer.innerHTML += `
        <div data-folder="${album.folder}" class="card">
            <div class="playbtn"><svg viewBox="0 0 24 24">
                                <path
                                    d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606">
                                </path>
                            </svg></div>
            <img src="${album.cover}" alt="">
            <h3>${album.title}</h3>
            <p>${album.description}</p>
        </div>`;
    });

    return data.map(a => a.folder);
}

// main
async function main() {

    let folders = await displayalbums();

    if (folders.length > 0) {
        let randomFolder = folders[Math.floor(Math.random() * folders.length)];

        songs = await getsongs(randomFolder);
        renderSongs(songs);

        if (songs.length > 0) {
            playmusic(songs[0], true);
        }
    }

    play.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            play.src = "img/pause.svg";
        } else {
            audio.pause();
            play.src = "img/play.svg";
        }
    });

    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentsong);
        if (index > 0) playmusic(songs[index - 1]);
    });

    next.addEventListener("click", () => {
        let index = songs.indexOf(currentsong);
        if (index < songs.length - 1) playmusic(songs[index + 1]);
    });

    audio.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML =
            `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;

        document.querySelector(".circle").style.left =
            (audio.currentTime / audio.duration) * 100 + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

        document.querySelector(".circle").style.left = percent + "%";
        audio.currentTime = (audio.duration * percent) / 100;
    });

    // card click
    document.querySelector(".cardcontainer").addEventListener("click", async (e) => {
        let card = e.target.closest(".card");
        if (!card) return;

        let folder = card.dataset.folder;

        songs = await getsongs(folder);
        renderSongs(songs);

        if (songs.length > 0) {
            playmusic(songs[0], true);
        }
    });

     // add event listner to hamburger 
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })
    // add event listner to close
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-320px"
    })
}

main();