let chance = 15;

function randomMiss(){
    Math.floor(Math.random() * 100) + 1;
}

function sendNumber() {
    let number = document.getElementById("numberInput").value;
    let resultElement = document.getElementById("result");
    

    

    if(number >= 1 && number <= 100) {
        resultElement.textContent = "Loading...";
        let randomTimeout = Math.floor(Math.random() * (15000 - 2000 + 1)) + 2000; // Random timeout between 2 to 15 seconds

        setTimeout(function() {
            resultElement.textContent = "" + number;
        }, randomTimeout);
    } if(number = 69) {
        window.location.href("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    
    else {
        resultElement.textContent = "Please enter a number between 1 and 100";
    }
}
