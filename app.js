const color = ["green","red","rgba(133,122,200)","#f15025","rgb(220,20,60)","rgb(178,34,34)","rgb(139,0,0)","lightsalmon","	crimson","	firebrick","gold","orange","yellow","lime","darkgreen","olive","darkolivegreen","cyan","mediumblue","navy","slateblue","magenta","purple","indigo","deeppink","darkslategray","slategray","maroon","brown","chocolate","goldenrod"];

const btn = document.getElementById("btn");
const colorm = document.querySelector(".colorm");

btn.addEventListener('click',function(){
    // console.log(document.body);
    //get random number between 0 - 3
    const randomNumber = 2;
    const randomnum =Math.floor( Math.random()*color.length);
    document.body.style.backgroundColor = color[randomnum];
    colorm.textContent= color[randomnum];
    console.log(randomnum);

})