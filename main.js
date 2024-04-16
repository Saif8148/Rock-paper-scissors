let player;
let num = 10;
let l=0;
let w=0;
let d=0;
function rock()
{
    num--;
    document.getElementById("chance").innerHTML=num
   document.getElementById("you").style.background = "url('https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover"
   player = 0;
   com();
   checkgameover();
}
function paper()
{
    num--;
    document.getElementById("chance").innerHTML=num
   document.getElementById("you").style.background = "url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://cdn.pixabay.com/photo/2014/04/10/19/53/scissors-321238_960_720.jpg') center/cover"
   player = 1;
   com();
   checkgameover();
}
function scissors()
{
    num--;
    document.getElementById("chance").innerHTML=num
    document.getElementById("you").style.background = "url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover"
    player = 2;
    com();
    checkgameover();
}
function com()
{
let rand = Math.floor(Math.random()*3)
    if (rand==0)
    {
        document.getElementById("com").style.background = "url('https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover"
    }
    else if (rand==1)
    {
        document.getElementById("com").style.background = "url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://cdn.pixabay.com/photo/2014/04/10/19/53/scissors-321238_960_720.jpg') center/cover"
    }
    else if (rand==2) 
    {
        document.getElementById("com").style.background = "url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover"
    }
    if((player==0 && rand==0)||(player==1 && rand==1)||(player==2 && rand==2))
    {
        document.getElementById("result").innerHTML = "Match Draw"
        document.getElementById("result").style.color = "white"
        
    }
    else if((player==0 && rand==1)||(player==2 && rand==0)||(player==1 && rand==2))
    {
        document.getElementById("result").innerHTML = "You lose"
        document.getElementById("result").style.color = "red"
    }
    else 
    {
        document.getElementById("result").innerHTML = "You Won"
        document.getElementById("result").style.color = "green"
    }
}
function checkgameover(){
    let f=document.getElementById("result").innerText
    if (f=="Match Draw") {
        d++;
    }
    else if (f=="You lose") {
        l++;
    }
    else
    {
        w++
    }
    if (num==0) {
        
        alert(`Game Over win count${w}`)
    }
}
