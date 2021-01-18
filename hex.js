// const color = ["green","red","rgba(133,122,200)","#f15025"];
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];




const btn = document.getElementById("btn");
const colorm = document.querySelector(".colorm"); 


btn.addEventListener('click',function(){
    // console.log(document.body);
    //get random number between 0 - 3
    // const randomNumber = 2;
    // const randomnum =Math.floor( Math.random()*color.length);
    // document.body.style.backgroundColor = color[randomnum];
    // colorm.textContent = color[randomnum];
    // console.log(randomnum);
    let hexcolor="#";
    for(let i=0;i<6;i++){
        hexcolor += hex[Math.floor(Math.random()*hex.length)]; 
        
    }
    console.log(hexcolor);
        document.body.style.backgroundColor = hexcolor;
        colorm.textContent = hexcolor;

})