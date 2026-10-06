/* ========================================
   PAGE NAVIGATION
======================================== */

const pages = document.querySelectorAll(".page");


function showPage(pageId) {

    // Hide every page
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show the requested page
    const pageToShow = document.getElementById(pageId);

    if (pageToShow) {
        pageToShow.classList.add("active");
    }
}


/* ========================================
   NEXT BUTTONS
======================================== */

const nextButtons = document.querySelectorAll("[data-next]");

nextButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const nextPage = this.dataset.next;

        showPage(nextPage);

    });

});


/* ========================================
   BACK BUTTONS
======================================== */

const backButtons = document.querySelectorAll("[data-back]");

backButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const previousPage = this.dataset.back;

        showPage(previousPage);

    });

});


/* ========================================
   FRIENDSHIP CHECKLIST
======================================== */

const checkItems = document.querySelectorAll(".check-item");

const checkedCount = document.getElementById("checked-count");

const progressFill = document.getElementById("progress-fill");


checkItems.forEach(function(item) {

    item.addEventListener("click", function() {

        // Toggle completed state
        this.classList.toggle("completed");


        // Count completed items
        const completedItems =
            document.querySelectorAll(
                ".check-item.completed"
            ).length;


        // Update number
        checkedCount.textContent = completedItems;


        // Update progress bar
        const progress =
            (completedItems / checkItems.length) * 100;

        progressFill.style.width = progress + "%";


        // Little celebration when everything is checked
        if (completedItems === checkItems.length) {

            checkedCount.textContent = "6";

        }

    });

});



/* ========================================
   THE RUNAWAY NO BUTTON 
======================================== */

const noButton = document.getElementById("noButton");
const noHint = document.getElementById("noHint");

if (noButton) {

    const funnyMessages = [
        "You can try... 👀",
        "Eh ba Mwenza you want to say no?😭",
        "Nice try 😂",
        "Nope. Try again 🎀",
        "Mona boi, ninshi?😭",
        "That button says NO to your NO 💗",
        "You're coming and you know it 😂",
        "Why are we doing this? 😭",
        "The button has left the building 🏃🏽‍♀️"
    ];

    let messageIndex = 0;

    function moveNoButton() {

        const button = noButton;

        const maxX = window.innerWidth - button.offsetWidth - 30;
        const maxY = window.innerHeight - button.offsetHeight - 30;

        const randomX = Math.max(
            20,
            Math.random() * maxX
        );

        const randomY = Math.max(
            20,
            Math.random() * maxY
        );

        button.style.position = "fixed";
        button.style.left = randomX + "px";
        button.style.top = randomY + "px";

        messageIndex =
            (messageIndex + 1) % funnyMessages.length;

        noHint.textContent = funnyMessages[messageIndex];
    }


    /* Desktop */

    noButton.addEventListener("mouseenter", function() {
        moveNoButton();
    });


    /* Mobile */

    noButton.addEventListener("touchstart", function(event) {

        event.preventDefault();

        moveNoButton();

    });


    /* If she somehow manages to click it 😂 */

    noButton.addEventListener("click", function(event) {

        event.preventDefault();

        moveNoButton();

    });

}


/* ========================================
   I'M COMING — CELEBRATION BURST 🎀
======================================== */

const comingButton = document.querySelector(".coming-button");

if (comingButton) {

    comingButton.addEventListener("click", function() {

        const celebrationSymbols = [
            "💗",
            "💕",
            "♡",
            "✨",
            "✦",
            "🎀",
            "💗",
            "✨",
            "🌸",
            "♡",
            "💕",
            "✦"
        ];

        celebrationSymbols.forEach(function(symbol, index) {

            const burst = document.createElement("span");

            burst.classList.add("burst-item");

            burst.textContent = symbol;

            /* Give every piece a different direction */

            const angle =
                (index / celebrationSymbols.length) * 360;

            const distance =
                120 + Math.random() * 180;

            const radians =
                angle * Math.PI / 180;

            const x =
                Math.cos(radians) * distance;

            const y =
                Math.sin(radians) * distance;

            const rotation =
                Math.random() * 360 - 180;

            burst.style.setProperty(
                "--burst-x",
                x + "px"
            );

            burst.style.setProperty(
                "--burst-y",
                y + "px"
            );

            burst.style.setProperty(
                "--burst-rotate",
                rotation + "deg"
            );

            /* Slightly stagger the pieces */

            burst.style.animationDelay =
                (index * 0.03) + "s";

            document.body.appendChild(burst);

            /* Remove after animation */

            setTimeout(function() {
                burst.remove();
            }, 1500);

        });

    });

}
