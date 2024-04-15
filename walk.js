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
    let songList=["tunes/Ve-kamleya.mp3",
"tunes/My-Dil-Goes-Mmm.mp3",
"tunes/Sher-Khul-Gaye.mp3",
"tunes/Offo.mp3",
"tunes/Teri-Baaton-Mein.mp3",
"tunes/Ladki-Kyon.mp3",
"tunes/One-Two-Three-Four.mp3",
"tunes/Tere-Vaaste.mp3",
"tunes/Akhiyan-Gulab.mp3",
"tunes/Dus-Bahane-2.0.mp3"];
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
