var submitbutton = document.getElementById("submit");
var resetbutton = document.getElementById("reset")
var input = document.getElementById("name");
var picturebox = document.getElementById("picturebox");
var errorbox = document.getElementById("errorbox");


submitbutton.addEventListener("click", submitfunction);
resetbutton.addEventListener("click", resetfunction);

function spongebobText() {
    phrase = input.value;
    let newStr = '';
    phrase.split('').forEach((el, idx) => {
        newStr += idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
    })
    return newStr
}


function submitfunction(event) {
    event.preventDefault();
    console.log(input.value);
    if (input.value === "") {
        picturebox.setAttribute("style", "display:none")
        errorbox.textContent = "You Must Input Text!"
    } else {
        picturebox.removeAttribute("style", "display:none");
        picturebox.textContent = spongebobText()
    }
}


function resetfunction() { picturebox.setAttribute("style", "display:none") }