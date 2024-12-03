let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turnO = true;

const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Handle box clicks
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log(`Box ${index} was clicked`);
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; 
        checkwinner(); 
    });
});
const showWinner = (winner) => {
    // Display the winner message
    message.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
   

    // Play the win sound
    const winSound = new Audio("winner.mp3");
    winSound.play();


};





const checkwinner = () => {
    for (let pattern of winningpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner found:", pos1val);
            showWinner(pos1val);
            return; 
        }
    }
};


resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgcontainer.classList.add("hide"); 
});


newbtn.addEventListener("click", () => {
    resetbtn.click(); 
});
