let val, randomNr;
function getVal() {
    val = document.querySelector('input').value;
    randomNr = Math.floor(Math.random() * val) + 1;
}
var buttons = 1;
function numbers() {
    for (let i = 1; i <= val; ++i) {
        let btn = document.createElement("button");
        btn.innerHTML = buttons;
        btn.className = "btn btn-outline-success";
        document.body.appendChild(btn);
        btn.onclick = function() {
            if(val == randomNr) {
                alert("You win!");
                btn.className = "btn btn-primary";
            } else {
                alert("Try again! The winner button is " + randomNr );
                btn.className = "btn btn-danger";
            }
        }
        ++buttons;
    }
}