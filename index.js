
var player1=prompt("Name of player 1: ");
var player2=prompt("Name of player 2: ");
document.querySelector(".p1").innerHTML=player1;
document.querySelector(".p2").innerHTML=player2;

var c=0;
    var randomNumber1  = Math.floor(Math.random() * 6) + 1; //1-6
     
document.querySelector(".b1").addEventListener("click", function(){
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png        
    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png       
    var image1 = document.querySelectorAll("img")[0];  
    c++;
    makeAnimation(image1,randomImageSource,c);    
        this.style.display='none';
       
    });
    var randomNumber2 = Math.floor(Math.random() * 6 )+ 1 ;
    
document.querySelector(".b2").addEventListener("click", function(){   
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
    var image2=document.querySelectorAll("img")[1];
    c++;
    makeAnimation(image2,randomImageSource2,c);
        this.style.display='none';
        
  
});
function makeAnimation(image,imm,c){
    
    image.setAttribute("src","images/dice.gif");
    setTimeout(function(){
        image.setAttribute("src",imm);
        if(c==2){
            winer();
        }
    },1000);
    
}
function winer(){
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩"+player1+" Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="🚩"+player2+" Wins!";
} else { 
    document.querySelector("h1").innerHTML="It's a Draw!";
}}
  