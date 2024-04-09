// function rock() 
// {
//    document.getElementById("you").style.background = "url('https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover"
//    let a = Math.floor(Math.random()*3)
//    console.log(a)
//    if (a==0)
//    {
//     document.getElementById("com").style.background = "url('https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover"
//     document.getElementById("result").innerHTML="Match Draw"
//     document.getElementById("result").style.color="White"
// }
//     else if (a==1) {
//         document.getElementById("com").style.background = "url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://cdn.pixabay.com/photo/2014/04/10/19/53/scissors-321238_960_720.jpg') center/cover"
//         document.getElementById("result").innerHTML="Com Win"
//     document.getElementById("result").style.color="red"

//     }
//     else if (a==2) {
//         document.getElementById("com").style.background = "url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover"
//         document.getElementById("result").innerHTML="You Win"
//     document.getElementById("result").style.color="green"


//     }
// }
// function paper() 
// {
//    document.getElementById("you").style.background = "url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://cdn.pixabay.com/photo/2014/04/10/19/53/scissors-321238_960_720.jpg') center/cover"
//    let a = Math.floor(Math.random()*3)
//    console.log(a)
//    if (a==0)
//    {
//     document.getElementById("com").style.background = "url('https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover"
//     document.getElementById("result").innerHTML="You Win"
// }
//     else if (a==1) {
//         document.getElementById("com").style.background = "url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://cdn.pixabay.com/photo/2014/04/10/19/53/scissors-321238_960_720.jpg') center/cover"
//         document.getElementById("result").innerHTML="Match Draw"
//     }
//     else if (a==2) {
//         document.getElementById("com").style.background = "url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover"
//         document.getElementById("result").innerHTML="You Lose"

//     }
// }
// function scissors() 
// {
//    document.getElementById("you").style.background = "url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover"
//    let a = Math.floor(Math.random()*3)
//    console.log(a)
//    if (a==0)
//    {
//     document.getElementById("com").style.background = "url('https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover"
//     document.getElementById("result").innerHTML="You Lose"
// }
//     else if (a==1) {
//         document.getElementById("com").style.background = "url('https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://cdn.pixabay.com/photo/2014/04/10/19/53/scissors-321238_960_720.jpg') center/cover"
//         document.getElementById("result").innerHTML="You Win"
//     }
//     else if (a==2) {
//         document.getElementById("com").style.background = "url('https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover"
//         document.getElementById("result").innerHTML="Match Draw"
//     }

// }
let player;
let num = 10;
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
    if(player==0 && rand==0)
    {
        document.getElementById("result").innerHTML = "Match Draw"
        document.getElementById("result").style.color = "white"
    }
    else if(player==0 && rand==1)
    {
        document.getElementById("result").innerHTML = "You lose"
        document.getElementById("result").style.color = "red"
    }
    else if(player==0 && rand==2)
    {
        document.getElementById("result").innerHTML = "You Won"
        document.getElementById("result").style.color = "green"
    }
    else if(player==1 && rand==0)
    {
        document.getElementById("result").innerHTML = "You Won"
        document.getElementById("result").style.color = "green"
    }
    else if(player==1 && rand==1)
    {
        document.getElementById("result").innerHTML = "Match Draw"
        document.getElementById("result").style.color = "white"
    }
    else if(player==1 && rand==2)
    {
        document.getElementById("result").innerHTML = "You lose"
        document.getElementById("result").style.color = "red"
    }
    else if(player==2 && rand==0)
    {
        document.getElementById("result").innerHTML = "You lose"
        document.getElementById("result").style.color = "red"
    }
    else if(player==2 && rand==1)
    {
        document.getElementById("result").innerHTML = "You Won"
        document.getElementById("result").style.color = "green"
    }
    else if(player==2 && rand==2)
    {
        document.getElementById("result").innerHTML = "Match Draw"
        document.getElementById("result").style.color = "white"
    }
}

function checkgameover(){
    if (num==-1) {
        
        alert("Game Over")
    }
}

