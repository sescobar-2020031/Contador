let counter = 0;

const counterNumber = document.querySelector("#counterNumber");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;

        //Performing functions such as increment, diminish and reset.
        if (style.contains("diminish")) {
            counter--;
        } else if (style.contains("increase")) {
            counter++;
        } else {
            counter = 0;
        }
        counterNumber.textContent = counter;

        //Add color to our counter
        if (counter == 0) counterNumber.style.color = "#000"
        if (counter > 0) counterNumber.style.color = "#008f39";
        if (counter < 0) counterNumber.style.color = "#ba215a";
    });
});