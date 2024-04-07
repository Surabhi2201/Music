let song=document.querySelectorAll(".container .songs");
let audio=new Audio();
let restart=document.querySelector("#restart");
let pause=document.querySelector("#pause");

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
