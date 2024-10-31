
const b = document.querySelectorAll('.inpt');

let player = 0;
const inputChoice = ['X','O'];
const possibleWin = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

let forDraw =0;
for(let i=0;i<b.length;i++){
   b[i].addEventListener('click', ()=>{
      if(b[i].textContent==""){
         b[i].textContent = inputChoice[player];
         forDraw++;
         Check_win(player);
         player = (player == 0)? 1:0;
      }
   })
}

function Check_win (player1){
     for(let i=0;i<possibleWin.length;i++){
        if(b[possibleWin[i][0]].textContent==inputChoice[player1]&&b[possibleWin[i][1]].textContent==inputChoice[player1]&&b[possibleWin[i][2]].textContent==inputChoice[player1]){
           setTimeout(()=>{
             alert("Player: "+player1+" WIN");
             resetGame();
             return;
           },10)
           
        }
     }
     if(forDraw==9){
            draw();
        }
}
function draw(){
    setTimeout(()=>{
        alert("DRAW");
   resetGame();
    },10)
   
}

function resetGame(){
    for(let i=0;i<b.length;i++){
        b[i].textContent = "";
     }
     forDraw=0;
     player = 0;
}
