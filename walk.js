let song=document.querySelectorAll(".container .songs");
let audio=new Audio();
let restart=document.querySelector("#restart");
let pause=document.querySelector("#pause");
let repeat=document.querySelector("#repeat");
const playTune=(song)=>{

    audio.src=`tunes/${song}.mp3`;
    audio.play();
}

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
