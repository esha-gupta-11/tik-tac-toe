let boxes=document.querySelectorAll("#box");
let reset=document.querySelector("#reset");
let popup=document.querySelector("#popup");
let newg=document.querySelector("#newg");
let turnO=true;

let winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];


const enablebox = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
    };
};



const disablebox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
       if(turnO){
        box.innerText="O"
        
        turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
        
       }
       box.disabled = true;

       checkwinner();
    })

})

const showWinner=(win)=>{
    winner.innerText=`Congratulations!! the winner is ${win}`;
    popup.classList.remove("hide");
    disablebox();
}
 
let checkwinner=()=>{
   for(let pattern of winpat){
    
    let pos1=    boxes[pattern[0]].innerText;
    let pos2=    boxes[pattern[1]].innerText;
    let pos3=    boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            popup.classList.remove('hide');
            console.log("winner",pos1);
           
            showWinner(pos1);
        }
    }
   }
}

const resetgame=()=>{
    turnO=true;
    enablebox();
    popup.classList.add("hide");
};


reset.addEventListener("click", resetgame);
newg.addEventListener("click", resetgame);

