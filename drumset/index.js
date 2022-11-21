// alert("The index.js file has been loaded!")

// With a normal function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!............................(1)
// function handleClick() {
//     alert("I got clicked using normal fn!!");
// }

// document.querySelector("button").addEventListener("click", handleClick);

// Using anonymous fn!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!............................(2)
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked using anonymous fn!!");
// })

// Using arrow function............................................................(3)
// document.querySelector("button").addEventListener("click", () => {
//     alert("I got clicked using arrow fn!!");
// })

// Since querySelectorAll returns an array, we are checking for the correct array, i.e. for class .drum
// w drum, a drum etc. all belong to .drum and then we are taking its size for iteration
let size = document.querySelectorAll(".drum").length;

for (let i = 0; i < size; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        () => {
            switch (i) {
                case 0:
                    new Audio("sounds/tom-1.mp3").play();
                    // document.querySelector("button").style.color = "white";
                    // OR 
                    // let audio = new Audio("sounds/tom-1.mp3");
                    // audio.play();    
                    break;
                case 1:
                    new Audio("sounds/tom-2.mp3").play();
                    break;
                case 2:
                    new Audio("sounds/tom-3.mp3").play();
                    break;
                case 3:
                    new Audio("sounds/tom-4.mp3").play();
                    break;
                case 4:
                    new Audio("sounds/crash.mp3").play();
                    break;
                case 5:
                    new Audio("sounds/kick-bass.mp3").play();
                    break;
                case 6:
                    new Audio("sounds/snare.mp3").play();
                    break;
            }
        });
}
