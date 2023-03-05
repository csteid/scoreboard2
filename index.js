// home score and guest score displays
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
// leader displays
let homeLeader = document.getElementById("home-leader");
let guestLeader = document.getElementById("guest-leader");
// set counts to 0
let homeCount=0
let guestCount=0

function homeAdd(count){
    homeCount += count;
    homeScore.textContent=homeCount;    
    showLeader()
}
function guestAdd(count){
    guestCount += count;
    guestScore.textContent=guestCount;  
    showLeader()  
}

function showLeader(){
    if (homeCount<guestCount){
        guestLeader.textContent = "LEADER";
         homeLeader.textContent = " ";
    }
    else if (homeCount>guestCount){
        homeLeader.textContent = "LEADER";
        guestLeader.textContent = "";
    }
    else{
        guestLeader.textContent=" "
        homeLeader.textContent=" "
    }
}   


 
// new game button
const newGameBtn = document.getElementById("new-gameBtn");  
  
newGameBtn.addEventListener("click", function(){  
    homeCount=0;
    homeScore.textContent= homeCount;
    guestCount=0;
    guestScore.textContent= guestCount;   
    })