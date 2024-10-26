let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");
let turnofO = true; //playerX, player0

 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = ()=>{
    turnofO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}; 

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnofO){
            box.innerText = "O";
            turnofO = false
        }else{
            box.innerText = "X";
            turnofO = true;
        }
        box.disabled = true

        checkwinner();
    });
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkwinner = () =>{
    for(let pattern of winPatterns){
        let pos1val1 = boxes[pattern[0]].innerText;
        let pos2val2 = boxes[pattern[1]].innerText;
        let pso3val3 = boxes[pattern[2]].innerText;

        if (pos1val1 != "" && pos2val2 != "" && pso3val3 != ""){
            if (pos1val1 === pos2val2 && pos2val2 === pso3val3){
                showWinner();
            
            }
        }
    }
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame)