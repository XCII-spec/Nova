let audio = new Audio();
let songs = [];
let currentIndex = 0;

function playSong(index){
    currentIndex = index;
    audio.src = songs[index].url;
    audio.play();
}

function togglePlay(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}

function next(){
    if(currentIndex < songs.length - 1){
        playSong(currentIndex + 1);
    }
}

function prev(){
    if(currentIndex > 0){
        playSong(currentIndex - 1);
    }
}

function openUpload(){
    document.getElementById("upload").click();
}

function uploadMusic(event){
    let file = event.target.files[0];

    let url = URL.createObjectURL(file);

    songs.push({
        name: file.name,
        url: url
    });

    renderSongs();
}

function renderSongs(){
    let container = document.getElementById("songs");
    container.innerHTML = "";

    songs.forEach((song, i) => {
        let btn = document.createElement("button");
        btn.innerText = song.name;
        btn.onclick = () => playSong(i);
        container.appendChild(btn);
    });
}
