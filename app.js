//Yonatan Getachew DRB1802 section C
var scores= [0,0];
var roundScore=0;
var activePlayer=0;

newgame();

document.querySelector('.btn-new').addEventListener('click',function(){
    newgame();

})

document.querySelector('.btn-roll').addEventListener('click',function(){
    //random no
    var dice=Math.floor(Math.random()*6+1);
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';

    if(dice!==1){
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
    else{
        //next player
        activePlayer===0 ? activePlayer=1:activePlayer=0;
        roundScore=0;

        //reseting current scores
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        //making the active panel lit up
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //erasing the dice image
        document.querySelector('.dice').style.display= 'none';
    }


})

document.querySelector('.btn-hold').addEventListener('click',function(){
//set global score
if(activePlayer===0)
scores[0]+=roundScore;
else
scores[1]+=roundScore;

//checking for winner
if(scores[0]>=100){
    document.getElementById('name-0').textContent='WINNER';
    document.querySelector('.btn-hold').disabled=true;
    document.querySelector('.btn-roll').disabled=true;
}
else if(scores[1]>=100){
    document.getElementById('name-1').textContent='WINNER';
    document.querySelector('.btn-hold').disabled=true;
    document.querySelector('.btn-roll').disabled=true;
}
else{
    //making the active panel lit up
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //only changing the active player if they do not win
    activePlayer===0 ? activePlayer=1:activePlayer=0;
}

//display in global score UI
document.getElementById('score-0').textContent=scores[0];
document.getElementById('score-1').textContent=scores[1];


        //next player
        
        roundScore=0;

        //reseting current scores
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        
        //erasing the dice image
        document.querySelector('.dice').style.display= 'none';

})

function newgame(){
     scores= [0,0];
    roundScore=0;
   
    document.querySelector('.dice').style.display= 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    //activating roll dice and hold button
    document.querySelector('.btn-hold').disabled=false;
    document.querySelector('.btn-roll').disabled=false;
    //changing player names to original
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';
    
        
        

}

