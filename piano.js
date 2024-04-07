let piano=document.querySelectorAll(".piano-container .keys");
let audio= new Audio();
let k=document.querySelector("#A");



let container=document.querySelector(".piano-container");
const playTune=(keys)=>{
    audio.src=`tunes/${keys}.mp3`;
    audio.play();
}

piano.forEach(keys=>{
    keys.addEventListener("click",()=>{
       
        let int=keys.innerText;
        console.log(int);
        playTune(int);
    });
    
})

const pressDown=(e)=>{
   playTune(e.key);
}

document.addEventListener("keydown",pressDown)