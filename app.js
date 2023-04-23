const music = new Audio('audio/1.mp3');
//music.play();
const songs = [
    {
        id: 1,
        songName: `Tere Pyaar Mein<br>
        <div class='subtitle'>Arijit Singh</div>`,
        poster: 'img/1.jpeg'
    },
    {
        id: 2,
        songName: `Bhool Bhulaiyaa 2<br>
        <div class='subtitle'>Pritam</div>`,
        poster: 'img/2.jpeg'
    },
    {
        id: 3,
        songName: `Raataan Lambian<br>
        <div class='subtitle'>Jubin Nautiyal</div>`,
        poster: 'img/3.jpeg'
    },
    {
        id: 4,
        songName: `Param Sundori<br>
        <div class='subtitle'>Shreya Ghoshal</div>`,
        poster: 'img/4.jpeg'
    },
    {
        id: 5,
        songName: `Kesariya<br>
        <div class='subtitle'>Arijit Singh</div>`,
        poster: 'img/5.jpeg'
    },
    {
        id: 6,
        songName: `Srivalli<br>
        <div class='subtitle'>Javad Ali</div>`,
        poster: 'img/6.jpeg'
    },
    {
        id: 7,
        songName: `Zara Sa<br>
        <div class='subtitle'>KK</div>`,
        poster: 'img/7.jpeg'
    },
    {
        id: 8,
        songName: `Jab Saiyaan<br>
        <div class='subtitle'>Shreya Ghoshal</div>`,
        poster: 'img/8.jpeg'
    },
    {
        id: 9,
        songName: `Besharam Rang<br>
        <div class='subtitle'>Shilpa Rao</div>`,
        poster: 'img/9.jpeg'
    },
    {
        id: 10,
        songName: `Deva Shree Ganesha<br>
        <div class='subtitle'>Ajay-Atul</div>`,
        poster: 'img/10.jpeg'
    },
    {
        id: 11,
        songName: `Lagdi Lahore Di<br>
        <div class='subtitle'>Guru Randhawa</div>`,
        poster: 'img/11.jpg'
    },
    {
        id: 12,
        songName: `Kaabil Hoon<br>
        <div class='subtitle'>Jubin Nautiyal</div>`,
        poster: 'img/12.jpeg'
    },
    {
        id: 13,
        songName: `Jai jai Shivshankar<br>
        <div class='subtitle'>Vishal-Shekhar</div>`,
        poster: 'img/13.jpeg'
    },
    {
        id: 14,
        songName: `Vaaste<br>
        <div class='subtitle'>Dhvani</div>`,
        poster: 'img/14.jpg'
    },
    {
        id: 15,
        songName: `Lut Gaye<br>
        <div class='subtitle'>Jubin Nautiyal</div>`,
        poster: 'img/15.jpg'
    },
    {
        id: 16,
        songName: `Tu jo Mila<br>
        <div class='subtitle'>KK</div>`,
        poster: 'img/16.jpeg'
    },
    {
        id: 17,
        songName: `Paniyon<br>
        <div class='subtitle'>Atif Aslam</div>`,
        poster: 'img/17.jpeg'
    },
    {
        id: 18,
        songName: `Pasoori<br>
        <div class='subtitle'>Shae Gill</div>`,
        poster: 'img/18.jpg'
    },
    {
        id: 19,
        songName: `Om Shanti Om<br>
        <div class='subtitle'>Vishal-Shekhar</div>`,
        poster: 'img/19.jpeg'
    },
    {
        id: 20,
        songName: `Dholida<br>
        <div class='subtitle'>Sanjay leela</div>`,
        poster: 'img/20.jpeg'
    }

];
//change song name and poster
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//master play
let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');
masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterplay.classList.add('bi-pause-fill')
        masterplay.classList.remove('bi-play-fill')
    }
    else {
        music.pause();
        wave.classList.remove('active1')
        masterplay.classList.remove('bi-pause-fill')
        masterplay.classList.add('bi-play-fill')
    }
})

const images = document.querySelectorAll('.item img');
const audios = document.querySelectorAll('.item audio');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    if (audios[index].paused || audios[index].currentTime <= 0) {
        audios[index].play();
        wave.classList.add('active1')
        masterplay.classList.add('bi-pause-fill')
        masterplay.classList.remove('bi-play-fill')
    }
    else {
        audios[index].pause();
        wave.classList.remove('active1')
        masterplay.classList.remove('bi-pause-fill')
        masterplay.classList.add('bi-play-fill')
    }
  });
});


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,.0)';
    })
}
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.remove('bi-pause-circle-fill')
        el.classList.add('bi-play-circle-fill')
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play();
        masterplay.classList.add('bi-pause-fill')
        masterplay.classList.remove('bi-play-fill')
        let songTitles = songs.filter(e => e.id == index)
            .map(e => e.songName)
        title.innerHTML = songTitles;

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index].style.background = 'rgb(105,105,105,.1)';
        makeAllPlay();
        el.target.classList.add('bi-pause-circle-fill')
        el.target.classList.remove('bi-play-circle-fill')
        wave.classList.add('active1');

    })

});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    

})
music.addEventListener('timeupdate',()=>{
    let progressbar = parseInt(music_curr / music_dur) * 100;
    seek.value = progressbar;
    let seekbar = seek.value;
    seek.style.width = `${seekbar}%`;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterplay.classList.add('bi-pause-fill')
    masterplay.classList.remove('bi-play-fill')
    let songTitles = songs.filter(e => e.id == index)
        .map(e => e.songName)
    title.innerHTML = songTitles;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = 'rgb(105,105,105,.1)';
    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1');

})
next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
           index=1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterplay.classList.add('bi-pause-fill')
    masterplay.classList.remove('bi-play-fill')
    let songTitles = songs.filter(e => e.id == index)
        .map(e => e.songName)
    title.innerHTML = songTitles;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = 'rgb(105,105,105,.1)';
    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1');
})


//pop song scroll bar icons
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

//popular artist scroll bar icons

let popular_artist_left = document.getElementById("popular_artist_left");
let popular_artist_right = document.getElementById("popular_artist_right");
let popular_artist = document.getElementsByClassName("item")[0];

popular_artist_right.addEventListener('click', () => {
    popular_artist.scrollLeft += 330;
})
popular_artist_left.addEventListener('click', () => {
    popular_artist.scrollLeft -= 330;
})
















