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
    let songList=["tunes/Pehle-Bhi-Main.mp3",
"tunes/Satranga.mp3",
"tunes/Saware.mp3",
"tunes/Chale-Aana.mp3",
"tunes/O-Mahi.mp3",
"tunes/Darkhaast.mp3",
"tunes/Ae-Dil-Hai-Mushki;.mp3",
"tunes/Judaai.mp3",
"tunes/Rula-Diya.mp3","tunes/Jaadui.mp3",
"tunes/O Bedardeya.mp3"];
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