let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");



let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

 
boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
       if(turn0){
        box.innerText ="O";
        box.style.color="black";
        turn0=false;
       }else{
        box.innerText="X";
        box.style.color="";
        turn0=true;
       }
       box.disabled = true;
       checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    };
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};
const showWinner = (winner) => {
    msg.innerText = `${winner} is the winner!`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};


const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1wal = boxes[pattern[0]].innerText;
        let pos2wal = boxes[pattern[1]].innerText;
        let pos3wal = boxes[pattern[2]].innerText;

        if(pos1wal != "" && pos2wal !="" && pos3wal != ""){
            if(pos1wal === pos2wal && pos2wal === pos3wal){
                console.log("winner");

                showWinner(pos1wal);
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);