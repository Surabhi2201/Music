let song=document.querySelectorAll(".container .songs");
let audio=new Audio();
let restart=document.querySelector("#restart");
let pause=document.querySelector("#pause");
let repeat=document.querySelector("#repeat");
const playTune=(song)=>{

    audio.src=`tunes/${song}.mp3`;
    audio.play();
}
let shuffle=document.querySelector("#shuffle");
function shuffleArray(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}

shuffle.addEventListener("click",()=>{
    let songList=["tunes/Zindagi-Do-Pal-Ki.mp3",
"tunes/Hum-Mar-Jayenge.mp3",
"tunes/Sun-Raha.mp3",
"tunes/Chal-Ghar-Chale.mp3",
"tunes/Khuda-Jaane.mp3",
"tunes/Bekhayali.mp3",
"tunes/Barishon-Mein.mp3",
"tunes/Saadi-Gali-Aaja.mp3",
"tunes/Tujhe-Kitna-Chahne-Laga.mp3","tunes/Jaadui.mp3",
"tunes/Dil-Kyun-Yeh-Mera.mp3","tunes/Tujhe-Bhula-Diya.mp3","tunes/Hawayein.mp3"];
  shuffleArray(songList);
  audio.src=songList[0];
  audio.load();
  audio.play();
});



song.forEach(songs=>{
  songs.addEventListener("click",()=>{
    let y=songs.innerText;
    playTune(y);
  })
  
})

pause.addEventListener("click",()=>{
    audio.pause();
})
restart.addEventListener("click",()=>{
    audio.play();
})

document.addEventListener("keydown",()=>{
    if(event.code==='Space'){
        audio.pause();
    }

    else if(event.code==='Enter'){
        audio.play();

    }

   
}) 

repeat.addEventListener("click",()=>{
    if(audio.loop){
        audio.loop=false;
        repeat.textContent="LOOP";
    }
    else{
        audio.loop=true;
        repeat.textContent="UNLOOP";
    }
})