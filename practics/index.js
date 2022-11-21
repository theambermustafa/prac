const btn = document.getElementById("btn");

btn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "yellow";
});